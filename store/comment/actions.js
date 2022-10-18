import Comment from "../../assets/data/Comment.class"
import Contributors from "../../assets/data/Contributors.class"

export default {
    // recomendedContributors({commit}){
    //     return this.$axios.$get(`/api/author/recommedation`).then((response) => {
    //         const list = []
    //         response.data.forEach((response) => {  
    //             list.push(new Contributors(response.uuid , response.first_name , response.last_name , response.username , response.avatar , response.occupation , response.followed));
    //         })
    //         commit('RECOMENDED_CONTRIBUTORS' , list)
    //         return list
    //     })
    // },
    storeComment({commit} , data){
       
        //console.log(state.comments)
        return this.$axios.$post(`/api/article/comment/store` , { slug : data.article.slug , comment : data.comment}).then((response) => {
            commit('STORE_COMMENT_LIST' , new Comment(response.comment_id ,response.created_at , response.comment , response.is_like , response.total_comment_like , response.total_comment_reply , response.comment_replies , response.user));
        })
        
    },
    getArticleComment({commit , params} , slug){
       
        return this.$axios.$post(`/api/article/get/comment`, { slug: slug}).then((response) => {
            const list = []
            response.data.forEach((response) => {  
                list.push(new Comment(response.comment_id ,response.created_at , response.comment , response.is_like , response.total_comment_like , response.total_comment_reply , response.comment_replies , response.user))
            })
            commit('COMMENT_LIST' , list);
            return list
        })
    }
}