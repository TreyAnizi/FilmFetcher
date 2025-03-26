import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

import movieRouter from "./routes/movies.js";


const connectionString = process.env.MONGO_URI

mongoose.connect(connectionString).then(() => {
    console.log('database connected')
}).catch(() => {console.log(console.error()
)})

const app = express();

app.use(express.json());

app.use("/api/v1", movieRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
