interface MajorCredits {
	credits: number;
	readonly brand: "major";
}

interface MinorCredits {
	credits: number;
	readonly brand: "minor";
}

function sumMajorCredits(subject1: number, subject2: number) {
	return { credits: subject1 + subject2, brand: "major" };
}

function sumMinorCredits(subject1: number, subject2: number) {
	return { credits: subject1 + subject2, brand: "minor" };
}
