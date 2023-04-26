<template>
    <div class="relative h-screen">
        <div class="absolute top-0 left-0 ml-41.65p md:ml-5 xl:ml-110p padding-smaller pt-158p sm:pt-14 xxl:pt-324p z-30">
            <div class="xxl:max-w-903p">
                <h1
                    class="text-projectColors-dark-gray text-left text-small-hero md:text-8xl xxl:text-hero-big font-black pb-42p">
                    Let’s change
                    the future
                    together</h1>
            </div>
            <button
                class="bg-projectColors-light-blue w-115p h-35p md:w-209p md:h-63p text-white font-bold text-button-small md:text-blue-button-text border-radius-class-2">Schedule
                call</button>
        </div>
        <div class="absolute small-screen-1 lg:bottom-5.23% lg:right-20.19% xxxl:top-15.3% xxxl:right-20.19% z-10">
            <img src="../images/coverElementHero.png" class="responsive-image-1">
        </div>
        <div class="absolute small-screen-2 lg:bottom-8% lg:right-0 xl:right-5.23% xxxl:top-13.3% xxxl:right-5.23% z-20">
            <img src="../images/coverImageHero.png" class="responsive-image-2">
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
@media (min-width: 635px) {
    .border-radius-class-2 {
        border-radius: 20px;
    }
}

@media (max-width: 634px) {
    .border-radius-class-2 {
        border-radius: 11px;
    }
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
    overflow-x: hidden;
}

@media(min-width: 500px) {
    .responsive-image-1 {
        width: 100%;
        height: auto;
    }
}

@media(max-width: 499px) {
    .responsive-image-1 {
        width: 340px;
        height: 353px;
    }
}

@media(min-width: 500px) {
    .responsive-image-2 {
        width: 100%;
        height: auto;
    }
}

@media(max-width: 499px) {
    .responsive-image-2 {
        width: 313px;
        height: 322px;
    }
}

@media (max-width: 899px) {
    .small-screen-1 {
        left: -20%;
        bottom: 5%;
    }
}

@media (max-width: 899px) {
    .small-screen-2 {
        left: 11.5%;
        bottom: 9%;
    }
}

@media (max-width: 899px) {
    .small-screen-3 {
        left: 11.5%;
        bottom: 9%;
    }
}

 @media (max-width: 389px) {
    .padding-smaller {
        padding-top: 50px;
    }
 }

 @media (min-width: 395px) and (max-width: 600px) {
    .padding-smaller {
        padding-top: 50px;
    }
 }
</style>