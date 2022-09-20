<template>
    <div class="side-menu bg-white default" v-if="showSideComponent">
            <a class="btn btn-primary w-100 small-rounded" href="/write">Nulis Sambil Ngopi</a>
            <SectionSideComponentCategories/>
            <div class="sticky">
                <SectionSideComponentContributorsRecomend/>
                <SectionSideComponentFooter/>
            </div>
        </div>
</template>
<script>
    export default{
        name : 'NuxtSideComponent',
        data() {
            return {
                showSideComponent : true
            }
        },
        mounted() {
            if($nuxt.$route.name == 'Write'){
                this.showSideComponent = false
            }
        },
    }
</script>