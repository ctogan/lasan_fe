export default {
    GET_TRENDINGS({state} , payload){
        //console.log(state.trendings)
        state.trendings = payload
        //state.article = payload
        //console.log(state.article)
    },
    DETAILS({state} , payload){
        state.article = payload
    },
    LIKE_ARTICLE(state , article){
        article.is_like = !article.is_like
        //  console.log(article)
        //  console.log(article.is_like)
        // console.log('a')
    },
    LIST_ARTICLE({state} , payload) {
        state.articles =  payload
    },
    RELATED_ARTICLE({state} , payload){
        state.relateds = payload
    }
}