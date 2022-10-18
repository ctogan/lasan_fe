import Contributors from "../../assets/data/Contributors.class"

export default {
    recomendedContributors({commit}){
        return this.$axios.$get(`/api/author/recommedation`).then((response) => {
            const list = []
            response.data.forEach((response) => {  
                list.push(new Contributors(response.uuid , response.first_name , response.last_name , response.username , response.avatar , response.occupation , response.followed));
            })
            commit('RECOMENDED_CONTRIBUTORS' , list)
            return list
        })
    },
    followContributor({commit} , contributor){
        return this.$axios.$post(`/api/user/follow` , { author_id : contributor.uuid , action : contributor.followed}).then((response) => {
            commit('FOLLOW_CONTRIBUTOR' , contributor);
        })
        
    },
}