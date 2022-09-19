<template>
     <header>
        <div class="menu">
            <div class="menu-item h-100">
                <nav>
                    <div class="d-flex align-center">
                        <NuxtLink to="/" class="mr-10">
                            <img src="~/assets/images/logo.svg" alt="" width="60">
                        </NuxtLink>
                        <div class="search-box">
                            <div class="input">Cari topik dan artikel disini</div>
                            <div class="search-box-modal">
                                <div class="search-input">
                                    <img class="mr-2" src="~/assets/images/search-black.svg" alt="" width="34">
                                    <input id="txt_search" type="text" class="text" placeholder="Type here">
                                    <a href="javascript:void(0)" class="clear-search hide"><img class="mr-1"
                                                                                                src="~/assets/images/close.svg" alt=""></a>
                                </div>
                                <div class="search-result">
                                    <ul>
                                        <li><a href="">Lorem ipsum dolor sit amet.</a></li>
                                        <li><a href="">Lorem ipsum dolor sit amet consectetur.</a></li>
                                        <li><a href="">Eligendi voluptates excepturi ducimus voluptatibus sequi.</a>
                                        </li>
                                        <li><a href="">Placeat odit voluptate accusamus iure ipsa?</a></li>
                                        <li><a href="">Praesentium eligendi eos fugiat laborum obcaecati!</a></li>
                                        <li><a href="">Eaque ducimus dolorem reiciendis ipsam magni?</a></li>
                                        <li><a href="">Consectetur voluptatibus itaque praesentium facere
                                                tempora?</a>
                                        </li>
                                        <li><a href="">Sint pariatur suscipit molestias facere maxime.</a></li>
                                        <li><a href="">Doloremque reprehenderit soluta harum molestiae
                                                consectetur.</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="nav-item">
                        <li>
                            <a id="nav_item_profile" href="javascript:void(0)" class="more">
                                <div class="profile">
                                    <div class="avatar-md">
                                        <img src="~/assets/images/avatar.png" alt="">
                                    </div>
                                    <div class="user">
                                        <p class="name">John Doe. M</p>
                                        <p class="info">john@gmail.com</p>
                                    </div>
                                </div>
                                <span></span>
                            </a>
                        </li>
                    </ul>
                    <div class="side-profile-menu">
                        <a id="close_side_profile_menu" href="javascript:void(0)"
                        class="d-flex align-center justify-end mb-3"><span class="close"></span></a>
                        <div class="profile">
                            <div class="avatar-md">
                                <img src="~/assets//images/avatar.png" alt="">
                            </div>
                            <div class="user">
                                <p class="name">John Doe. M</p>
                                <p class="info">john@gmail.com</p>
                            </div>
                        </div>
                        <ul>
                            <li><a href="">
                                    <div class="img"><img class="edit-profile" src="~/assets/images/profile.svg" alt="">
                                    </div>
                                    Edit Profile
                                </a>
                            </li>
                            <li><a href="">
                                    <div class="img"><img class="my-artikel" src="~/assets/images/edit.svg" alt=""></div>
                                    Artikel
                                    Saya
                                </a></li>
                            <li><a href="">
                                    <div class="img"><img class="config" src="~/assets/images/config.svg" alt=""></div>
                                    Pengaturan
                                </a></li>
                            <li><a href="">
                                    <div class="img"><img class="security" src="~/assets/images/lock.svg" alt=""></div>
                                    Keamanan
                                </a></li>
                            <li><a href="" class="sign-out">Keluar</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name : 'WHeader'
    }
</script>