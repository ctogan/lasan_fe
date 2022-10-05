<template>
    <section class="section">
        adas
        {{ $auth.user }}
        {{ user }}
    </section>
  </template>
  
  <script>
 export default {
    middleware: 'auth',
    async fetch() {
       // this.user = await this.$axios.get("http://localhost:8000/auth/user/")
    },
  data() {
    return {
      user: null
    }
  },
}
  </script>