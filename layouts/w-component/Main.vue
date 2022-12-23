<template>
    <body class="antialiased">
        <div>
            <Header></Header>
            <div class="container-fluid d-flex justify-between mt-6 mb-8">
            <Menu/>
            <nuxt/>
            <SideComponent></SideComponent>
            </div>
            <div class="overlay hide"></div>
        </div>
    </body>
  </template>
<script>
    import WhiteMenu from "./WhiteMenu.vue";
    import Header from "./Header.vue";
    import SideComponent from "../../components/section/SideComponent.vue";
    export default {
        components: {
            WhiteMenu,
            Header,
            SideComponent
        },
    }
</script>
