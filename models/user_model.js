import { Schema, model } from "mongoose";

// Login Schema
const loginSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

  export const loginModel = model("login", loginSchema);
