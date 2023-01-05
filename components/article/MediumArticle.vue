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
              <ActionMore :details="article"></ActionMore>
            </div>
            <NuxtLink :to="'/'+article.slug">
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
                    <span class="read-time">{{article?.read_calculation}} minute read</span>
                </div>
                <div class="action">
                  <NuxActionShare :details="article"></NuxActionShare>
                  <Like :details="article"></Like>
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
import NuxActionShare from "../action/Share.vue";
export default {
    name: "NuxtMediumArticle",
    props: ["article"],
    methods: {
        action() {
            this.$store.dispatch("article/likeArticle", this.article);
        },
    },
    components: {NuxActionShare, Like }
}
</script>

<style>

</style>
