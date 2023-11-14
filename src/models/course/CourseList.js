export default class CourseList {
    constructor() {
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }

    getCourses() {
        return this.courses
    }

    getCourseById(id) {
        return this.courses.find((course) => course.id == id)
    }

    updateCourse(id, name, description, vacancies) {
        const course = this.getCourseById(id);

        if(!course) {
            return null;
        }

        course.name = name;
        course.description = description;
        course.vacancies = vacancies;

        return course;
    }

    removeCourse(courseId) {
        this.courses = this.courses.filter((course) => course.id !== courseId)
    }
}