<template>
    <span>
        <a class="like">
            <img v-if="details.is_like == true" src="~/assets/images/like.svg" alt=""  @click="action" />
            <img v-else src="~/assets/images/heart-off.svg" alt="" @click="action"/>
        </a>
    </span>
</template>

<script lang="ts">
export default {
    name : "NuxActionLike",
    props : ['details'],
    methods: {
        action() {
            this.$store.dispatch('article/likeArticle' , this.details)
        },
    },
}
</script>

<style>

</style>