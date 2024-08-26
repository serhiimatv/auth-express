import { Schema, model } from "mongoose";

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  refreshToken: { type: String, require: true },
});

export default model("Token", TokenSchema);

// export default model("User", TokenSchema);

// mongoose.models["Task"] ?? mongoose.model("Task", Task);
