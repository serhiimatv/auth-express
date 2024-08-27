import UserModel from "../models/user-model";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import MailService from "./mail-service";
import TokenService from "./token-service";
import UserDto, { IUserDtoModel } from "../dtos/user-dto";

class UserService {
  async registration(email: string, password: String) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`A user with such email ${email} exists`);
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
      throw new Error("Incorrect activation link");
    }

    user.isActivated = true;
    user.save();
  }
}

export default new UserService();
