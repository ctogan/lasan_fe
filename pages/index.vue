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
            
        },
        data() {
            return {
                datas : [],
                articles : []
            };
        },
    }
  </script>
   
