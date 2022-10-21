<template>
    <div class="flex-1 mr-6">
        <div class="sub-menu mb-4">
            <ul>
                <li>
                    <a class="sub-menu-item active" href="javascript:void(0)">Semua</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Aktivitas Kamu</a>
                    <a class="sub-menu-item" href="javascript:void(0)">Akun Kamu</a>
                    <a class="sub-menu-item" href="javascript:void(0)"><img src="~/assets/images/filter.svg" alt=""></a>
                </li>
            </ul>
        </div>
        <div class="body-content">
            <img src="/images/notif.png" alt=""/>
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