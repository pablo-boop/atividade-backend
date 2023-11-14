import { v4 as uuidv4 } from 'uuid';

export default class Course {
    constructor(name, description, vacancies) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.vacancies = vacancies;
    }
}