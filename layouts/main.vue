<template>
    <div>
        <Header />
        <Banner />
      <nuxt/>
    </div>
  </template>

<script>
    import Header from '~/components/header.vue'
    import Banner from '~/components/banner.vue'
    export default {
      components: {
        Header,
        Banner,
      }
    }
</script>