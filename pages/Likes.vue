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
        <div class="body-content">
            <div class="recommendation">
                <div class="list-article" v-if="Object.keys(saved_articles).lenght > 0">
                    <ul>
                        <li v-for="(article , index) in saved_articles" :key="index">
                            <ArticleMediumArticle :article="article"/>
                        </li>
                    </ul>
                </div>
                <div class="content-justify-center" v-else>
                    <div class="p-5">
                        <span class="secondary-">Oopss</span>
                        <br/>
                        <br/>
                        <p class="font-secondary">Kamu belum memiliki aktifitas, ayo santai dulu sambil baca dan buat tulisan di Lagi Santai</p>
                    </div>
                    <div class="p-5">
                        <img src="~/assets/images/saved_empty.png" alt="" class="w-30"/>
                    </div>
                </div>
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