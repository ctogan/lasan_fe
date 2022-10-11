<template>
     <header>
        <div class="menu index">
            <div class="menu-item h-100">
                <nav>
                    <a href="/">
                        <img src="~/assets/images/logo-white.png" alt="" width="60"/>
                    </a>
                    <ul class="nav-item">
                        <li class="mr-3">
                            <a class="search" href="javascript:void(0)">
                                <img src="~/assets/images/search-black.svg" alt="">
                            </a>
                        </li>
                        <li class="mr-7"> 
                            <a href="javascript::void(0)" class="btn-logins" v-if="$auth.loggedIn" v-on:click="logout" >{{$auth.user.data.email}}</a>
                            <a href="javascript::void(0)" class="btn-login" v-else> Sign In</a>
                        </li>
                        <li><a href="javascript:void()" class="btn btn-primary btn-register">Get Started</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>
<script>
    export default {
        name : 'NuxtBHeader',
        methods: {
            async logout() {
                await this.$auth.logout().then(() => {
                    $router.push('/')
                });
            },
        },  
    }
</script>
