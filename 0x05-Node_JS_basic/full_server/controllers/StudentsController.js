const readDatabase = require('../utils');

module.exports = class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let printOutData = 'This is the list of our students';

        for (const fieldd in data) {
          if (Object.hasOwnProperty.call(data, fieldd)) {
            const elementt = data[fieldd];

            printOutData += `\nNumber of students in ${fieldd}: ${elementt.number}. ${elementt.students}`;
          }
        }
        response.send(printOutData);
      })
      .catch((err) => { response.send(err.message); });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['SWE', 'CS'].includes(request.params.major)) response.status(500).send('Major parameter must be CS or SWE');

    readDatabase(process.argv[2])
      .then((data) => {
        const printOutData = data[request.params.major].students;

        if (printOutData) response.send(printOutData);
        response.status(500).send('Major parameter must be CS or SWE');
      })
      .catch((err) => { response.send(err.message); });
  }
};
