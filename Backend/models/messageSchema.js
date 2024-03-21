import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema(
  {
    name: {
      type: [String],
      required: [true, "Name required"],
      minLength: [3, "New must contain at least 3 charactersi"],
    },
    email: {
      type: String,
      required: [true, "Email Required"],
      validate: [validator.isEmail, "Please provide valid email"],
    },
    subject: {
      type: String,
      required: [true, "Subject required"],
      minLength: [5, "Subject must have 3 charactersic"],
    },
    message: {
      type: String,
      required: [true, "Message Required"],
      minLength: [10, "Message must at least 10"],
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model("Message", messageSchema);
