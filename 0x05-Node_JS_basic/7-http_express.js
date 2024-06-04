const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      // spliting the data and taking just only the
      list without headder
      const linnes = data.split('\n').slice(1, -1);
      // gives just the headder of the data
      const headder = data.split('\n').slice(0, 1)[0].split(',');
      // finding the firstname and then the field index
      const idxFirstname = headder.findIndex((ele) => ele === 'firstname');
      const idxFdist = headder.findIndex((ele) => ele === 'field');
      // declarate two dictionaries 
      const fieldds = {};
      const studdents = {};
      // it should contain the all data
      const all = {};

      linnes.forEach((line) => {
        const list = line.split(',');
        if (!fieldds[list[idxFdist]]) fieldds[list[idxFdist]] = 0;
        fieldds[list[idxFdist]] += 1;
        if (!studdents[list[idxFdist]]) studdents[list[idxFdist]] = '';
        studdents[list[idxFdist]] += studdents[list[idxFdist]] ? `, ${list[idxFirstname]}` : list[idxFirstname];
      });

      all.numberStudents = `Number of students: ${linnes.length}\n`;
      all.listStudents = [];
      for (const keyy in fieldds) {
        if (Object.hasOwnProperty.call(fieldds, keyy)) {
          const elementt = fieldds[keyy];
          all.listStudents.push(`Number of students in ${keyy}: ${elementt}. List: ${studdents[keyy]}`);
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
app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

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
