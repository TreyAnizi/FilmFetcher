import { Schema, model } from "mongoose";



// Movies Schema
const moviesSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    genre: { type: String },
    rating: { type: Number, required: true },
    image: { type: String },
  },
  {
    timestamps: true,
  }
);

export const moviesModel = model("movies", moviesSchema);
