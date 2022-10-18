export default {
    RECOMENDED_CONTRIBUTORS({state} , payload){
        state.contributors = payload
    },
    FOLLOW_CONTRIBUTOR(state , contributor){
        contributor.followed = !contributor.followed 
    },
}