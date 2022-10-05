import Articles from "../data/Articles.class";

export default class ArticlesApi {
  constructor ($axios) {
    this.axios = $axios
  }

  findAll () {
    return this.axios({
      method: 'GET',
      url: 'http://127.0.0.1:3001/api/articles',
      withCredentials: true
    }).then((response) => {
      const list = []
      response.data.forEach((response) => {
        list.push(new Articles(response.id, response.title, response.articles))
      })
      return list
    })
  }
  findBySlug(slug){
    return this.axios({
      method: 'POST',
      data : {slug : slug},
      url: 'http://127.0.0.1:3001/api/article/detail',
      withCredentials: true
    }).then((response) => {
      let res = response.data.data
      let detail = {}
      detail = new Articles
              (
                res.id, 
                res.slug,
                res.title,
                res.image,
                res.categories,
                res.date,
                res.article,
                res.read_calculation,
                res.is_like,
                res.is_wish,
                res.total_views,
                res.total_likes,
                res.total_comment,
                res.author
              )
      return detail
    })
  }

  // create (title) {
  //   return this.axios({
  //     method: 'post',
  //     url: 'todo',
  //     data: {
  //       title,
  //       completed: false
  //     },
  //     withCredentials: true
  //   }).then((response) => {
  //     return response.data
  //   })
  // }

  // complete (todo) {
  //   return this.axios({
  //     method: 'put',
  //     url: 'todo/' + todo.id,
  //     data: {
  //       id: todo.id,
  //       title: todo.title,
  //       completed: true
  //     },
  //     withCredentials: true
  //   }).then((response) => {
  //     return response.data
  //   })
  // }

  // deleteItem (id) {
  //   return this.axios({
  //     method: 'delete',
  //     url: 'todo/' + id,
  //     withCredentials: true
  //   })
  // }
}
