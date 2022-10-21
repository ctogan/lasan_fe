<template>
    <div class="side-menu-item list-contributor-to-follow" v-if="contributors">
        <h3 class="title">Saran Untuk Diikuti</h3>
        <ul>
            <li v-for="(contributor , index) in contributors" :key="index">
                <ContributorRecomendation :contributor="contributor"></ContributorRecomendation>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "NuxtSideComponentContributorsRecomend",
    data(){
        return {
            contributors : {},
        }
    },
    created() {
        this.recomendedContributors()
    },
    methods: {
        recomendedContributors (){
            this.$store.dispatch('contributor/recomendedContributors').then((response) => {
                this.contributors = response
            })
        },
    },
}

</script>