export default {
    GET_TRENDINGS({state} , payload){
        state.trendings = payload
    },
    DETAILS({state} , payload){
        state.article = payload
    },
    LIKE_ARTICLE(state , article){
        article.is_like = !article.is_like
    },
    LIST_ARTICLE({state} , payload) {
        state.articles =  payload
    },
    RELATED_ARTICLE({state} , payload){
        state.relateds = payload
    },
    LIST_SAVE_ARTICLE({state} , payload){
        state.saved_articles = payload
    }
}