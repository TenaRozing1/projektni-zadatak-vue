<template>
    <div class="relative-class h-screen xxxl:h-full">
        <div
            class="relative mb-262p ml-41.65p sm:ml-5 md:ml-20 xxl:ml-110p padding-smaller pt-158p sm:pt-14 lg:pt-158p xxxl:pt-210p container:pt-137p z-30">
            <div class="xxxl:max-w-903p lg:w-546p xxxl:w-full mr-10 xxl:mr-0">
                <h1
                    class="text-projectColors-dark-gray text-left text-small-hero sm:text-5xl md:text-6xl lg:text-8xl xxxl:text-hero-big font-black pb-42p">
                    Let’s change
                    the future
                    together</h1>
            </div>
            <button
                class="bg-projectColors-light-blue w-115p h-35p md:h-12 md:w-48 lg:w-209p lg:h-63p text-white font-bold text-button-small md:text-blue-button-text border-radius-class-2">Schedule
                call</button>
        </div>
        <div class="absolute small-screen-1 lg:bottom-5.23% lg:right-20.19% xxxl:top-15.3% xxxl:right-20.19% z-10">
            <img src="../images/coverElementHero.png"
                class="resize-blue resize-blue-2 responsive-image container:w-650p xxxxl:w-full">
        </div>
        <div class="absolute small-screen-2 lg:bottom-8% lg:right-0 xl:right-5.23% xxxl:top-13.3% xxxl:right-5.23% z-20">
            <img src="../images/coverImageHero.png"
                class="resize-colorful resize-colorful-2 responsive-image container:w-650p xxxxl:w-full">
        </div>
        <VueSlickCarousel :arrows="false" :dots="false" v-bind="settings" class="w-screen z-30 relative hide-slider">
            <div>
                <img src="../images/graph2.png" width="473" height="209">
            </div>
            <div>
                <img src="../images/graph2.png" width="473" height="209">
            </div>
            <div>
                <img src="../images/graph3.png" width="473" height="209">
            </div>
            <div>
                <img src="../images/graph2.png" width="473" height="209">
            </div>
            <div>
                <img src="../images/graph2.png" width="473" height="209">
            </div>
        </VueSlickCarousel>
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
                "speed": 500,
                "slidesToShow": 3.33,
                "slidesToScroll": 1,
                "initialSlide": 0,
            }
        }
    }
}
</script>

<style>
@media (max-width: 1727px) {
    .hide-slider {
        display: none !important;
    }
}

@media(max-width:1727px) {
    .relative-class {
        position: relative;
    }
}

@media(min-width: 900px) and (max-width: 1727px) {
    .resize-blue {
        width: 650px;
    }
}

@media(max-width: 395px) {
    .resize-blue {
        width: 339.56px;
    }
}

@media(max-width: 395px) {
    .resize-colorful {
        width: 313px;
    }
}

@media(min-width: 900px) and (max-width: 1727px) {
    .resize-colorful {
        width: 600px;
    }
}

@media(min-width:538px) and (max-width: 899px) {
    .resize-colorful-2 {
        width: 450px;
    }
}

@media(min-width:538px) and (max-width: 899px) {
    .resize-blue-2 {
        width: 550px;
    }
}

@media(min-width: 1299px) and (max-width: 1727px) {
    .resize-colorful {
        width: 500px;
    }
}

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


.look-slider .slick-slide {
    width: 472.65px !important;
    height: 209px !important;
    margin-left: 16px;
    margin-right: 16px;
}


.look-slider .slick-slide>div {
    width: 472.65px !important;
    height: 209px !important;
}



.look-slider .slick-list {
    margin: 0 -100px !important;
}

.look-slider .slick-slide {
    padding: 0 5px !important;
}



.look-slider .slick-slide {
    padding: 0 20px !important;
}
</style>