export const state = () => ({
    articles: []
  })
  
  export const mutations = {
    LIST_ARTICLE(state, articles) {
      state.articles = articles
    },
    remove(state, { post }) {
      state.list.splice(state.list.indexOf(post), 1)
    },
    toggle(state, post) {
      post.done = !post.done
    }
  }
  
  export const actions = {
    async getList({commit}, p){
        if(!p){
            p= 1
        }
        await this.$axios.$get(`/api/article`,{ params: { page: p } }).then((response) => {
            const list = []
            response.data.rows.forEach((response) => {  
                list.push(new Articles(response.id , response.slug , response.title , response.image , response.categories , response.date,response.article , response.subtitle ,response.read_calculation,response.is_like , response.is_wish , response.total_views , response.total_likes , response.total_comment , response.author))
            })
            commit('LIST_ARTICLE' , list)
            //return list
        })
    },
  }