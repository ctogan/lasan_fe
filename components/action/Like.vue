<template>
    <div>
        <img v-if="details.is_like == true" src="~/assets/images/like.svg" alt=""/>
        <img v-else src="~/assets/images/heart-off.svg" alt="" @click="likeArticle(details)"/>
    </div>
</template>

<script lang="ts">
import {mapMutations} from 'vuex'
export default {
    name : "NuxActionLike",
    props : ['details'],
    methods: {
        likeArticle(e) {
            console.log(this.state.artcile)
            // console.log(e)
            // this.$store.dis('article/likeArticle')
            //e.target.value = ''
        },
    },
    
    // ...mapMutations({
    //     likeArticle : 'article/likeArticle'
    // })
}
</script>

<style>

</style>