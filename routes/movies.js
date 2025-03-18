import { Router } from "express";
import { deleteMovie, postMovie, updateMovie } from "../controllers/movies.js";

const movieRouter = Router();

movieRouter.post("/movie", postMovie);

movieRouter.delete("/movie:Id", deleteMovie);

movieRouter.patch("/movie:Id", updateMovie);

export default movieRouter
// export const moviesRouter = Router
