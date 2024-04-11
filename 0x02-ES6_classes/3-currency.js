export default class Currency {
    constructor(code, name) {
      if (typeof code !== 'string') throw TypeError('student must be a String');
      if (typeof name !== 'string') throw TypeError('student must be a String');
  
      this._code = code;
      this._name = name;
    }
  
    get code() {
      return this._code;
    }
  
    get name() {
      return this._name;
    }
  
    set code(new_Code) {
      if (typeof code !== 'string') throw TypeError('student must be a String');
      this._code = new_Code;
    }
  
    set name(new_Name) {
      if (typeof new_Name !== 'string') throw TypeError('student must be a String');
      this._name = new_Name;
    }
  
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
