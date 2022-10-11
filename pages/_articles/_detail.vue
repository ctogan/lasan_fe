<template>
    <div class="flex-1 mr-6">
        <div class="detail-article mb-6" v-if="article">
            <div class="d-flex mb-8 align-center">
                <div class="profile">
                    <div class="avatar-md">
                        <UsersAvatar :link="article.author.avatar" :alt="article.author.name" />
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
                    <!-- <li>
                        <div class="item-article">
                            <div class="snippet">
                                <div class="profile">
                                    <div class="avatar-sm">
                                        <img src="~/assets/images/avatar.png" alt="">
                                    </div>
                                    <div class="name">
                                        <a href="profile">
                                            Alice Kurt
                                        </a>
                                    </div>
                                    <a class="more" href="more">
                                        <div class="dot"></div>
                                    </a>
                                </div>
                                <a href="detail">
                                    <div class="title">
                                        <h3>
                                            Lorem ipsum dolor sit amet, consectetur sed do elit sed do
                                            eiusmod
                                            tempor incid.
                                        </h3>
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum.
                                            aute irure dolor.
                                        </p>
                                    </div>
                                </a>
                                <div class="bottom">
                                    <div class="info">
                                        <span class="topic-name">Music</span>
                                        <span class="date">12 June 2022</span>
                                        <span class="read-time">2 min read</span>
                                    </div>
                                    <div class="action">
                                        <a class="share" href="">
                                            <img src="~/assets/images/share.svg" alt="">
                                        </a>
                                        <a class="like" href="">
                                            <img src="~/assets/images/like.svg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="image">
                                <img src="~/assets/images/image1.jpg" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-article">
                            <div class="snippet">
                                <div class="profile">
                                    <div class="avatar-sm">
                                        <img src="~/assets/images/avatar.png" alt="">
                                    </div>
                                    <div class="name">
                                        <a href="profile">
                                            Alice Kurt
                                        </a>
                                    </div>
                                    <a class="more" href="more">
                                        <div class="dot"></div>
                                    </a>
                                </div>
                                <a href="detail">
                                    <div class="title">
                                        <h3>
                                            Lorem ipsum dolor sit amet, consectetur sed do elit sed do
                                            eiusmod
                                            tempor incid.
                                        </h3>
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum.
                                            aute irure dolor.
                                        </p>
                                    </div>
                                </a>
                                <div class="bottom">
                                    <div class="info">
                                        <span class="topic-name">Music</span>
                                        <span class="date">12 June 2022</span>
                                        <span class="read-time">2 min read</span>
                                    </div>
                                    <div class="action">
                                        <a class="share" href="">
                                            <img src="~/assets/images/share.svg" alt="">
                                        </a>
                                        <a class="like" href="">
                                            <img src="~/assets/images/like.svg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="image">
                                <img src="~/assets/images/image1.jpg" alt="">
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item-article">
                            <div class="snippet">
                                <div class="profile">
                                    <div class="avatar-sm">
                                        <img src="~/assets/images/avatar.png" alt="">
                                    </div>
                                    <div class="name">
                                        <a href="profile">
                                            Alice Kurt
                                        </a>
                                    </div>
                                    <a class="more" href="more">
                                        <div class="dot"></div>
                                    </a>
                                </div>
                                <a href="detail">
                                    <div class="title">
                                        <h3>
                                            Lorem ipsum dolor sit amet, consectetur sed do elit sed do
                                            eiusmod
                                            tempor incid.
                                        </h3>
                                        <p>
                                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                                            cillum.
                                            aute irure dolor.
                                        </p>
                                    </div>
                                </a>
                                <div class="bottom">
                                    <div class="info">
                                        <span class="topic-name">Music</span>
                                        <span class="date">12 June 2022</span>
                                        <span class="read-time">2 min read</span>
                                    </div>
                                    <div class="action">
                                        <a class="share" href="">
                                            <img src="~/assets/images/share.svg" alt="">
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="image">
                                <img src="~/assets/images/image1.jpg" alt="">
                            </div>
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
        <Comment/>
        <ActionDetail/>
    </div>  
</template>
  
  <script lang="ts">
    import { mapMutations , mapGetters , mapState } from 'vuex';
    import Like from '../../components/action/Like.vue';
import MediumArticle from '../../components/article/MediumArticle.vue';
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
    created() {
        this.getRelatedArticle()
        //console.log(this.details)
    },
    components: { Like, MediumArticle },

    methods: {
        getRelatedArticle(){
            this.$store.dispatch('article/getRelatedArticle' , 'slug').then((response) => {
               console.log(response)
                this.relateds = response
            })
            
        }
    },
}
  </script>
   
