import Comment from "../../assets/data/Comment.class"
import SubComment from "../../assets/data/SubComment.class"
export default {
    storeComment({commit} , data){
        return this.$axios.$post(`/api/article/add/comment` , { slug : data.article.slug , comment : data.text}).then((response) => {
            commit('STORE_COMMENT_LIST' , new Comment(response.data.comment_id ,response.data.created_at , response.data.comment , response.data.is_like , response.data.total_comment_like , response.data.total_comment_reply , response.data.comment_replies , response.data.user));
        })
        
    },
    storeSubComment({commit , state} , data){
        return this.$axios.$post(`/api/article/reply/comment` , { slug : data.article.slug , comment : data.text , comment_id : data.comment.comment_id}).then((response) => {
            commit('STORE_SUB_COMMENT' , {subcomment : new SubComment(response.data.comment_replies.comment_reply_id ,response.data.comment_replies.created_at , response.data.comment_replies.comment , response.data.comment_replies.is_like , response.data.comment_replies.total_comment_like , response.data.comment_replies.user) , index : data.index});
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
    },
    likeComment({commit} , comment){
        return this.$axios.$post(`/api/article/add/like`, { slug: article.slug , action : article.is_like ? 'true' : 'false'}).then((response) => {
            commit('LIKE_COMMENT' , comment);
        })
    },
    likeSubComment({commit} , comment){
        return this.$axios.$post(`/api/article/add/like`, { slug: article.slug , action : article.is_like ? 'true' : 'false'}).then((response) => {
            commit('LIKE_SUB_COMMENT' , comment);
        })
    }
}