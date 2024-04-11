export default class HolbertonCourse {
    constructor(name, length, students) {
      if (typeof name !== 'string') {
        throw TypeError('name must be a String');
      }
      if (!Array.isArray(students)) {
        throw TypeError('students must be an Array');
      }
      if (typeof length !== 'number') {
        throw TypeError('length must be a Number');
      }
      students.forEach((student) => {
        if (typeof student !== 'string') throw TypeError('student must be a String');
      });
      this._name = name;
      this._length = length;
      this._students = students;
    }
  
    get name() {
      return this._name;
    }
    get length() {
      return this._length;
    }
    get students() {
      return this._students;
    }

    set name(new_Name) {
      if (typeof new_Name !== 'string') throw TypeError('name must be a String');
      this._name = new_Name;
    }
    set length(new_Length) {
      if (typeof new_Length !== 'number') throw TypeError('length must be a Number');
      this._length = new_Length;
    }
    set students(new_Students) {
      if (!Array.isArray(new_Students)) throw TypeError('students must be an Array');
      new_Students.forEach((student) => {
        if (typeof student !== 'string') throw TypeError('student must be a String');
      });
      this._students = new_Students;
    }
}
