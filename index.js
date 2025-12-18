import express from "express";
import cors from "cors";
import imageRoutes from "./routes/imageRoutes.js";

const app = express();
app.use(express.json());



app.use(cors());

app.get("/", (req, res) => {
    res.send("API is running");
});

app.use("/api", imageRoutes);

