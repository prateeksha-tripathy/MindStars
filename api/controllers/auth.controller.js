import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req , res , next ) => {
    // console.log (req.body)
    const { username, email, password } = req.body ;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        // return res.status(400).json({ message : "All fields are required" });
        next(errorHandler(400,"All fields are required"));                      // as we have created a middleware function to hande the error , we can directly use that
    }

    const hashedPassword = bcryptjs.hashSync(password,10)

    const newUser = new User ({
        username ,
        email ,
        password : hashedPassword,
    });

    try {
        await newUser.save();
        res.json ('Signup successful');
    } catch (error) {
        // res.status(500).json({ message : error.message });
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password || email=='' || password==''){
        next(errorHandler(400,"All fields are required"));
    }

    try {
        const validUser = await User.findOne({ email});
        if(!validUser){
           return next(errorHandler(400,"User not found"));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
           return next(errorHandler(400,"Invalid password"));
        }

        const token = jwt.sign({id : validUser._id, isAdmin :validUser.isAdmin }, process.env.JWT_SECRET);

        const { password : pass , ...rest} = validUser._doc;            // to separate password fields from 

        res.status(200).cookie("access_token", token,{
            httpOnly: true}).json(rest);
        
    } catch (error) {
        next(error);
    }
}

export const google = async (req, res, next) => {
    const { email, name, googlePhotoUrl } = req.body;
        try {
          const user = await User.findOne({ email });
          if (user) {
            const token = jwt.sign({ id: user._id , isAdmin: user.isAdmin},process.env.JWT_SECRET);
            const { password, ...rest } = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly: true,
              }).json(rest);
        } else {
            // console.log("else condition");
            const generatedPassword = Math.random().toString(36).slice(-8);
            // console.log("Generated password ",generatedPassword);
            const hashedPassword = bcryptjs.hashSync(generatedPassword,10);
            // console.log(hashedPassword);
            const newUser = new User({
                username : name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture :googlePhotoUrl,
            });
            await newUser.save();
            const token = jwt.sign({id : newUser._id, isAdmin: newUser.isAdmin},process.env.JWT_SECRET);
            // console.log(token);
            const {password, ...rest} = newUser._doc;
            res.status(200).cookie("access_token", token,{                // cookie name is "access_token"
                httpOnly:true,
            }).json(rest)
        }
    } catch (error) {
        next(error);
    }
}