export default {
    COMMENT_LIST({state} , payload){
        state.comments = payload
    },
    STORE_COMMENT_LIST({state} , payload){
        state.comments.unshift(payload)
        console.log(state.comments)
    }
}