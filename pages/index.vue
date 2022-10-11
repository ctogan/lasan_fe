<template>
    <div class="container">
        <section class="home-content">
            <div class="main">
                <TopStories/>
                <TopTrending/>
                <ListArticles/>
            </div>
            <SectionSideComponentHome/>
        </section>
    </div>    
  </template>
  
  <script>
    // import moment from 'moment'
    export default {
        layout: "b-component/Main",
        mounted() {
            console.log(this.$auth.loggedIn)
            //console.log(this.$store.dispatch('/article/getTrendings'))
            console.log(this.$moment); // undefined $moment
        },
        data() {
            return {
                datas : [],
                articles : []
            };
        },
        // async fetch (ctx) {
        //     this.datas =  await ctx.app.$services.articles.findAll()
        // },


    }
  </script>
   
