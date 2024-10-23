import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

export default mongoose.models["User"] ?? mongoose.model("User", UserSchema);
