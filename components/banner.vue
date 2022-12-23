<template>

    <section class="top-banner">
        <div class="container">
          <div class="intro">
            <h1>Jadilah yang pertama tahu segalanya</h1>
            <p>Ayo baca dari berbagai informasi dari sudut pandang kamu lewat berbagai topik menarik.
              #LagiSantai</p>
            <a href="#" class="btn btn-primary">Mulai Baca</a>
          </div>
<!--            <div class="intro" v-if="banners" v-for="banner of banners">-->
<!--                <h1>{{banner.title}}</h1>-->
<!--                <p>{{banner.description}}</p>-->
<!--                <a href="#" class="btn btn-primary">Mulai Baca</a>-->
<!--            </div>-->
        </div>
    </section>


</template>
<script>
    export default {
      name : 'Banner',
      data() {
        return {
          banners: []
        }
      },
      mounted() {

      },
      methods: {

      },
    }
</script>
