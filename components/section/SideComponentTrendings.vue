<template>
    <div class="side-menu-item list-trending">
        <h3 class="title">Lagi Trending</h3>
        <ul class="list-trending-item">
            <li v-for="(item , index) in list" :key="index">
                <nuxt-link :to="'detail/'+item.slug">
                    <span class="profile">
                        <span class="avatar-md">
                            <img :src="item.author.avatar" alt="">
                        </span>
                        <span class="user">
                            <p class="name">{{item.author.name}}</p>
                            <p class="info">{{item.author.occupation}}</p>
                        </span>
                    </span>
                    <h3>{{item.title}}</h3>
                    <span class="info">
                        <ul>
                            <li>{{item.categories.topic_name}}</li>
                            <li>{{$moment(item?.date).format('D MMMM YYYY')}}</li>
                        </ul>
                    </span>
                </nuxt-link>
            </li>
            <!-- <li>
                <a href="/detail">
                    <span class="profile">
                        <span class="avatar-md">
                            <img src="/images/avatar.png" alt="">
                        </span>
                        <span class="user">
                            <p class="name">Adam</p>
                            <p class="info">Content Creator</p>
                        </span>
                    </span>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, maiores!</h3>
                    <span class="info">
                        <ul>
                            <li>Music</li>
                            <li>12 June 2022</li>
                        </ul>
                    </span>
                </a>
            </li> -->
        </ul>
    </div>
</template>

<script>
    import { defineComponent, ref } from '@nuxtjs/composition-api'
    import { articleApi } from '../../api/Article'
    
    export default defineComponent({
        name :"NuxtSideComponentTrendings",
        data(){
            return {
                list : {}
            }
        },
        computed: {
            todos () {
                return this.$store.state.trendings
            }
        },
        created() {
            this.$store.dispatch('article/getTrendings')
            .then((response) => {
                this.list = response
            })
        },
        methods: {
            
        },
    })
    </script>