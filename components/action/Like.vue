<template>
    <span>
        <a :class="details.is_like ? 'like active' : 'like'" href="javascript:void(0)" @click="action">
          <div class="icon"></div>
        </a>
    </span>
</template>

<script lang="ts">
export default {
    name : "NuxActionLike",
    props : ['details'],
    methods: {
        action() {
            this.details.is_like = true;
            this.$toast.show('Great! You\'ve saved the article.',
              {
                theme: "toasted-primary",
                iconPack : "material",
                position: "bottom-right",
                icon : "bookmark",
                duration : 5000
              }
            )
            this.$store.dispatch('article/likeArticle' , this.details)
        },
    },
}
</script>

<style>

</style>
