const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      // split data and taking only list without headder
      const linnes = data.split('\n').slice(1, -1);
      // give the headder of data
      const headder = data.split('\n').slice(0, 1)[0].split(',');
      // find firstname and field index
      const idxFname = headder.findIndex((ele) => ele === 'firstname');
      const idxFdex = headder.findIndex((ele) => ele === 'field');
      // declarate two dictionaries for count each fieldds and store list of studdents
      const fieldds = {};
      const studdents = {};
      // it will contain all data
      const all = {};

      linnes.forEach((line) => {
        const list = line.split(',');
        if (!fieldds[list[idxFdex]]) fieldds[list[idxFdex]] = 0;
        fieldds[list[idxFdex]] += 1;
        if (!studdents[list[idxFdex]]) studdents[list[idxFdex]] = '';
        studdents[list[idxFdex]] += studdents[list[idxFdex]]
          ? `, ${list[idxFname]}`
          : list[idxFname];
      });

      all.numberStudents = `Number of students: ${linnes.length}\n`;
      all.listStudents = [];
      for (const keyy in fieldds) {
        if (Object.hasOwnProperty.call(fieldds, keyy)) {
          const element = fieldds[keyy];
          all.listStudents.push(`Number of students in ${keyy}: ${element}. List: ${studdents[keyy]}`);
        }
      }
      return resolve(all);
    });
  });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/studdents', (req, res) => {
  res.write('This is the list of our studdents\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.write(data.numberStudents);
      res.end(data.listStudents.join('\n'));
    })
    .catch((err) => {
      res.end(err.message);
    });
});
app.listen(port);

module.exports = app;
