import { Router } from 'express';
import studentsRouter from './students.routes.js';

const router = Router();

router.use("/students", studentsRouter);

router.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor OK" });
})

export default router;