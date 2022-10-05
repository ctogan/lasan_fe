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
                <li v-for="(item ,index) in list" :key="index">
                    <div class="item-article">
                        <div class="snippet">
                            <div class="profile">
                                <div class="avatar-sm has-story">
                                    <img :src="item.author.avatar" alt="">
                                </div>
                                <div class="name">
                                    <a href="/@agust.tampubolon">
                                        {{item.author.name}}
                                    </a>
                                </div>
                                <a class="more" href="more">
                                    <div class="dot"></div>
                                </a>
                            </div>
                            <NuxtLink :to="'/artcile/'+item.slug">
                                <div class="title">
                                    <h3>
                                        {{item.title}}
                                    </h3>
                                    <p>
                                        {{item.short_description}}
                                    </p>
                                </div>
                            </NuxtLink>
                            <div class="bottom">
                                <div class="info">
                                    <span class="topic-name">{{item.categories.topic_name}}</span>
                                    <span class="date">{{$moment(item.date).format('D MMMM YYYY')}}</span>
                                    <span class="read-time">{{item.read_calculation}} minute</span>
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
                            <img :src="item.image" alt="">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name : "NuxtListArticles",
    data(){
        return {
            list : {},
            page : 1
        }
    },
    created() {
        this.listOfData()
    },
    methods: {
        listOfData (){
            this.$store.dispatch('article/getList' , this.page).then((response) => {
                this.list = response
                console.log(this.response)
            })
        }
    },
}
</script>
