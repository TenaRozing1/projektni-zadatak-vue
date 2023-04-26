<template>
    <div class="relative flex items-center justify-center overflow-x-hidden">
        <img src="../images/masterGraph.png"
            class="mx-2 xxl:mx-0 mt-10 mb-10 xxl:mt-116.6p xxl:mb-152.13p visible-big-image">
        <img src="../images/zigZag.png" class="absolute hidden lg:block move-zig-zag">
        <img src="../images/graphSM.png" class="visible-small-image pt-70p w-full">
    </div>
</template>

<style>
@media(min-width: 1495px) {
    .move-zig-zag {
        top: 25%;
        left: 0;
    }
}

@media(max-width: 1494px) {
    .move-zig-zag {
        top: 10%;
        left: 0;
    }
}

@media(max-width: 520px) {
    .visible-big-image {
        display: none;
    }
}

@media(min-width: 521px) {
    .visible-small-image {
        display: none;
    }
}
</style>