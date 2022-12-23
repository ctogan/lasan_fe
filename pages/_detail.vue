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
                        <div class="info">{{article.categories.name}}</div>
                    </div>
                </div>
                <div class="action">
                    <a class="like" href="javascript:void(0)">
                        <ActionLike :details="article"/>
                    </a>
                    <a class="more" href="more">
                        <div class="dot"></div>
                    </a>
                </div>
            </div>
            <article>
                <h1 class="title">{{article.title}}</h1>
                <img class="mb-8" src="~/assets/images/detail-img.jpg" alt="" width="100%">
                <div class="content">
                    {{article.article}}
                </div>
                <p></p>
            </article>
            <div class="action-detail">
                <div>
                    <ul>
                        <li><a href=""><img src="~/assets/images/eye-open.svg" alt="" class="mr-1">{{article.total_views}}</a></li>
                        <li><a href=""><img src="~/assets/images/thumb.svg" alt="" class="mr-1">{{article.total_likes}}</a></li>
                        <li><a href=""><img src="~/assets/images/message.svg" alt="" class="mr-1">{{article.total_comment}}</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href=""><img src="~/assets/images/share-2.svg" alt=""></a></li>
                        <li><ActionLike :details="article"/></li>
                        <li><a href=""><img src="~/assets/images/more.svg" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="recommendation">
            <div class="list-article" v-if="relateds">
                <h3 class="title mb-6">Lebih banyak tentang Interior</h3>
                <ul>
                    <li v-for="(related , index) in relateds" :key="index">
                        <MediumArticle :article="related"/>
                    </li>
                </ul>
            </div>
        </div>
        <CommentList :article="article"/>
        <ActionDetail/>
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
        // console.log('a')
        // console.log(this.$auth)
        // console.log('c')
        //console.log(this.details)
    },
    components: { Like, MediumArticle, CommentList },

    methods: {
        getRelatedArticle(){
            this.$store.dispatch('article/getRelatedArticle' , 'slug').then((response) => {
               console.log(response)
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

