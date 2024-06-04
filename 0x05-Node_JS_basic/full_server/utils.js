const fs = require('fs');

module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));
      // spliting the data and taking just only the
      // list without headder
      const linnes = data.split('\n').slice(1, -1);
      // gives just the headder of the dat
      const headder = data.split('\n').slice(0, 1)[0].split(',');
      // finding the firstname and then the field index
      const idxFn = headder.findIndex((ele) => ele === 'firstname');
      const idxFdex = headder.findIndex((ele) => ele === 'field');
      // declaration of two dictionaries that for count in each fieldds and stored listt of the studdents
      const fieldds = {};
      const studdents = {};
      // it will just only contain all the data
      const all = {};

      linnes.forEach((line) => {
        const listt = line.split(',');
        if (!fieldds[listt[idxFdex]]) fieldds[listt[idxFdex]] = 0;
        fieldds[listt[idxFdex]] += 1;
        if (!studdents[listt[idxFdex]]) studdents[listt[idxFdex]] = '';
        studdents[listt[idxFdex]] += studdents[listt[idxFdex]]
          ? `, ${listt[idxFn]}`
          : listt[idxFn];
      });
      for (const key in fieldds) {
        if (Object.hasOwnProperty.call(fieldds, key)) {
          const number = fieldds[key];
          all[key] = {
            studdents: `List: ${studdents[key]}`,
            number,
          };
        }
      }

      return resolve(all);
    });
  });
};
