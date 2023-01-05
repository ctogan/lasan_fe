<template>
  <div>
    <a class="more"  v-click-outside="hide" href="javascript:void(0)" @click="show($event)">
      <div class="dot"></div>
      <div class="popover">
        <ul>
          <li><a class="popover-link" @click="follow_author(details.author.username)">Follow this author</a></li>
          <li><a class="popover-link" @click="open_report_modal">Report</a></li>
        </ul>
      </div>
    </a>
<!--    <NuxtReportModal :show="show_modal_report"></NuxtReportModal>-->
  </div>
</template>

<script>
import NuxtReportModal from "../modal/ReportModal";
export default {
  name: "ActionMore",
  components: {NuxtReportModal},
  props : ['details'],
  data(){
    return {
      show_modal_report : false
    }
  },
  methods:{
    show(event){
      var elems = document.querySelectorAll(".more.active");
      [].forEach.call(elems, function(el) {
        el.classList.remove("active");
      });
      event.target.closest('a').classList.add('active');
      let myTimeOut = setTimeout(function (){
        event.target.closest('a').classList.remove('active');
      },4000);

      $(".popover").mouseout( function () {
        myTimeOut = setTimeout(function (){
          event.target.closest('a').classList.remove('active');
        },4000);
      }).mouseover( function () {
        clearTimeout(myTimeOut);
      });
    },
    hide(event){
      if(event.target.closest('a') === null || !event.target.closest('a').classList.contains('more')){
        var elems = document.querySelectorAll(".more.active");
        [].forEach.call(elems, function(el) {
          el.classList.remove("active");
        });
      }
    },
    follow_author(username){
      console.log(username)
    },
    open_report_modal(){
      this.show_modal_report = true;
    }
  }
}
</script>

<style scoped>

</style>
