<template>
    <div>
        <div class="content flex-1 mr-6">
            <div class="editor-section">
                <div class="d-flex justify-between">
                    <h5>Tulis Artikel</h5>
                    <a href=""><img src="/images/more.svg" alt=""></a>
                </div>
                <div class="editor">
                    <form action="">
                        <input id="title" class="title" type="text" placeholder="Title" autocomplete="off">
                        <div class="controls">
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

                        <div id="content_editor" class="editable" contentEditable="true" data-placeholder="Tulis disini ..."></div>
                    </form>
                </div>
            </div>
        </div>
        <div class="side-menu">
            <div class="sticky">
                <div class="bg-white component">
                    <h3 class="title mb-3">Pengaturan</h3>
                    <div class="main-banner"></div>
                    <div class="controls mt-4">
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
                    <div class="separate"></div>
                    <ul class="side-controls mb-8">
                        <li><a class="show-upload-images" href="javascript:void(0)"><img src="/images/camera.svg" alt="">Add Image</a></li>
                        <li><a href="#"><img src="/images/topic.svg" alt="">Add Topic</a></li>
                        <li><a href="#"><img src="/images/embed.svg" alt="">Embed Link</a></li>
                    </ul>
                    <div class="d-flex justify-end">
                        <a href="" class="btn btn-plain color-grey">Cancel</a>
                        <a href="" class="btn btn-secondary">Post</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'w-component/Main',
        name : 'WriteComponent',
        data() {
            return {
                menu : 'asdasd'
            }
         },
    }

</script>