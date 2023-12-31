import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const UserModel = mongoose.model("users", UserSchema);

export { UserModel };
