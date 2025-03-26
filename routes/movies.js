import { Router } from "express";
import { deleteMovie, getMovie, postMovie, updateMovie } from "../controllers/movies.js";
import { movieImageUpload } from "../middlewares/uploads.js";

const movieRouter = Router();

movieRouter.post("/movie", movieImageUpload.single, postMovie);

movieRouter.delete("/movie:Id", deleteMovie);

movieRouter.patch("/movie:Id", updateMovie);

movieRouter.get("/movie", getMovie)

export default movieRouter
// export const moviesRouter = Router
