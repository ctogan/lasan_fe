<template>
    <div class="container-fluid">
        <section class="home-content">
          <NuxtMenu></NuxtMenu>
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
    import NuxtMenu from "../components/Menu";
    export default {
      components: {NuxtMenu},
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

