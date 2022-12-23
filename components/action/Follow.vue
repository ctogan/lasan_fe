<template>
    <span>
        <a href="javascript:void(0)" :disabled="is_submitting" :class="is_submitting ? 'btn_follow btn btn-sm btn-secondary loading' : 'btn_follow btn btn-sm btn-secondary'" v-if="!contributor.followed" @click="action(contributor)">
          <span class="text">Follow</span>
          <span class="loading"></span>
        </a>
        <a href="javascript:void(0)" class="btn btn-sm btn-dark" v-else  @click="action(contributor)">Following</a>
    </span>
</template>

<script lang="ts">
export default {
    name : "NuxActionFollow",
    data(){
      return{
        is_submitting : false
      }
    },
    props : ['contributor'],
    methods: {
        action() {
            this.is_submitting = true;
            this.$store.dispatch('contributor/followContributor' , this.contributor)
        },
    },
}
</script>

<style>

</style>
