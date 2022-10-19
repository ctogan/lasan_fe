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
            <a class="btn btn-primary small-rounded" @click="action_comment()">Tambah Komentar</a>
        </div>
        <ul class="comment-type">
            <li class="active"><a href="">Terbaru</a></li>
            <li><a href="">Paling Relevan</a></li>
            <li><a href="">Komentarmu</a></li>
        </ul>
        <ul class="list-comment" v-if="comments">
            <li class="root" v-for="(comment , index) in comments" :key="index">
                <div class="item">
                    <div class="profile">
                        <div class="avatar-sm">
                            <img :src="comment.user.image" :alt="comment.user.name">
                        </div>
                        <div class="user">
                            <div class="name">{{comment.user.name}}</div>
                            <div class="info">{{comment.created_at | humanizetime}} </div>
                        </div>
                    </div>
                    <a href="" class="more"><img src="~/assets/images/more.svg" alt=""></a>
                </div>
                <div class="comment" v-html="comment.comment"></div>
                <div class="action">
                    <div class="d-flex">
                        <a href="" class="mr-4"><img class="mr-1" src="~/assets/images/thumb.svg" alt=""> {{comment.total_comment_like}}</a>
                        <a href=""><img class="mr-1" src="~/assets/images/message.svg" alt=""> {{comment.total_comment_like}} Balasan</a>
                    </div>
                    <a class="reply"  @click="action_comment(comment , index)">Balas</a>
                </div>
                <ul class="comment-reply" v-if="comment.comment_replies">
                    <li v-for="subcomment in comment.comment_replies" :key="subcomment.comment_reply_id">
                        <div class="item">
                            <div class="profile">
                                <div class="avatar-sm">
                                    <img :src="subcomment.user.image" :alt="subcomment.user.name">
                                </div>
                                <div class="user">
                                    <div class="name">{{subcomment.user.name}}</div>
                                    <div class="info">{{subcomment.created_at | humanizetime}}</div>
                                </div>
                            </div>
                            <a href="" class="more"><img src="~/assets/images/more.svg" alt=""></a>
                        </div>
                        <div class="comment" v-html="subcomment.comment">
                        </div>
                        <div class="action">
                            <div class="d-flex">
                                <a href="" class="mr-4"><img class="mr-1" src="~/assets/images/thumb.svg" alt=""> {{subcomment.total_comment_like}}</a>
                            </div>
                            <a class="reply" @click="action_comment(comment , index)" >Balas</a>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <ActionComment :comments="comments" :comment="comment" :article="article" :index="index"/>
    </div>

</template>
<script>
    export default {
        name: 'NuxtCommentList',
        props : ['article'],
        data () {
            return {
                comments : [],
                index : 0,
                comment : {},
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
            },
            action_comment(comment = {}){
                this.comment = comment
                $('.comment-section-article').addClass('show');
            }
        },
        
    }
</script>