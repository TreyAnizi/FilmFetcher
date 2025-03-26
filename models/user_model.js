import { Schema, model } from "mongoose";


// resgister Schema
const registerUserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const registerUserModel = model("login", loginSchema);



// Login Schema
const loginUserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });

  export const loginUserModel = model("login", loginSchema);
