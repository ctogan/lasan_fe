<template>
    <div class="modal search-modal hide">
        <div class="search-input">
            <img class="mr-2" src="/images/search-black.svg" alt="" width="34">
            <input id="txt_search" type="text" class="text" placeholder="Type here">
            <a href="javascript:void(0)" class="clear-search hide"><img class="mr-1" src="/images/close.svg" alt=""></a>
        </div>
        <div class="search-result">
            <ul>
                <li><a href="">Lorem ipsum dolor sit amet.</a></li>
                <li><a href="">Lorem ipsum dolor sit amet consectetur.</a></li>
                <li><a href="">Eligendi voluptates excepturi ducimus voluptatibus sequi.</a></li>
                <li><a href="">Placeat odit voluptate accusamus iure ipsa?</a></li>
                <li><a href="">Praesentium eligendi eos fugiat laborum obcaecati!</a></li>
                <li><a href="">Eaque ducimus dolorem reiciendis ipsam magni?</a></li>
                <li><a href="">Consectetur voluptatibus itaque praesentium facere tempora?</a></li>
                <li><a href="">Sint pariatur suscipit molestias facere maxime.</a></li>
                <li><a href="">Doloremque reprehenderit soluta harum molestiae consectetur.</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name : "NuxtSearchModal"
    }
</script>
