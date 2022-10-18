export default class User {
    constructor (name , avatar) {
      this.name = name ?? '';
      this.image = avatar ?? '';
      return {
        name : this.name,
        image : this.image,
      }
    }

}