const students = [
    { name: "Anu", marks: 80 },
    { name: "Rahul", marks: 65 },
    { name: "Meera", marks: 91 },
    { name: "Vikram", marks: 72 },
];

function getTopperStudents(students, criteriaMark) {
    const topperStudents = [];
    for (let index = 0; index < students.length; index++) {
        const studentMark = students[index].marks;
        if (studentMark >= criteriaMark) {
            topperStudents.push(students[index].name);
        }
    }
    return topperStudents;
}

console.log(getTopperStudents(students, 90));
