<template>
    <div>
        <div class="sub-menu mb-4">
            <ul>
                <li>
                    <a class="sub-menu-item active" href="javascript:void(0)">Semua</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Rekomendasi</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Terpilih</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Terbaru</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Terpopuler</a>
                </li>
            </ul>
        </div>
        <div class="list-article">
            <ul>
                <li v-for="(article , index) in articles" :key="index">
                    <!-- <MediumArticle :article="article"></MediumArticle> -->
                    <div class="item-article">
                        <div class="snippet">
                            <div class="profile">
                                <div class="avatar-sm has-story">
                                    <img :src="article.author.avatar" alt="">
                                </div>
                                <div class="name">
                                    <a href="/@agust.tampubolon">
                                        {{article.author.name}}
                                    </a>
                                </div>
                                <a class="more" href="more">
                                    <div class="dot"></div>
                                </a>
                            </div>
                            <NuxtLink :to="'/artcile/'+article.slug">
                                <div class="title">
                                    <h3>
                                        {{article.title}}
                                    </h3>
                                    <p>
                                        {{article.short_description}}
                                    </p>
                                </div>
                            </NuxtLink>
                            <div class="bottom">
                                <div class="info">
                                    <span class="topic-name">{{article.categories.topic_name}}</span>
                                    <span class="date">{{$moment(article.date).format('D MMMM YYYY')}}</span>
                                    <span class="read-time">{{article.read_calculation}} minute</span>
                                </div>
                                <div class="action">
                                    
                                    <a class="share">
                                        <img src="/images/share.svg" alt="">
                                    </a>
                                    <Like :details="article" ></Like>
                                </div>
                            </div>
                        </div>
                        <div class="image">
                            <img :src="article.image" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
import Like from '../components/action/Like.vue'
export default {
    name : "NuxtListArticles",
    data(){
        return {
            articles : {},
            page : 1
        }
    },
    components : {
        Like
    },
    created() {
        this.listOfData()
    },
    methods: {
        listOfData (){
            this.$store.dispatch('article/getList' , this.page).then((response) => {
                this.articles = response
            })
        },
    },
}
</script>
