<template>
<div class="top-trending">
    <h2>Yang lagi Trending</h2>
    <div class="trending">
        <ul class="list-trending">
            <li v-for="(article , index) in articles" :key="index">
              <NuxtLink :to="'/'+article.slug">
                <div class="item">
                  <div class="image">
                      <img :src="article.image" :alt="article.title">
                  </div>
                  <div class="description">
                    <h3>{{article.title}}</h3>
                    <NuxtLink to="/@agust.tampubolon">
                      <div class="profile">
                        <div class="avatar-sm">
                          <img :src="article.author.avatar" :alt="article.author.name">
                        </div>
                        <div class="info">
                          <span>{{article.author.name}}</span>
                          <small>{{$moment(article?.date).format('D MMMM YYYY')}}</small>
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </NuxtLink>
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
                    this.articles = response
                })

            }
        },
    }
</script>
