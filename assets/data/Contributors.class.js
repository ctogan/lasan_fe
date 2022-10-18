export default class Contributors {
    constructor (uuid , first_name , last_name ,username , avatar , occupation , followed) {
      this.uuid = uuid ?? '';
      this.first_name = first_name;
      this.last_name = last_name
      this.username = username
      this.avatar = avatar
      this.occupation = occupation
      this.followed = followed ?? false
      
      return {
        uuid : this.uuid,
        fisrt_name :this.first_name,
        last_name :this.last_name,
        username : this.username,
        avatar : this.avatar,
        occupation : this.occupation,
        followed : this.followed,
        name : this.first_name + ' ' + this.last_name
      }
    }

}