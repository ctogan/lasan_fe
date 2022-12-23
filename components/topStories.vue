<template>
<div class="top-stories">
    <h2>Top Stories</h2>
    <div class="stories">
        <a class="previous hide" @click="previous"><span></span></a>
        <ul id="list_stories" class="list-stories">
            <li>
                <a href="javascript:void(0)" class="view-story">
                    <div class="story">
                        <img src="~/assets/images/avatar.png" alt="" width="100%" height="100%">
                    </div>
                  <span class="name">You</span>
                </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="view-story">
                <div class="story unread">
                  <img src="~/assets/images/avatar-2.png" alt="" width="100%" height="100%">
                </div>
                <span class="name">Reni</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="view-story">
                <div class="story unread">
                  <img src="~/assets/images/avatar-3.png" alt="" width="100%" height="100%">
                </div>
                <span class="name">Tiara</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="view-story">
                <div class="story unread">
                  <img src="~/assets/images/avatar-4.png" alt="" width="100%" height="100%">
                </div>
                <span class="name">Bob</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="view-story">
                <div class="story unread">
                  <img src="~/assets/images/avatar-5.png" alt="" width="100%" height="100%">
                </div>
                <span class="name">Mike</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="view-story">
                <div class="story unread">
                  <img src="~/assets/images/avatar-6.png" alt="" width="100%" height="100%">
                </div>
                <span class="name">Heni</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="view-story">
                <div class="story unread">
                  <img src="~/assets/images/avatar-7.png" alt="" width="100%" height="100%">
                </div>
                <span class="name">Nike</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="view-story">
                <div class="story unread">
                  <img src="~/assets/images/avatar-8.png" alt="" width="100%" height="100%">
                </div>
                <span class="name">Grao</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="view-story">
                <div class="story unread">
                  <img src="~/assets/images/avatar-5.png" alt="" width="100%" height="100%">
                </div>
                <span class="name">Boy</span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" class="view-story">
                <div class="story unread">
                  <img src="~/assets/images/avatar-2.png" alt="" width="100%" height="100%">
                </div>
                <span class="name">Hoe</span>
              </a>
            </li>
        </ul>
        <a class="next" @click="next">
            <span></span>
        </a>
    </div>
</div>
</template>

<script>
    export default {
        name : 'NuxtTopStories',
        mounted() {
          this.observe();
        },
        methods:{
          observe(){
            let observer_first = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if(entry.isIntersecting){
                  $('a.previous').addClass('hide');
                }else{
                  $('a.previous').removeClass('hide');
                }
              });
            }, {threshold: 1});

            document.querySelectorAll('.list-stories > li:first-child').forEach(li => { observer_first.observe(li) });

            let observer_last = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                if(entry.isIntersecting){
                  $('a.next').addClass('hide');
                }else{
                  $('a.next').removeClass('hide');
                }
              });
            }, {threshold: 1});

            document.querySelectorAll('.list-stories > li:last-child').forEach(li => { observer_last.observe(li) });
          },
          next(){
            document.getElementById('list_stories').scrollBy({top: 0, left:200, behavior: 'smooth'});
          },
          previous(){
            document.getElementById('list_stories').scrollBy({top: 0, left:-200, behavior: 'smooth'});
          }
        }
    }
</script>
