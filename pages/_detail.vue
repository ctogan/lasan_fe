<template>
    <div class="flex-1 mr-6">
        <div class="detail-article mb-6" v-if="article">
            <div class="d-flex mb-8 align-center">
                <div class="profile">
                    <div class="avatar-md">
                        <img :src="article.author.avatar" :alt="article.author.name" />
                    </div>
                    <div class="user">
                        <div class="name">{{article.author.name}}</div>
                        <div class="info">
                          <span class="topic-name capitalize">{{article.categories.topic_name}}</span>
                          <span class="date">{{$moment(article.created_at).format('D MMMM YYYY')}}</span>
                          <span class="read-time">{{article.read_calculation}} minute read</span>
                        </div>
                    </div>
                </div>
                <div class="action">
                  <ActionShare :details="article"></ActionShare>
                  <ActionLike :details="article"/>
                  <ActionMore :details="article"></ActionMore>
                </div>
            </div>
            <article>
                <h1 class="title">{{article.title}}</h1>
                <img class="mb-8" :src="article.image" :alt="article.title" width="100%">
                <div class="content" v-html="article.article"></div>
                <p></p>
            </article>
            <div class="action-detail" v-if="article">
                <div>
                    <ul>
                        <li><a href=""><img src="~/assets/images/eye-open.svg" alt="" class="mr-1">{{article.total_views}}</a></li>
                        <li>
                          <a href="javascript:void(0)" class="total-likes">
                            <span class="icon"></span>
                            {{article.total_likes}}
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" class="comment">
                            <span class="icon"></span>
                            {{article.total_comment}}
                          </a>
                        </li>
                    </ul>
                </div>
                <div class="action">
                  <ActionShare :details="article"></ActionShare>
                  <ActionLike :details="article"/>
                  <ActionMore :details="article"></ActionMore>
                </div>
            </div>
        </div>
        <div class="recommendation mb-10">
            <div class="list-article" v-if="relateds">
                <h3 class="title mb-6">Lebih banyak tentang <span class="capitalize">{{article.categories.topic_name}}</span></h3>
                <ul>
                    <li v-for="(related , index) in relateds" :key="index">
                        <MediumArticle :article="related"/>
                    </li>
                </ul>
            </div>
        </div>
        <CommentList :article="article"/>
        <ActionDetail :details="article"/>
    </div>
</template>

  <script lang="ts">
    import { mapMutations , mapGetters , mapState } from 'vuex';
    import Like from '../components/action/Like.vue';
    import MediumArticle from '../components/article/MediumArticle.vue';
    import CommentList from '../components/CommentList.vue';
    export default {
    layout: "w-component/Main",
    data() {
        return {
            paramss: this.$route.params.detail,
            relateds : []
        };
    },
    computed : {
        //  relateds(){
        //     this.$store.state.article.relateds
        // }

    },
    async asyncData({ store, params }) {
        const article = await store.dispatch("article/getDetails", params.detail).then((response) => {
            return response;
        });
        return { article };
    },
      mounted() {
        this.observe_floating_action();
      },
      created() {
        this.getRelatedArticle()
    },
    components: { Like, MediumArticle, CommentList },

    methods: {
        getRelatedArticle(){
            this.$store.dispatch('article/getRelatedArticle' , 'slug').then((response) => {
                this.relateds = response
            })
        },
        observe_floating_action(){
          let observer_first = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
              if(entry.isIntersecting){
                $('.fixed-action-detail').addClass('hide');
              }else{
                $('.fixed-action-detail').removeClass('hide');
              }
            });
          }, {threshold: 1});

          document.querySelectorAll('article > p:last-child').forEach(p => { observer_first.observe(p) });
        }
    },
}
  </script>

