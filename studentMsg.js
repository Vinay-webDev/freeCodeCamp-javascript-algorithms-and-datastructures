///////////////////////////////////////////////////

const getAverage = require('./getAverage');
const getGrade = require('./getGrade');



function studentMsg(totalScores, studentScore) {
    let studentAverage = getAverage(totalScores);
    let studentGrade = getGrade(studentScore);
    let msg = '';
    if (studentGrade === "F") {
      msg = "You failed the course.";
    } else {
      msg = "You passed the course.";
    }
    return "Class average: "+studentAverage+"."+" Your grade: "+studentGrade+"."+" "+msg;
 }
 console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
 console.log(studentMsg([92, 88, 45, 77, 88, 100, 79, 85, 97, 89], 99));















