<template>
    <div>
      <b-alert show variant="info"> You have been signed out! </b-alert>
    </div>
  </template>
  
  <script lang="ts">

  export default{
    middleware: ['auth'],
    auth: false,
    created() {
      this.logout()
    },
    methods: {
     
    },
  }

  </script>