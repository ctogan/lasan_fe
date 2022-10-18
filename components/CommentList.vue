<template>
    <div class="comment-section">
        <a id="close_comment" href="javascript:void(0)" class="d-flex align-center justify-end mb-5">
            <span class="close"></span>
        </a>
        <div class="action-comment"  v-if="$auth.loggedIn">
            <div class="profile">
                <div class="avatar-md">
                    <img :src="$auth.user.data.avatar" alt="">
                </div>
                <div class="user">
                    <div class="name">
                        {{$auth.user.data.first_name }}
                    </div>
                </div>
            </div>
            <a class="btn btn-primary small-rounded comment-article">Tambah Komentar</a>
        </div>
        <ul class="comment-type">
            <li class="active"><a href="">Terbaru</a></li>
            <li><a href="">Paling Relevan</a></li>
            <li><a href="">Komentarmu</a></li>
        </ul>
        <ul class="list-comment">
            <li class="root">
                <div class="item">
                    <div class="profile">
                        <div class="avatar-sm">
                            <img src="~/assets/images/avatar.png" alt="">
                        </div>
                        <div class="user">
                            <div class="name">Surya</div>
                            <div class="info">2 jam lalu</div>
                        </div>
                    </div>
                    <a href="" class="more"><img src="~/assets/images/more.svg" alt=""></a>
                </div>
                <div class="comment">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, quisquam? Deserunt esse
                    sapiente
                    corrupti alias laborum, adipisci nisi quibusdam commodi?
                </div>
                <div class="action">
                    <div class="d-flex">
                        <a href="" class="mr-4"><img class="mr-1" src="~/assets/images/thumb.svg" alt=""> 50</a>
                        <a href=""><img class="mr-1" src="~/assets/images/message.svg" alt=""> 50 Balasan</a>
                    </div>
                    <a class="reply" href="">Balas</a>
                </div>
                <ul class="comment-reply">
                    <li>
                        <div class="item">
                            <div class="profile">
                                <div class="avatar-sm">
                                    <img src="~/assets/images/avatar.png" alt="">
                                </div>
                                <div class="user">
                                    <div class="name">Abdi</div>
                                    <div class="info">2 jam lalu</div>
                                </div>
                            </div>
                            <a href="" class="more"><img src="~/assets/images/more.svg" alt=""></a>
                        </div>
                        <div class="comment">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, quisquam? Deserunt esse
                            sapiente
                            corrupti alias laborum, adipisci nisi quibusdam commodi?
                        </div>
                        <div class="action">
                            <div class="d-flex">
                                <a href="" class="mr-4"><img class="mr-1" src="~/assets/images/thumb.svg" alt=""> 50</a>
                            </div>
                            <a class="reply" href="">Balas</a>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="root">
                <div class="item">
                    <div class="profile">
                        <div class="avatar-sm">
                            <img src="~/assets/images/avatar.png" alt="">
                        </div>
                        <div class="user">
                            <div class="name">Surya</div>
                            <div class="info">2 jam lalu</div>
                        </div>
                    </div>
                    <a href="" class="more"><img src="~/assets/images/more.svg" alt=""></a>
                </div>
                <div class="comment">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, quisquam? Deserunt esse
                    sapiente
                    corrupti alias laborum, adipisci nisi quibusdam commodi?
                </div>
                <div class="action">
                    <div class="d-flex">
                        <a href="" class="mr-4"><img class="mr-1" src="~/assets/images/thumb.svg" alt=""> 50</a>
                        <a href=""><img class="mr-1" src="~/assets/images/message.svg" alt=""> 50 Balasan</a>
                    </div>
                    <a class="reply" href="">Balas</a>
                </div>
            </li>
        </ul>
        <ActionComment :comments="comments" :subcomment="subcomment" :article="article" />
    </div>

</template>
<script>
    export default {
        name: 'NuxtCommentList',
        props : ['article'],
        data () {
            return {
                comments : [],
                subcomment : 0
            }
        },
        created() {
            this.getArticleComment()
        },
        methods: {
            getArticleComment(){
                this.$store.dispatch('comment/getArticleComment' , this.article.slug ).then((response) => {
                    this.comments = response
                })
            }
        },
        
    }
</script>