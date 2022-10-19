export default {
    COMMENT_LIST({state} , payload){
        state.comments = payload
    },
    STORE_COMMENT_LIST({state} , payload){
        state.comments.unshift(payload)
    },
    STORE_SUB_COMMENT({state} , payload){
        
        state.comments[payload.index].comment_replies.unshift(payload.subcomment)
        console.log(state.comments[payload.index])
    }
}