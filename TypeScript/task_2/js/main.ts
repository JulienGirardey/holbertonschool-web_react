interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome() {
		return "Working from home";
	}

	getCoffeeBreak() {
		return "Getting a coffee break";
	}

	workDirectorTasks() {
		return "Getting to director tasks";
	}
}

class Teacher implements TeacherInterface {
	workFromHome() {
		return "Cannot work from home";
	}

	getCoffeeBreak() {
		return "Cannot have a break";
	}

	workTeacherTasks() {
		return "Getting to work";
	}
}

function createEmployee(salary: number | string): Teacher | Director {
	if (typeof salary === "number" && salary < 500) {
		return new Teacher;
	} else {
		return new Director;
	}
}

console.log(createEmployee(200)instanceof Teacher);
console.log(createEmployee(1000) instanceof Director);
console.log(createEmployee('$500') instanceof Director);

console.log(createEmployee(200).constructor.name);
console.log(createEmployee(1000).constructor.name);
console.log(createEmployee('$500').constructor.name);

function isDirector(employee: Teacher | Director): employee is Director {
	return employee instanceof Director;
}

function executeWork(employee: Teacher | Director): string {
	if (isDirector(employee)) {
		return employee.workDirectorTasks();
	} else {
		return employee.workTeacherTasks();
	}
}

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

let Subjects: "Math" | "History";

function teachClass(todayClass: string): string {
	if (todayClass === "Math") {
		return "Teaching Math";
	} else {
		return "Teaching History";
	}
}

console.log(teachClass('Math'));
console.log(teachClass('History'));


