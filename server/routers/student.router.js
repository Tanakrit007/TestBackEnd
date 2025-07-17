import StudentController from "../controller/student.controller.js";

import express from "express";
const router = express.Router();

//POST http://localhost:5001/api/v1/student
router.post("/", studentController.create);

//GET http://localhost:5001/api/v1/student
router.get("/", studentController.getAll);

//GET http://localhost:5001/api/v1/student/:id
router.get("/:id", studentController.getById);

//PUT http://localhost:5001/api/v1/student/:id
router.put("/:id", studentController.update);

//DELETE http://localhost:5001/api/v1/student/:id
router.delete("/:id", studentController.deleteById);
