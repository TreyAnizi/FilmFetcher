import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";



export const movieImageUpload = ({
    storage: multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath: '/movies-api/posters/*'
    })
})