import Articles from "../../assets/data/Articles.class"

export default {
    getTrendings({commit}){
        return this.$axios.$get(`/api/articles/trendings`).then((response) => {
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
            commit('LIST_ARTICLE' , list)
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
    },
    likeArticle({commit , state} , article){
        return this.$axios.$post(`/api/article/add/like`, { slug: article.slug , action : article.is_like ? 'true' : 'false'}).then((response) => {
            //console.log(article)
            commit('LIKE_ARTICLE' , article);
        })
    },
    getRelatedArticle({commit , params} , slug){
        if(!slug){
          return false;
        }
        return this.$axios.$post(`/api/article/get/related`, { slug: slug}).then((response) => {
            const list = []
            response.data.forEach((response) => {  
                list.push(new Articles(response.id , response.slug , response.title , response.image , response.categories , response.date,response.article , response.subtitle ,response.read_calculation,response.is_like , response.is_wish , response.total_views , response.total_likes , response.total_comment , response.author))
            })
            commit('RELATED_ARTICLE' , list);
            return list
        })
    },
    getArticleComment({commit , params} , slug){
        return this.$axios.$post(`/api/article/get/comment`, { slug: slug}).then((response) => {
            console.log(response)
            // const list = []
            // response.data.forEach((response) => {  
            //     list.push(new Articles(response.id , response.slug , response.title , response.image , response.categories , response.date,response.article , response.subtitle ,response.read_calculation,response.is_like , response.is_wish , response.total_views , response.total_likes , response.total_comment , response.author))
            // })
            // commit('RELATED_ARTICLE' , list);
            // return list
        })
    },
    getSaveArticles({commit , params}, p){
        if(!p){
            p= 1
        }
        return this.$axios.$get(`/api/articles/saved`,{ params: { page: p } }).then((response) => {
            //console.log(response)
            const list = []
            if(response.data){
                response.data.rows.forEach((response) => {  
                    list.push(new Articles(response.id , response.slug , response.title , response.image , response.categories , response.date,response.article , response.subtitle ,response.read_calculation,response.is_like , response.is_wish , response.total_views , response.total_likes , response.total_comment , response.author))
                })
            }
            
            commit('LIST_SAVE_ARTICLE' , list)
            return list
        })
    }
}