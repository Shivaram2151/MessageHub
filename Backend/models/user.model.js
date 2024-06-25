import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: "string",
      required: true,
    },
    username: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      minlength: 6,
    },
    gender: {
      type: "string",
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: "string",
      default: " ",
    },
  },
  { timestamps: true } // will create created timestamps and updated timestamps
);

const User = mongoose.model("User", userSchema);

export default User;
