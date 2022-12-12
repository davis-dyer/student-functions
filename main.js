//Create a functions that creates a student object and passes in 2 parameters to be entered in

const createStudent = (name1, grade1) => {
    const student1 = {
        name: name1,
        grade: grade1
    };
    return student1;
}

const addMathGrade = (subjGrade) => {
    subjGrade.math = 'B';
    return subjGrade;
}

const addHistoryGrade = (subjGrade) => {
    subjGrade.history = 'C';
    return subjGrade;
}

const addScienceGrade = (wham) => {
    wham.science = 'A';
    return wham;
}




let student = createStudent('Davis', 11);
student = addMathGrade(student);
student = addHistoryGrade(student);
student = addScienceGrade(student);
console.log(student);