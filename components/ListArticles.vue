<template>
    <div>
        <div class="sub-menu mb-4">
            <ul>
                <li>
                    <a class="sub-menu-item active" href="javascript:void(0)">Semua</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Rekomendasi</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Terpilih</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Terbaru</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Terpopuler</a>
                </li>
            </ul>
        </div>
        <div class="list-article">
            <ul>
                <li v-for="index in 6" :key="index">
                    <div class="item-article">
                        <div class="snippet">
                            <div class="profile">
                                <div class="avatar-sm has-story">
                                    <img src="/images/avatar.png" alt="">
                                </div>
                                <div class="name">
                                    <a href="/@agust.tampubolon">
                                        Alice Kurt
                                    </a>
                                </div>
                                <a class="more" href="more">
                                    <div class="dot"></div>
                                </a>
                            </div>
                            <NuxtLink to="/detail">
                                <div class="title">
                                    <h3>
                                        Lorem ipsum dolor sit amet, consectetur sed do elit sed do eiusmod
                                        tempor incid.
                                    </h3>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum.
                                        aute irure dolor.
                                    </p>
                                </div>
                            </NuxtLink>
                            <div class="bottom">
                                <div class="info">
                                    <span class="topic-name">Music</span>
                                    <span class="date">12 June 2022</span>
                                    <span class="read-time">2 min read</span>
                                </div>
                                <div class="action">
                                    <a class="share" href="">
                                        <img src="/images/share.svg" alt="">
                                    </a>
                                    <a class="like" href="">
                                        <img src="/images/like.svg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="image">
                            <img src="/images/image1.jpg" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name : "NuxtListArticles"
}
</script>
