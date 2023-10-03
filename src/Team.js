export default class Team {
  constructor(arrayCharacters) {
    this.constCharacters = arrayCharacters.length;
    for (let i = 0; i < this.constCharacters; i += 1) {
      this[i] = { ...arrayCharacters[i] };
    }
  }

  * [Symbol.iterator]() {
    let i = 0;
    while (i < this.constCharacters) {
      yield this[i];
      i += 1;
    }
  }
}
