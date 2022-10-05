export default class Topic {
    constructor (slug , topic) {
      this.slug = slug ?? '';
      this.topic = topic;
      
      return {
        slug : this.slug,
        topic : this.topic
      }

    }

}