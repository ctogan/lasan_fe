import Articles from '~/assets/service/ArticlesService'

export default (ctx, inject) => {
  const services = {
    articles : new Articles(ctx.$axios)
    //articles : {id:"1" , title : "title" , image : "image"}
  }
  inject('services', services)
}