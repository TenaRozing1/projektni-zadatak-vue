<template>
    <div class="relative h-screen">
        <!-- <img src="../images/heroBg.png" class="h-screen"> -->
        <div class="absolute top-0 left-0 ml-110p pt-324p z-20">
            <div class="max-w-903p">
                <h1 class="text-projectColors-dark-gray text-left text-hero-big font-black pb-42p">Let’s change
                    the future
                    together</h1>
            </div>
            <button
                class="bg-projectColors-light-blue w-209p h-63p text-white font-bold text-blue-button-text border-radius-class-2">Schedule
                call</button>
            <!-- <div class="flex">
                <div class="bg-white max-w-472.65p max-h-209.27p h-full w-full white-box-radius shadow-lg">
                    <img src="../images/mask1.png">
                </div>
            </div> -->
        </div>
        <div class="absolute top-15.3% right-20.19% z-10">
            <img src="../images/coverElementHero.png">
        </div>
        <div class="absolute top-13.3% right-5.23% z-20">
            <img src="../images/coverImageHero.png">
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'MyComponents',
    components: {
        VueSlickCarousel
    },
    data() {
        return {
            settings: {
                "infinite": true,
                "draggable": true,
                "arrows": true,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "initialSlide": 0,
            }
        }
    }
}
</script>

<style>
.border-radius-class-2 {
    border-radius: 20px;
}

.white-box-radius {
    border-radius: 22.18px;
}

.image-size {
    height: 816px;
    object-fit: cover;
}

body {
    background: linear-gradient(152.84deg, #A4C1E2 -1.11%, rgba(255, 255, 255, 0) 39.85%);
}
</style>