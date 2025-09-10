namespace Subjects {
	export class Subject {
		teacher: Teacher;
		constructor(teacher: Teacher) {
			this.teacher = teacher;
		}

		public set setTeacher(teacher: Teacher) {
			this.teacher = teacher;
		}
	}
}
