<template>
    <div class="side-menu-item list-categories">
        <h3 class="title">Topik Pilihan Kamu</h3>
        <ul v-if="list">
            <li v-for="(item , index) in list" :key="index">
                <nuxt-link v-if="item.slug != ''" :to="item.slug" class="btn category">{{item.topic}}</nuxt-link>
                <a href="#" v-else class="btn category">{{item.topic}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name : "NuxtSideComponentCatefories",
        data(){
            return{
                list : []
            }
            
        },
        // created() {
        //     this.$store.dispatch('topic/getList')
        //     .then((response) => {
        //         this.list = response
        //         console.log(this.list)
        //     })
        // }
    }

</script>
