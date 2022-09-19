<template>
    <body class="antialiased">
      <div>
        <Header></Header>
        <Banner/>
        <nuxt/>
        <SearchModal></SearchModal>
        <AuthModal></AuthModal>
        <div class="overlay hide"></div>
        <Story></Story>
      </div>
    </body>
  </template>

<script>
import Header from '../b-component/Header.vue';
import SearchModal from '../../components/modal/SearchModal.vue';
import AuthModal from '../../components/modal/AuthModal.vue';
import Story from '../../components/modal/Story.vue';
export default {
  name: 'BMain',
  components: {
    Header,
    SearchModal,
    AuthModal,
    Story
  }
}
</script>