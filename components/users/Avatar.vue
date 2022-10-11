<template>
    <div>
       <img :src="link" v-if="link" :alt="alt" />    
       <img src="/assets/images/avatar.png" v-else />    
    </div>
</template>

<script>
export default {
    name : 'NuxtUsersAvatar',
    props : ['link' , 'alt']
}
</script>