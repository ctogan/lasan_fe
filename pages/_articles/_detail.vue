<template>
    <div class="flex-1 mr-6">
        <div class="detail-article mb-6" v-if="details">
            <div class="d-flex mb-8 align-center">
                <div class="profile">
                    <div class="avatar-md">
                        <Avatar :link="details.author.avatar" :alt="details.author.name" />
                    </div>
                    <div class="user">
                        <div class="name">{{details.author.name}}</div>
                        <div class="info">{{details.categories.name}}</div>
                    </div>
                </div>
                <div class="action">
                    <a class="like" href="javascript::void(0)">
                        <ActionLike :details="details"/>
                    </a>
                    <a class="more" href="more">
                        <div class="dot"></div>
                    </a>
                </div>
            </div>
            <article>
                <h1 class="title">{{details.title}}</h1>
                <img class="mb-8" src="~/assets/images/detail-img.jpg" alt="" width="100%">
                <div class="content">
                    {{details.article}}
                </div>
            </article>
            <div class="action-detail">
                <div>
                    <ul>
                        <li><a href=""><img src="~/assets/images/eye-open.svg" alt="" class="mr-1">{{details.total_views}}</a></li>
                        <li><a href=""><img src="~/assets/images/thumb.svg" alt="" class="mr-1">{{details.total_likes}}</a></li>
                        <li><a href=""><img src="~/assets/images/message.svg" alt="" class="mr-1">{{details.total_comment}}</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li><a href=""><img src="~/assets/images/share-2.svg" alt=""></a></li>
                        <li><a href=""><img src="~/assets/images/heart-off.svg" alt=""></a></li>
                        <li><a href=""><img src="~/assets/images/more.svg" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="recommendation">
            <div class="list-article">
                <h3 class="title mb-6">Lebih banyak tentang Interior</h3>
                <ul>
                    <li>
                        <div class="item-article">
                            <div class="snippet">
                                <div class="profile">
                                    <div class="avatar-sm has-story">
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
                </ul>
            </div>
        </div>
        <Comment/>
        <ActionDetail/>
    </div>  
</template>
  
  <script lang="ts">
    import { mapMutations , mapGetters , mapState } from 'vuex';
    export default {
        computed: {
            // details () {
            //    // return this.$store.state.articles.getDetails
            // },
            // // ...mapGetters(['article/getDetails']),
            // // ...mapState({
            // //     details: state => state
            // // })
            // todos () {
            //     return this.$store.state.todos.list
            // }
            
        },
        layout: 'w-component/Main',
        data() {
            return {
                paramss : this.$route.params.detail
            }
        },
        async asyncData({store , params}) {
            const details = await store.dispatch('article/getDetails' , params.detail)
            .then((response) => {
                console.log(response)
                return  response
            })
            return { details }
        },
        created() {
           //console.log(this.details)
        },
    }
  </script>
   
