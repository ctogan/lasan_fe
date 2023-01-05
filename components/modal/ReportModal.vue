<template>
  <div>
    <div class="modal" v-if="show">
      <div class="modal-content">
        <a href="javascript:void(0)"><span class="close"></span></a>
        test
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NuxtReportModal",
  props: {
    show: Boolean,
    title:String
  },
  data (){
    return{
      // show : false
    }
  }
}
</script>

<style scoped>

</style>
