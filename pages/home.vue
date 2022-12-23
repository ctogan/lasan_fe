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
            console.log(this.$moment); // undefined $moment
        },
        data() {
            return {
                articles: [],
            };
        },
        created() {
            console.log($auth.user)
        },
    }
  </script>

