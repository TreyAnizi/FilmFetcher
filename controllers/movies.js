import { moviesModel } from "../models/movie.js";

export const postMovie = async (req, res) => {
  const movie = new moviesModel(req.body);
  const newMovie = await movie.save();
  res.status(200).json({ movies: newMovie });
};

export const getMovie = (req, res) => {
  const allMovies = moviesModel.find({});
  res.status(200).json({ movies: allMovies });
};

export const updateMovie = (req, res) => {
  const newUpdatedMovie = moviesModel.findByIdAndUpdate(
    req.params.Id,
    req.body,
    { new: true }
  );
  res.status(200).json("movies", newUpdatedMovie);
};

export const deleteMovie = async (req, res) => {
  await moviesModel.findByIdAndDelete(req.params.Id);
  res.status(200).json("movie deleted");
};
