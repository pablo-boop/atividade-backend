import Course from "../models/course/Course.js";
import CourseList from "../models/course/CourseList.js";

const list = new CourseList();

export const getAllCourses = (req, res) => {
    const course = list.getCourses();

    if (!course.length) {
        return res.status(404).send({
            message: "Nenhum curso encontrado",
            status: "Not found"
        });
    }

    return res.status(200).send({
        message: `Todos os cursos`,
        origem: "Controller",
        data: course
    });
};

export const getCourseById = (req, res) => {
    const { id } = req.params;
    const course = list.getCourseById(id);

    if (!course) {
        return res.status(404).send({
            message: "Nenhum curso com esse id",
            status: "Not found"
        });
    }

    return res.status(200).send({
        message: `Curso através do id: ${id}`,
        origem: "Controller"
    });
};

export const postCourse = (req, res) => {
    const { name, description, vacancies } = req.body;

    if (!name || !description || !vacancies) {
        return res.status(400).send({ message: "Dados inválidos!" });
    };

    const course = new Course(name, description, vacancies);
    list.addCourse(course)

    return res.status(200).send({
        message: "Rota POST",
        origem: "Controller",
        data: course 
    });
};

export const updateCourse = (req, res) => {
    const { id } = req.params;
    const { name, description, vacancies } = req.body;

    const course = list.getCourseById(id)

    if(!course) {
        return res.status(404).send({
            message: "Nenhum curso com esse id",
            status: "Not found"
        });
    }

    if (!name || !description || !vacancies) {
        return res.status(400).send({ message: "Dados inválidos!" });
    };
    return res.status(200).send({
        name: name,
        description: description,
        vacancies: vacancies,
        origem: "Controller",
        id: id
    });
};

export const deleteCourse = (req, res) => {
    const { id } = req.params;
    const course = list.getCourseById(id)

    if (!course) {
        return res.status(404).send({
            message: "Nenhum curso com esse id",
            status: "Not found"
        });
    }

    return res.status(200).send({
        message: `Curso deletado com o id: ${id}`,
        origem: "Controller",
        data: course
    });
};