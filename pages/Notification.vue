<template>
    <div class="flex-1 mr-6">
        <div class="sub-menu mb-4">
            <ul>
                <li class="custom-sub-menu-list">
                    <div class="item-sub-menu-list">
                        <a class="sub-menu-item active" href="javascript:void(0)">Semua</a>
                        <a class="sub-menu-item" href="javascript:void(0)">Aktivitas Kamu</a>
                        <a class="sub-menu-item" href="javascript:void(0)">Akun Kamu</a>
                    </div>
                    <div class="item-sub-menu-action">
                        <a class="sub-menu-item" href="javascript:void(0)"><img src="~/assets/images/filter.svg" alt=""></a>
                        <div class="action-sub-menu">
                            <ul class="action-sub-menu-list">
                                <li> Terbaru</li>
                                <li>Belum dibaca</li>
                                <li>Sudah dibaca</li>
                                <li>Hapus</li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="body-content">
            <div class="content-justify-center">
                <div class="p-5">
                    <span class="secondary-">Oopss</span>
                    <br/>
                    <br/>
                    <p class="font-secondary">Saat ini belum ada notifikasi yang masuk.</p>
                </div>
                <div class="p-5">
                    <img src="~/assets/images/notif.png" alt="" class="w-30"/>
                </div>
            </div>
            
            <div class="side-menu-item list-contributor-to-follow">
                
                <ul>
                    <li>
                        <a href="/@agust.tampubolon"></a>
                        <div class="row p-1">
                            <a href="/@agust.tampubolon">
                                <div class="profile">
                                    <div class="rounded-avatar">
                                        <img src="/images/avatar.png" alt="" class="mr-1">
                                    </div>
                                </div>
                            </a>
                            <div class="action">
                                <span class="name title-list mr-3">Adam </span> <span class="font-secondary">20 June 2022</span>
                                <p class="info text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidi...</p>
                            </div>
                        </div>
                     </li>
                     <li>
                        <a href="/@agust.tampubolon"></a>
                        <div class="row p-1">
                            <a href="/@agust.tampubolon">
                                <div class="profile">
                                    <div class="rounded-avatar">
                                        <img src="/images/avatar.png" alt="" class="mr-1">
                                    </div>
                                </div>
                            </a>
                            <div class="action">
                                <span class="name title-list mr-3">Adam </span> <span class="font-secondary">20 June 2022</span>
                                <p class="info text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidi...</p>
                            </div>
                        </div>
                     </li>
                     <li>
                        <a href="/@agust.tampubolon"></a>
                        <div class="row p-1">
                            <a href="/@agust.tampubolon">
                                <div class="profile">
                                    <div class="rounded-avatar">
                                        <img src="/images/avatar.png" alt="" class="mr-1">
                                    </div>
                                </div>
                            </a>
                            <div class="action">
                                <span class="name title-list mr-3">Adam </span> <span class="font-secondary">20 June 2022</span>
                                <p class="info text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incidi...</p>
                            </div>
                        </div>
                     </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout : 'w-component/Main',
        name : 'NuxtNotification',
    }
</script> 