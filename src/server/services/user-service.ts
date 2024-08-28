import UserModel from "../models/user-model";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import MailService from "./mail-service";
import TokenService from "./token-service";
import UserDto, { IUserDtoModel } from "../dtos/user-dto";
import ApiError from "../exceptions/api-error";
// import { UserIDJwtPayload, type JwtPayload } from "jsonwebtoken";

class UserService {
  async registration(email: string, password: String) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`A user with such email ${email} exists`);
    }

    const hashPassword = await bcrypt.hash(password as string | Buffer, 3);

    const activationLink = v4();

    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });

    await MailService.sendActivationMail(
      email,
      `${import.meta.env.VITE_API_URL}/activate/${activationLink}`
    );

    const userDto = new UserDto(user as unknown as IUserDtoModel);
    const tokens = TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto.id as string, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async activate(activationLink: string) {
    const user = await UserModel.findOne({ activationLink });

    if (!user) {
      throw ApiError.BadRequest("Incorrect activation link");
    }

    user.isActivated = true;
    user.save();
  }

  async login(email: string, password: string) {
    const user = await UserModel.findOne({ email });

    if (!user) {
      throw ApiError.BadRequest("User not found");
    }
    const isPasswordEquals = await bcrypt.compare(
      password,
      user.password as string
    );
    if (!isPasswordEquals) {
      throw ApiError.BadRequest("Wrong password");
    }

    const userDto = new UserDto(user as unknown as IUserDtoModel);

    const tokens = TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto.id as string, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async logout(refreshToken: string) {
    const token = await TokenService.removeToken(refreshToken);

    return token;
  }

  async refresh(refreshToken: string) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = TokenService.validateRefreshToken(refreshToken);

    const tokenFromDB = TokenService.findToken(refreshToken);

    if (!userData || !tokenFromDB) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserModel.findById(userData.id);

    const userDto = new UserDto(user as unknown as IUserDtoModel);

    const tokens = TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto.id as string, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }

  async getAllUsers() {
    const users = await UserModel.find();

    return users;
  }
}

export default new UserService();
