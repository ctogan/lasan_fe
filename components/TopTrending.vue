<template>
<div class="top-trending">
    <h2>Yang lagi Trending</h2>
    <div class="trending">
        <ul class="list-trending">
            <li v-for="(article , index) in articles" :key="index">
                <div class="item">
                    <div class="row">
                        <div class="description">
                            <a href="/@agust.tampubolon">
                                <div class="profile">
                                    <div class="avatar-xs">
                                        <img :src="article.author.avatar" :alt="article.author.name">
                                    </div>
                                    <div class="name">
                                      {{article.author.name}}
                                    </div>
                                </div>
                            </a>
                            <NuxtLink :to="'detail/'+article.slug">
                                <div class="title">
                                    <h3>
                                       {{article.title}}
                                    </h3>
                                    <div class="info">
                                        {{article.categories.topic_name}} | {{$moment(article?.date).format('D MMMM YYYY')}}
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                        <div class="image">
                            <img :src="article.image" :alt="article.title">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        name : 'NuxtTopTrending',
        data() {
            return {
                articles :[]
            }
        },
        mounted() {
            this.getRelatedArticle()
        },
        methods: {
            getRelatedArticle(){
                this.$store.dispatch('article/getTrendings').then((response) => {
                    console.log(response)
                    this.articles = response
                })
                
            }
        },
    }
</script>