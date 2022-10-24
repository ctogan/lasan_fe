<template>
    <div class="flex-1 mr-6">
        <div class="sub-menu mb-4">
            <ul>
                <li>
                    <a class="sub-menu-item active" href="javascript:void(0)">Semua</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Topik Pilihan Kamu</a>
                </li>
            </ul>
        </div>
        <div class="recommendation">
            <div class="list-article" v-if="saved_articles">
                <ul>
                    <li v-for="(article , index) in saved_articles" :key="index">
                        <ArticleMediumArticle :article="article"/>
                    </li>
                </ul>
            </div>
        </div>
    </div>  
</template>
  
<script>
    export default {
        layout : 'w-component/Main',
        name : 'NuxtLikes',
        data (){
            return {
                saved_articles : []
            }
        },
        // async asyncData({ store, params }) {
        //     const article = await store.dispatch("article/getDetails", params.detail).then((response) => {
        //         return response;
        //     });
        //     return { article };
        // },
        created() {
            this.getRelatedArticle()
        },
        methods: {
            getRelatedArticle(){
                this.$store.dispatch('article/getSaveArticles' , 1).then((response) => {
                    this.saved_articles = response
                    console.log(this.saved_articles)
                })
            }
        },
    }
</script>