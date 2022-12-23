<template>
    <div class="modal story-modal hide">
        <div class="content">
            <ul class="list-story-progress">
                <li>
                    <div class="progress" style="width: 50%;"></div>
                </li>
                <li>
                    <div class="progress"></div>
                </li>
                <li>
                    <div class="progress"></div>
                </li>
                <li>
                    <div class="progress"></div>
                </li>
            </ul>
            <div class="bg"></div>
            <div class="top">
                <div class="profile">
                    <div class="avatar-sm">
                        <img src="/images/avatar.png" alt="">
                    </div>
                    <div class="info">
                        <div class="name">
                            John
                        </div>
                        <div class="info">
                            16 hour ago
                        </div>
                    </div>
                </div>
                <a href="javascript:void(0)" class="close-story"><span class=""></span></a>
            </div>
            <div class="description">
                <div class="topic">Finance</div>
                <div class="title">Lorem ipsum dolor, sit amet consectetur adipisicing.</div>
                <div class="short">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, provident!</div>
            </div>
            <img class="bg" src="/images/story-img.jpg" alt="">
            <a href="" class="btn btn-secondary read-story">Baca Selengkapnya</a>
        </div>
    </div>
</template>
<script>
    export default {
        name : "StoryComponent"
    }
</script>
