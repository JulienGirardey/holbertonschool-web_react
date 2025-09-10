/// <reference path="./subjects/Cpp.ts" />

const teacher: Subjects.Teacher = { firstName: "John", lastName: "Doe", experienceTeachingC: 5 };
const cpp = new Subjects.Cpp(teacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());