<template>
    <!-- Instagram Section Begin -->
    <div class="instagram-photo">
        <div class="insta-item set-bg" :style="image('insta-1.jpg')">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="image('insta-2.jpg')">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="image('insta-3.jpg')">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="image('insta-4.jpg')">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="image('insta-5.jpg')">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">shayna_gallery</a></h5>
            </div>
        </div>
        <div class="insta-item set-bg" :style="image('insta-6.jpg')">
            <div class="inside-text">
                <i class="ti-instagram"></i>
                <h5><a href="#">shayna_gallery</a></h5>
            </div>
        </div>
    </div>
    <!-- Instagram Section End -->
</template>

<script>
export default {
    name: 'Instagram',
    methods: {
        image: function(url){
            return 'background-image: url(' + require('../assets/img/' + url) + ');'
        }
    }
}
</script>