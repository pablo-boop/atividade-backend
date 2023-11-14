import { Router } from "express";

import {
    getAllCourses,
    getCourseById,
    postCourse,
    updateCourse,
    deleteCourse
}   from '../controllers/courses.controller.js';

const courseRoute = Router();

//GET
courseRoute.get("/", getAllCourses);

//GET by ID
courseRoute.get("/:id", getCourseById);

//POST
courseRoute.post("/", postCourse);

//PUT
courseRoute.put("/:id", updateCourse);

//DELETE
courseRoute.delete("/:id", deleteCourse);

export default courseRoute;

