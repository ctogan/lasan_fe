<template>
    <div class="item-article">
        <div class="snippet">
            <div class="profile">
                <div class="avatar-sm has-story">
                    <img :src="article?.image" alt="">
                </div>
                <div class="name">
                    <a href="profile">
                        {{article?.author?.name}}
                    </a>
                </div>
                <a class="more" href="more">
                    <div class="dot"></div>
                </a>
            </div>
            <NuxtLink :to="'/artcile/'+article.slug">
                <div class="title">
                    <h3>
                       {{article?.title}}
                    </h3>
                    <p>
                        {{article?.short_description}}
                    </p>
                </div>
            </NuxtLink>
            <div class="bottom">
                <div class="info">
                    <span class="topic-name">{{article?.categories.topic_name}}</span>
                    <span class="date">{{$moment(article?.date).format('D MMMM YYYY')}}</span>
                    <span class="read-time">{{article?.read_calculation}} minute</span>
                </div>
                <div class="action">
                    <a class="share" href="">
                        <img src="~/assets/images/share.svg" alt="">
                    </a>
                    <Like :details="article" ></Like>
                </div>
            </div>
        </div>
        <div class="image">
            <img :src="article?.image" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import Like from '../action/Like.vue';
export default {
    name: "NuxtMediumArticle",
    props: ["article"],
    methods: {
        action() {
            this.$store.dispatch("article/likeArticle", this.article);
        },
    },
    components: { Like }
}
</script>

<style>

</style>