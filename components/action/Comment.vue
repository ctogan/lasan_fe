<template>
    <div class="comment-section-article">
       
        <div class="action-comment" v-if="$auth.loggedIn">
            <div class="profile">
                <div class="avatar-md">
                    <img :src="$auth.user.data.avatar" alt="">
                </div>
                <div class="user">
                    <div class="name">
                        {{$auth.user.data.first_name +  ' ' + $auth.user.data.last_name}}
                    </div>
                </div>
            </div>
            <a id="close_comment-article" href="javascript:void(0)" class="d-flex align-center justify-end mb-5">
                <span class="close"></span>
            </a>
        </div>
       
        <div class="editor-section justify-center  align-center ">
            <div class="editor">
                <form action="">
                    <div id="content_editor" class="editable  align-center" ref="comment" contentEditable="true" data-placeholder="Tulis komentar kamu ..."></div>
                    <div class="controls  justify-center align-center">
                        <a href='#' data-role='bold'>
                            <img src="/images/bold.svg" alt="">
                        </a>
                        <a href='#' data-role='italic'>
                            <img src="/images/italic.svg" alt="">
                        </a>
                        <a href='#' data-role='underline'>
                            <img src="/images/underline.svg" alt="">
                        </a>
                        <a href='#' data-role='unordered'>
                            <img src="/images/unordered-list.svg" alt="">
                        </a>
                        <a href='#' data-role='ordered'>
                            <img src="/images/ordered-list.svg" alt="">
                        </a>
                        <div class="vertical-separate"></div>
                        <a href='#' data-role='createLink'>
                            <img src="/images/insert-link.svg" alt="">
                        </a>
                        <a href='#' data-role='blockquote'>
                            <img src="/images/blockquote.svg" alt="">
                        </a>
                    </div>
                </form>
            </div>
        </div>
        <div class="d-flex justify-end button-action-comment">
            <a class="btn btn-plain color-grey close_comment-article" @click="close">Cancel</a>
            <a class="btn btn-secondary" v-if="comment.comment_id != undefined"  @click="actionSubComment">Reply</a>
            <a class="btn btn-secondary" v-else @click="action">Post</a>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name : "NuxActionComment",
    props : ['comments' , 'article' , 'comment' , 'index'],
    data(){
        return {
        }
    },
    methods: {
        action() {
            let text = document.getElementById("content_editor").innerHTML
            this.$store.dispatch('comment/storeComment' , { article : this.article , text : text , comments : this.comments , comment : this.comment }).then((response) => {
                document.getElementById("content_editor").innerHTML = ''
                $('.comment-section-article').removeClass('show');
            })
        },
        actionSubComment() {
            let text = document.getElementById("content_editor").innerHTML
            this.$store.dispatch('comment/storeSubComment' , { article : this.article , text : text , comments : this.comments , comment : this.comment , index : this.index}).then((response) => {
                document.getElementById("content_editor").innerHTML = ''
                $('.comment-section-article').removeClass('show');
            })
        },
        close(){
            $('.comment-section-article').removeClass('show');
        }
    },
}
</script>

<style>

</style>