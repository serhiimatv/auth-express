import jwt, { UserIDJwtPayload } from "jsonwebtoken";
import TokenModel from "../models/token-model";

declare module "jsonwebtoken" {
  export interface UserIDJwtPayload extends jwt.JwtPayload {
    id: string;
  }
}
class TokenService {
  generateTokens(payload: object) {
    const accessToken = jwt.sign(
      payload,
      import.meta.env.VITE_JWT_ACCESS_SECRET,
      { expiresIn: "30m" }
    );
    const refreshToken = jwt.sign(
      payload,
      import.meta.env.VITE_JWT_REFRESH_SECRET,
      { expiresIn: "30d" }
    );

    return { accessToken, refreshToken };
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(
        token,
        import.meta.env.VITE_JWT_ACCESS_SECRET
      );

      return userData;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(
        token,
        import.meta.env.VITE_JWT_REFRESH_SECRET
      ) as UserIDJwtPayload;

      return userData;
    } catch (error) {
      return null;
    }
  }

  async saveToken(userId: string, refreshToken: string) {
    const tokenData = await TokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenModel.create({ user: userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken: string) {
    const tokenData = await TokenModel.deleteOne({ refreshToken });

    return tokenData;
  }

  async findToken(refreshToken: string) {
    const tokenData = await TokenModel.findOne({ refreshToken });

    return tokenData;
  }
}

export default new TokenService();
