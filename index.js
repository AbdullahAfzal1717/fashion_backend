import express from "express";
import cors from "cors";
import imageRoutes from "./routes/imageRoutes.js";
import dotenv from "dotenv";


const app = express();


dotenv.config()
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api", imageRoutes);

const startServer = () => {
    try {
        // connectDB(process.env.MONGODB_URL)
        app.listen(5000, () => {
            console.log("Server listening on 5000 http://localhost:5000");
        });
    } catch (err) {
        console.log(err)
    }
}

startServer();