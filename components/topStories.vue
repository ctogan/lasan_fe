<template>
<div class="top-stories">
    <h2>Top Stories</h2>
    <div class="stories">
        <a class="previous" href=""><span></span></a>
        <ul class="list-stories">
            <li>
                <a href="javascript:void(0)" class="view-story">
                    <div class="story">
                        <img src="~/assets/images/img-story.png" alt="" width="100%" height="100%">
                        <div class="profile">
                            <div class="avatar-sm has-story">
                                <img src="~/assets/images/avatar.png" alt="">
                            </div>
                            <div class="user">
                                <p class="name">John Doe. M</p>
                                <p class="info">SEO Specialist</p>
                            </div>
                        </div>
                        <div class="story-overlay"></div>
                    </div>
                </a>
            </li>
            <li>
                <div class="story">
                    <div class="profile">
                        <div class="avatar-sm"></div>
                        <div class="user">
                            <p class="name">John Doe. M</p>
                            <p class="info">SEO Specialist</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="story">
                    <div class="profile">
                        <div class="avatar-sm"></div>
                        <div class="user">
                            <p class="name">John Doe. M</p>
                            <p class="info">SEO Specialist</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="story">
                    <div class="profile">
                        <div class="avatar-sm"></div>
                        <div class="user">
                            <p class="name">John Doe. M</p>
                            <p class="info">SEO Specialist</p>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div class="story">
                    <div class="profile">
                        <div class="avatar-sm"></div>
                        <div class="user">
                            <p class="name">John Doe. M</p>
                            <p class="info">SEO Specialist</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <a class="next" href="">
            <span></span>
        </a>
    </div>
</div>
</template>

<script>
    export default {
        name : 'NuxtTopStories'
    }
</script>