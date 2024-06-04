const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    const dataa = fs.readFileSync(path, { encoding: 'utf-8' });
    // spliting the data and taking just only the
    // list without headder
    const linees = dataa.split('\n').slice(1, -1);
    // gives just the headder of the data
    const headderr = dataa.split('\n').slice(0, 1)[0].split(',');
    // finding the firstname and then the field index
    const idxFn = headderr.findIndex((ele) => ele === 'firstname');
    const idxFd = headderr.findIndex((ele) => ele === 'field');
    // declarate two dictionaries 
    const fielddss = {};
    const studdents = {};

    linees.forEach((line) => {
      const list = line.split(',');
      if (!fielddss[list[idxFd]]) fielddss[list[idxFd]] = 0;
      fielddss[list[idxFd]] += 1;
      if (!studdents[list[idxFd]]) studdents[list[idxFd]] = '';
      studdents[list[idxFd]] += studdents[list[idxFd]] ? `, ${list[idxFn]}` : list[idxFn];
    });

    console.log(`Number of students: ${linees.length}`);
    for (const keyy in fielddss) {
      if (Object.hasOwnProperty.call(fielddss, keyy)) {
        const elementt = fielddss[keyy];
        console.log(`Number of students in ${keyy}: ${elementt}. List: ${studdents[keyy]}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};
