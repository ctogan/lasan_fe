<template>
    <a href="">
        <div class="row">
            <div class="profile">
                <div class="avatar-md">
                    <img :src="contributor.avatar" alt="">
                </div>
                <div class="user">
                    <p class="name">{{contributor.name}}</p>
                    <p class="info">{{contributor.occupation}}</p>
                </div>
            </div>
            <div class="action">
                <ActionFollow :contributor="contributor"/>
            </div>
        </div>
    </a>
</template>

<script lang="ts">
export default {
    setup() {
    },
    props : ['contributor'],
    name : "NuxtContributorsContributorRecomedation",

}
</script>