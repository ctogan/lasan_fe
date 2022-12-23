<template>
    <div class="side-menu bg-white default">
            <a class="btn btn-secondary w-100 small-rounded" href="/write">Nulis Sambil Ngopi</a>
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
        name : 'NuxtSideComponentHome'
    }
</script>
