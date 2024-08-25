// Initial array of students
let students = [
    { id: 1, firstName: "John", lastName: "Doe", age: 18, grade: "A" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 20, grade: "B" },
    { id: 3, firstName: "Sam", lastName: "Brown", age: 19, grade: "A" },
    { id: 4, firstName: "Emily", lastName: "Davis", age: 21, grade: "C" }
];

// Function to add a new student
function addStudent(id, firstName, lastName, age, grade) {
    const newStudent = { id, firstName, lastName, age, grade };
    students.push(newStudent);
    console.log(`Student ${firstName} ${lastName} added successfully.`);
}

// Function to update an existing student's information
function updateStudent(id, updatedInfo) {
    const student = students.find(student => student.id === id);
    if (student) {
        Object.assign(student, updatedInfo);
        console.log(`Student ID ${id} updated successfully.`);
    } else {
        console.log(`Student ID ${id} not found.`);
    }
}

// Function to delete a student by ID
function deleteStudent(id) {
    const index = students.findIndex(student => student.id === id);
    if (index !== -1) {
        const deletedStudent = students.splice(index, 1);
        console.log(`Student ${deletedStudent[0].firstName} ${deletedStudent[0].lastName} deleted successfully.`);
    } else {
        console.log(`Student ID ${id} not found.`);
    }
}

// Function to display all students
function listAllStudents() {
    console.log("Student List:");
    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

// Function to find students by grade
function findStudentsByGrade(grade) {
    const result = students.filter(student => student.grade === grade);
    if (result.length > 0) {
        console.log(`Students with grade ${grade}:`);
        result.forEach(student => {
            console.log(`ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}`);
        });
    } else {
        console.log(`No students found with grade ${grade}.`);
    }
}

// Function to calculate the average age of all students
function calculateAverageAge() {
    if (students.length === 0) {
        console.log("No students available to calculate the average age.");
        return;
    }
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    const averageAge = totalAge / students.length;
    console.log(`Average age of students: ${averageAge.toFixed(2)}`);
}

// Testing the Student Management System

// Display all students initially
listAllStudents();

// Add a new student
addStudent(5, "Michael", "Johnson", 22, "B");

// Update a student's information
updateStudent(2, { age: 21, grade: "A" });

// Delete a student
deleteStudent(3);

// Display all students after modifications
listAllStudents();

// Find students by grade
findStudentsByGrade("A");

// Calculate average age of students
calculateAverageAge();
