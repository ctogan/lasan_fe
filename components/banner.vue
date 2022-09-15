<template>

    <section class="top-banner">
        <div class="container">
            <div class="intro" v-for="banner of banners">
                <h1>{{banner.title}}</h1>
                <p>{{banner.description}}</p>
                <a href="#" class="btn btn-primary">Mulai Baca</a>
            </div>
        </div>
    </section>

  
</template>
<script>
    export default {
      data() {
        return {
          banners: []
        }
      },
      async fetch() {
        this.banners = await fetch(
          'http://127.0.0.1:3001/api/banner'
        ).then(res => res.json())
      }
    }
</script>