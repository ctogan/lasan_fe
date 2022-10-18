<template>
    <span>
        <a href="javascript:void(0)" class="btn btn-sm btn-outline-dark" v-if="!contributor.followed" @click="action(contributor)" >Follow</a>
        <a href="javascript:void(0)" class="btn btn-sm btn-dark" v-else  @click="action(contributor)">Following</a>
    </span>
</template>

<script lang="ts">
export default {
    name : "NuxActionFollow",
    props : ['contributor'],
    methods: {
        action() {
            this.$store.dispatch('contributor/followContributor' , this.contributor)
        },
    },
}
</script>

<style>

</style>