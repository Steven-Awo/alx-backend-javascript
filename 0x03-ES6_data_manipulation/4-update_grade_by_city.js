export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
      .filter((student) => student.location.localeCompare(city) === 0)
      .map((a) => {
        const newGrade = newGrades.filter((b) => b.studentId === a.id);
        const student = a;
        if (newGrade.length === 1) student.grade = newGrade[0].grade;
        else student.grade = 'N/A';
        return student;
      });
  }
