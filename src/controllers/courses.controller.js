export const getAllCourses = (req, res) => {
    return res.status(200).send({ 
        message: `Todos os cursos`, 
        origem: "Controller" 
    });
};

export const getCourseById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ 
        message: `Curso através do id: ${id}`, 
        origem: "Controller" 
    });
};

export const postCourse = (req, res) => {
    const { name, description, vacancies} = req.body;
    if(!name || !description || !vacancies) {
        return res.status(400).send({ message: "Dados inválidos!"});
    };
    return res.status(200).send({
        name: name,
        description: description,
        vacancies: vacancies,
        origem: "Controller"
    });
};

export const updateCourse = (req, res) => {
    const { id } = req.params;
    const { name, description, vacancies} = req.body;

    if(!name || !description || !vacancies) {
        return res.status(400).send({ message: "Dados inválidos!"});
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
    return res.status(200).send({
        message: `Curso deletado com o id: ${id}`,
        origem: "Controller"
    });
};