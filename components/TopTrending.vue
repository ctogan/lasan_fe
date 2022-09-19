<template>
<div class="top-trending">
    <h2>Yang lagi Trending</h2>
    <div class="trending">
        <ul class="list-trending">
            <li v-for="index in 4" :key="index">
                <div class="item">
                    <div class="row">
                        <div class="description">
                            <a href="/@agust.tampubolon">
                                <div class="profile">
                                    <div class="avatar-xs">
                                        <img src="/images/avatar.png" alt="">
                                    </div>
                                    <div class="name">
                                        Alice Kurt
                                    </div>
                                </div>
                            </a>
                            <NuxtLink to="detail">
                                <div class="title">
                                    <h3>
                                        Lorem ipsum dolor sit amet, consectetur sed do elit sed
                                    </h3>
                                    <div class="info">
                                        Music | 12 June 2022
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                        <div class="image">
                            <img src="/images/image1.jpg" alt="">
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        name : 'NuxtTopTrending'
    }
</script>