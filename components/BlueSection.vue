<template>
    <div class="relative">
        <img src="../images/quoteImage.png" class="w-screen object-class relative" />
        <h2
            class="absolute bottom-0 mb-160p sm:mb-0 mr-30p sm:bottom-38% max-w-240p sm:max-w-550p h-84p sm:h-188p right-0 sm:mr-14 xl:mr-119p text-white font-semibold text-our-goal sm:text-blue-section z-20">
            Our goal is help you create your own digital world. From idea to
            integration. With you every step of the way.
        </h2>
        <img src="../images/smallerStroke.png" class="absolute sm:hidden small-stroke" />
        <img src="../images/smallOne.png" class="absolute sm:hidden" style="top: 10%; left: 0" />
        <img src="../images/smallTwo.png" class="absolute sm:hidden" style="top: 8%; right: 1%" />
        <img src="../images/smallThree.png" class="absolute sm:hidden" style="bottom: -7%; left: 0;" />
        <img src="../images/stroke.png" class="absolute move-stroke hidden sm:block" />
        <img src="../images/widget.png" class="absolute hidden sm:block" style="bottom: 16%; right: 7.2%" />
        <img src="../images/smallWidget.png" class="absolute sm:hidden" style="bottom: 8%; right: 7.2%" />
        <img src="../images/littleLeftUp.png" class="absolute hidden sm:block" style="top: 0; left: 0" />
        <img src="../images/twoParts.png" class="absolute hidden sm:block move-two-parts" />
        <img src="../images/biggest.png" class="absolute move-biggest hidden sm:block" />
        <img src="../images/threeParts.png" class="absolute remove-three-parts hidden sm:block"
            style="bottom: 0; left: 32.3%" />
        <img src="../images/starShape.png" class="absolute hide-star hidden sm:block" style="bottom: -31%; left: 4%" />
    </div>
</template>

<style>
@media (max-width: 1540px) {
    .hide-star {
        display: none;
    }
}

@media (max-width: 1315px) {
    .move-stroke {
        bottom: 33%;
        right: 22%;
    }
}

@media (min-width: 1316px) {
    .move-stroke {
        bottom: 33%;
        right: 15%;
    }
}

@media (min-width: 967px) and (max-width: 1540px) {
    .move-biggest {
        left: -10%;
        top: 30%;
    }
}

@media (max-width: 876px) {
    .move-biggest {
        display: none;
    }
}

@media (max-width: 965px) {
    .move-biggest {
        left: -26%;
        top: 30%;
    }
}

@media (min-width: 1541px) {
    .move-biggest {
        left: 6%;
        top: 11%;
    }
}

@media (max-width: 1376px) {
    .remove-three-parts {
        display: none;
    }
}

@media(min-width: 401px) {
    .object-class {
        height: 695.74px;
        object-fit: cover;
    }
}


@media(max-width: 400px) {
    .object-class {
        height: 490px;
        object-fit: cover;
    }
}



.responsive {
    width: 100%;
    height: auto;
}

@media (min-width: 726px) {
    .move-two-parts {
        top: 0;
        left: 36%;
    }
}

@media (max-width: 725px) {
    .move-two-parts {
        top: 0;
        right: 0;
    }
}

@media (min-width: 400px) and (max-width: 579px) {
    .small-stroke {
        bottom: 21%;
        right: 15%;
    }
}

@media (max-width: 399px) {
    .small-stroke {
        bottom: 29%;
        right: 21%;
    }
}
</style>
