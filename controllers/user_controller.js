import { registerUserValidator } from "../validators/user_validator"




//REGISTER NEW USER
export const newUser = (req, res) => {
    const {error, value} = registerUserValidator.validate(req.body);
    if (error) { 
        return res.status(400).json({
            message: error.details[0].message
        });
    }
}

//LOGIN NEW USER
export const loginUser = async(req, res) => {
    
}