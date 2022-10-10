<template>
    <section class="section">
        adas
        {{ $auth.user }}
        {{ user }}
    </section>
  </template>
  
  <script>
 export default {
    //middleware: 'auth',
    async fetch() {
        this.user = await this.$axios.get("http://127.0.0.1:3001/api/user/profile")
    },
  data() {
    return {
      user: null
    }
  },
  created() {
    console.log(this.$auth.loggedIn)
  },
}
  </script>