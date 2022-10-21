export default class Categories {
    constructor (name) {
      this.name = name ?? '';
      return {
        name : this.name,
      }
    }
}