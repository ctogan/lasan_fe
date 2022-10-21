<template>
    <div class="modal upload-images-modal hide">
        <div class="modal-header d-flex justify-between">
            <h3 class="title">Gallery</h3>
            <a href="javascript:void(0)"><span class="close"></span></a>
        </div>
        <div class="modal-content">
            <div class="sub-menu mb-4">
                <ul>
                    <li>
                        <a class="sub-menu-item active" href="javascript:void(0)">My Files</a>
                        <a class="sub-menu-item" href="javascript:void(0)">Upload</a>
                    </li>
                </ul>
            </div>
            <ul id="list_images_from_modal" class="list-images-modal">
                <li><a data-url="http://127.0.0.1:8000/images/gb1.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb1.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb2.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb2.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb3.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb3.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb4.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb4.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb4.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb4.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb3.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb3.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb2.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb2.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb1.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb1.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb1.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb1.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb2.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb2.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb3.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb3.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb4.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb4.jpg" alt=""></a></li>
                <li><a data-url="http://127.0.0.1:8000/images/gb4.jpg" class="pick-image" href="javascript:void(0)"><img src="/images/gb4.jpg" alt=""></a></li>
            </ul>
        </div>
        <div class="modal-footer d-flex justify-end">
            <a id="btn_choose_image" href="javascript:void(0)" class="btn btn-primary">Choose (5) Images</a>
        </div>
    </div>

</template>

<script>
    export default {
        name : "NuxtModalGallery"
    }
</script>