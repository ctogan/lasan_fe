<template>
    <div class="side-menu-item list-categories">
      <div v-if="list.length > 0">
        <h3 class="title">Topik Pilihan Kamu</h3>
        <ul>
          <li v-for="(item , index) in list" :key="index">
            <nuxt-link v-if="item.slug != ''" :to="item.slug" class="btn category">{{item.topic}}</nuxt-link>
            <a href="#" v-else class="btn category">{{item.topic}}</a>
          </li>
        </ul>
      </div>
      <div v-if="list.length === 0">
        <h3 class="title">Rekomendasi Topik</h3>
        <ul class="side-list-topic">
          <li>
            <div class="item" style="--color:#9561FF;">
              <div class="name">Games</div>
              <div class="followers-count">10K</div>
              <div class="overlay"></div>
              <div class="icon"></div>
            </div>
          </li>
          <li>
            <div class="item" style="--color:#7985EF;">
              <div class="name">Community</div>
              <div class="followers-count">10K</div>
              <div class="overlay"></div>
              <div class="icon"></div>
            </div>
          </li>
          <li>
            <div class="item" style="--color:#57D0D8;">
              <div class="name">Automotive</div>
              <div class="followers-count">10K</div>
              <div class="overlay"></div>
              <div class="icon"></div>
            </div>
          </li>
          <li>
            <div class="item" style="--color:#58C8EB;">
              <div class="name">Technologies</div>
              <div class="followers-count">10K</div>
              <div class="overlay"></div>
              <div class="icon"></div>
            </div>
          </li>
          <li>
            <div class="item" style="--color:#6499FF;">
              <div class="name">Food</div>
              <div class="followers-count">10K</div>
              <div class="overlay"></div>
              <div class="icon"></div>
            </div>
          </li>
          <li>
            <div class="item" style="--color:#FF85DD;">
              <div class="name">Blockchain</div>
              <div class="followers-count">10K</div>
              <div class="overlay"></div>
              <div class="icon"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name : "NuxtSideComponentCategories",
        data(){
            return{
                list : []
            }

        },
        // created() {
        //     this.$store.dispatch('topic/getList')
        //     .then((response) => {
        //         this.list = response
        //         console.log(this.list)
        //     })
        // }
    }

</script>
