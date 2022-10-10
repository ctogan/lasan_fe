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
     async loginWithGoogle() {
        try {
          await this.$auth.loginWith('google', { params: { /* additional authentication parameters */ } })
          .then((res) => {
            console.log(this.$auth.access_token)
            console.log('res')
              if(res.auth){
                //this.$auth.$storage.setLocalStorage('token_authorization', res.accessToken);
                //console.log(this.$auth.$storage.getLocalStorage('token_authorization'))
              }else{
                console.log('res')
                console.log(res)
              }
          })
        } catch (error) {
          console.log(error)
        }
      },
    },
    created() {
      console.log(this.$auth.loggedIn)
    },
  };
  </script>
  