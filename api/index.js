import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

// database connection
mongoose.connect(process.env.MONGO)
.then(()=> { 
    console.log("mongoDB is connected")
})
.catch ( (err) => {
    console.log("Error connection to database : ", err);
})

const app = express();
app.use(express.json());      // in order to send json request to the application
app.use(cookieParser());      // to verify token for autherization

app.listen(3000 , () => {
    console.log("Server is running on port 3000");
});


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);

app.use ( (err , req ,res , next ) => {                                     // MIDDLEWARE to handle all the errors 
    const statusCode = err.statusCode || 500 ;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success : false ,
        statusCode ,
        message,
    });
});