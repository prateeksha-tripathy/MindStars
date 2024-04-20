import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";


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

app.listen(3000 , () => {
    console.log("Server is running on port 3000");
});


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);