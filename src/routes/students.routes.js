import { Router } from "express";
import {
    deleteStudent,
    getAllStudents,
    getById,
    postStudent,
    updateStudent
} from "../controllers/students.controller.js";

const studentsRouter = Router();

//GET
studentsRouter.get("/", getAllStudents);

//GET by ID
studentsRouter.get("/:id", getById);

//POST
studentsRouter.post("/", postStudent);

//PUT
studentsRouter.put("/:id", updateStudent);

//DELETE
studentsRouter.delete("/:id", deleteStudent);

export default studentsRouter;