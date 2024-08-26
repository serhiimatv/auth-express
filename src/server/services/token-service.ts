import jwt from "jsonwebtoken";
import TokenModel from "../models/token-model";

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

  async saveToken(userId: string, refreshToken: string) {
    const tokenData = await TokenModel.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenModel.create({ user: userId, refreshToken });
    return token;
  }
}

export default new TokenService();
