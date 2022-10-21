export default class Author {
    constructor (name , avatar , occupation , first_name , last_name) {
      this.name = name ?? '';
      this.avatar = avatar ?? '';
      this.occupation = occupation ?? ''
      this.first_name = first_name ?? ''
      this.last_name = last_name ?? ''
      return {
        username : this.name,
        avatar : this.avatar,
        occupation : this.occupation,
        name : this.first_name + ' ' + this.last_name
      }
    }
}