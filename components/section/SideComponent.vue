<template>
    <div class="side-menu bg-white default" v-if="showSideComponent == true">
            <a class="btn btn-primary w-100 small-rounded" href="/write">Nulis Sambil Ngopi</a>
            <SectionSideComponentCategories/>
            <SectionSideComponentTrendings/>
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
                //alert('a')
                this.showSideComponent = false
            }
        },
    }
</script>
