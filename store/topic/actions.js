import Articles from "../../assets/data/Articles.class"
import Topic from "../../assets/data/Topic.class"

export default {
    getList({commit}, p){
        if(!p){
            p= 1
        }
        return this.$axios.$get(`/api/topic`).then((response) => {
            const list = []
            console.log(response)
            response.forEach((response) => {  
                list.push(new Topic(response.slug , response.topic))
            })
            return list
        })
    },
}