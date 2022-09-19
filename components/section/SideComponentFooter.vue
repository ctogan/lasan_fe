<template>
    <div class="side-menu-item footer">
        <ul class="link">
            <li><NuxtLink to="/help">Help</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/status">Status</NuxtLink></li>
            <li><NuxtLink to="/posting">Posting</NuxtLink></li>
            <li><NuxtLink to="/privacy">Privacy</NuxtLink></li>
            <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
        </ul>
        <ul class="socmed">
            <li>
                <a href="">
                    <img src="~/assets/images/facebook.png" alt="" width="24">
                </a>
            </li>
            <li><a href="">
                    <img src="~/assets/images/instagram.png" alt="" width="24">
                </a></li>
            <li><a href="">
                    <img src="~/assets/images/linkedIn.png" alt="" width="24">
                </a></li>
            <li><a href="">
                    <img src="~/assets/images/youtube.png" alt="" width="24">
                </a></li>
            <li><a href="">
                    <img src="~/assets/images/twitter.png" alt="" width="24">
                </a></li>
            <li><a href="">
                    <img src="~/assets/images/google.png" alt="" width="24">
                </a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name : "NuxtSideComponentFooter"
    }
</script>