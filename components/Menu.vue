<template>
    <div class="icon-menu mr-6">
        <ul class="sticky">
            <li>
                <NuxtLink to="/"><div class="icon home"></div></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/notification"><div class="icon notification"></div></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/likes"><div class="icon mark"></div></NuxtLink>
            </li>
            <li>
                <NuxtLink to="/write"><div class="icon write"></div></NuxtLink>
            </li>
            <li>
              <NuxtLink to="/login"><div class="icon login"></div></NuxtLink>
<!--                <NuxtLink to="/logout"><img src="~/assets/images/logout.svg" alt=""></NuxtLink>-->
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

