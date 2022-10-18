export default {
    COMMENT_LIST({state} , payload){
        state.comments = payload
    },
    ADD_TO_COMMENT_LIST({state} , payload){
        state.comments.unshift(payload)
        console.log(state.comments)
    }
}