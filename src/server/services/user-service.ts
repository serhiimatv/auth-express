import UserModel from "../models/user-model";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import MailService from "./mail-service";
import TokenService from "./token-service";
import UserDto, { IUserDtoModel } from "../dtos/user-dto";

class UserService {
  async registration(email: String, password: String) {
    const candidate = await UserModel.findOne({ email });
    if (candidate) {
      throw new Error(`A user with such email ${email} exists`);
    }

    const hashPassword = await bcrypt.hash(password as string | Buffer, 3);

    const activatedLink = v4();

    const user = await UserModel.create({ email, password: hashPassword });

    await MailService.sendActivationMail(email, activatedLink);

    const userDto = new UserDto(user as unknown as IUserDtoModel);
    const tokens = TokenService.generateTokens({ ...userDto });

    await TokenService.saveToken(userDto.id as string, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}

export default new UserService();
