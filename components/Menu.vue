<template>
    <div class="icon-menu mr-6">
        <ul class="sticky">
            <li>
                <NuxtLink to="/"><img src="~/assets/images/home.svg" alt=""></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/notification"><img src="~/assets/images/bell.svg" alt=""></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/likes"><img src="~/assets/images/heart-off.svg" alt=""></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/write"><img src="~/assets/images/write.svg" alt=""></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/logout"><img src="~/assets/images/logout.svg" alt=""></NuxtLink>
            </li>
        </ul>
    </div>

</template>

<script>
export default {
    name : 'NuxtMenu',
    mounted(){
        console.log(this.linkExactActiveClass); 
    }
        
    
}
</script>

