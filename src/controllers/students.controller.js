export const getAllStudents = (req, res) => {
    return res.status(200).send({ message: `Todos alunos via controller`, status: "200 ok" });
};

export const getById = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Aluno pelo id: ${id}`, origem: "Controller" });
};

export const postStudent = (req, res) => {
    const { name, email, age } = req.body;
    if(!name || !email || !age) {
        return res.status(400).send({ message: "Dados inválidos" })
    }
    return res.status(200).send(
        {
            name: name,
            email: email,
            age: age,
            origem: "Controller"
        }
    );
};

export const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;

    if(!name || !email || !age) {
        return res.status(400).send({ message: "Dados inválidos" })
    }
    return res.status(200).send(
        {
            name: name,
            email: email,
            age: age,
            origem: "Controller",
            id: id
        }
    );
};

export const deleteStudent = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Rota DELETE aluno com ID ${id}`,
        origem: "Controller"
    })
}