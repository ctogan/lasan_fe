import Articles from "../../assets/data/Articles.class"

export default {
    getTrendings({commit}){
        return this.$axios.$get(`/api/article/trendings`).then((response) => {
            const trendings = []
            response.data.forEach((response) => {  
                trendings.push(new Articles(response.id , response.slug , response.title , response.image , response.categories , response.date,response.article, response.subtitle ,response.read_calculation,response.is_like , response.is_wish , response.total_views , response.total_likes , response.total_comment , response.author))
            })
            return trendings
        })
    },
    getList({commit}, p){
        if(!p){
            p= 1
        }
        return this.$axios.$get(`/api/article`,{ params: { page: p } }).then((response) => {
            const list = []
            response.data.rows.forEach((response) => {  
                list.push(new Articles(response.id , response.slug , response.title , response.image , response.categories , response.date,response.article , response.subtitle ,response.read_calculation,response.is_like , response.is_wish , response.total_views , response.total_likes , response.total_comment , response.author))
            })
            return list
        })
    },
    getDetails({commit , params} , slug){
        if(!slug){
          return false;
        }
        return this.$axios.$post(`/api/article/detail`, { slug: slug}).then((response) => {
            commit('DETAILS' , new Articles(response.id , response.slug , response.title , response.image , response.categories , response.date,response.article , response.subtitle ,response.read_calculation,response.is_like , response.is_wish , response.total_views , response.total_likes , response.total_comment , response.author));
            return new Articles(response.id , response.slug , response.title , response.image , response.categories , response.date,response.article , response.subtitle ,response.read_calculation,response.is_like , response.is_wish , response.total_views , response.total_likes , response.total_comment , response.author)
        })
    }
}