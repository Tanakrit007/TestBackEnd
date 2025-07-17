import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5001;

import studentRouter from "./routers/student.router.js";

import cors from "cors";
app.use(
  cors({
    origin: ["http://localhost:5174", "127.0.0.1:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("student Restful API ");
});

// use router
app.use("/api/v1/student", studentRouter);

app.listen(PORT, () => {
  console.log("Listening to http://localhost:" + PORT);
});
