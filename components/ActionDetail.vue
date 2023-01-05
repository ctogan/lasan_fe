<template>
    <div class="fixed-action-detail">
      <ul>
        <li><a href="javascript:void(0)"><img src="~/assets/images/eye-open.svg" alt="" class="mr-1">{{details.total_views}}</a></li>
        <li>
          <a href="javascript:void(0)" class="total-likes">
            <span class="icon"></span>
            {{details.total_likes}}
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" class="comment">
            <span class="icon"></span>
            {{details.total_comment}}
          </a>
        </li>
      </ul>
    </div>

</template>

<script>
    export default {
        name : 'NuxtActionDetail',
        props : ['details']
    }
</script>
