<template>
    <section class="section">
      <b-button @click="loginWithGoogle()" icon-left="google">
        Sign in with Google
      </b-button>
    </section>
  </template>
  
  <script>
  export default {
    methods: {
      loginWithGoogle() {
       // alert('a')
         //console.log(this.$auth)
         this.$auth.loginWith('google', { params: { /* additional authentication parameters */ } })
        .then((res) => console.log(res))
      },
    },
  };
  </script>