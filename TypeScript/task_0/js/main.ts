interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "Guillaume",
	lastName: "Font",
	age: 33,
	location: "Holberton"
}

const student2: Student = {
	firstName: "Julien",
	lastName: "Girardey",
	age: 21,
	location: "Holberton"
}

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const header = document.createElement("tr");
header.innerHTML = "<th>First Name</th><th>Location</th>";
table.appendChild(header);

studentsList.forEach(student => {
	const row = document.createElement("tr");
	row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
	table.append(row);
});
document.body.appendChild(table);
