<template>
    <span>
        <a class="share" href="javascript:void(0)" @click="share">
          <div class="icon"></div>
        </a>
    </span>
</template>

<script>
export default {
  name: "NuxActionShare",
  props : ['details'],
  methods:{
    share(){
      this.$toast.show('Share button clicked',
        {
          theme: "toasted-primary",
          position: "bottom-right",
          duration : 5000
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
