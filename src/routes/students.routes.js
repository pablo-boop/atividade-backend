import { Router } from "express";

const studentsRouter = Router();

studentsRouter.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota GET all alunos" });
});

studentsRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200).send({ message: `Rota GET aluno por id: ${id}` });
});

studentsRouter.post("/", (req, res) => {
    const { name, email, age } = req.body;
    if(!name || !email || !age) {
        return res.status(400).send({ message: "Dados inválidos!" })
    }
    return res.status(201).send({ message: "Rota POST alunos" });
});

export default studentsRouter;