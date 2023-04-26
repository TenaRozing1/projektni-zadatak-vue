<template>
    <div class="bg-projectColors-light-gray relative">
        <div class="xl:overflow-y-hidden">
            <div class="relative bg-custom-blue blue-pattern-bg xl:hidden">
                <!-- <img src="../images/blueSmallImage.png" class="relative w-full resize-blue" style="bottom:0"> -->
                <div class="flex justify-center sm:mx-5">
                    <div
                        class="pt-30p sm:pt-24 flex flex-col sm:items-center w-265p sm:max-w-640p sm:w-full mx-10 pb-52p sm:pb-10">
                        <div class="flex justify-center">
                            <h2 class="text-white uppercase font-semibold letter-class text-specification sm:text-4xl">
                                Specification</h2>
                        </div>
                        <h2
                            class="text-white font-black pt-85p text-discovery sm:text-7xl pb-9 sm:pb-14 sm:text-center w-64 sm:w-full">
                            Discovery process</h2>
                        <p class="text-white text-description-small sm:text-xl pb-54p">Lorem ipsum dolor sit amet. Sit
                            quaerat cupiditate et libero
                            repudiandae
                            ut modi repellat et autem
                            fuga. Id ipsam soluta ad minus temporibus qui doloribus amet.
                            <br><br>
                            In obcaecati eaque et commodi quod et error commodi. Sed voluptatem reprehenderit quia alias sed
                            beatae saepe. Eos fugiat libero ut molestiae quisquam a sint nihil est molestiae cupiditate!
                        </p>
                        <img src="../images/hands2.png" class="w-full">
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden xl:block">
            <div class="flex justify-end">
                <img src="../images/line.png" class="absolute line-position remove-left">
                <h2
                    class="font-semibold text-white vertical-text absolute text-vertical z-20 letter-class remove-left uppercase text-position">
                    Specification
                </h2>
                <img src="../images/hands.png" class="absolute z-20 move-left resize">
                <div class="mr-132p xxl:mr-68p pt-20 xxxl:pt-351p margin-smaller">
                    <h2
                        class="font-black text-gray-section-1 text-projectColors-dark-gray pb-10 xxl:pb-90p w-52 xxl:w-full">
                        Discovery
                        proccess</h2>
                    <p class="max-w-450p w-full text-projectColors-dark-gray text-gray-section-2">Lorem ipsum dolor sit
                        amet.
                        Sit quaerat
                        cupiditate et libero repudiandae ut
                        modi repellat et
                        autem fuga. Id ipsam soluta ad minus temporibus qui doloribus amet.
                        <br><br>
                        In obcaecati eaque et commodi quod et error commodi. Sed voluptatem reprehenderit quia alias sed
                        beatae
                        saepe. Eos fugiat libero ut molestiae quisquam a sint nihil est molestiae cupiditate!
                    </p>
                </div>
            </div>
            <div class="relative">
                <img src="../images/grayBg.png" class="relative w-full" style="bottom:0">
                <div class="ml-16 xxxl:ml-56 pb-20 xxxl:pb-335p absolute bottom-0 left-0">
                    <h2 class="font-black text-gray-section-1 text-white pb-10 xxl:pb-90p w-52 xxl:w-full">Feature breakdown
                    </h2>
                    <p class="max-w-482p w-full text-white text-gray-section-2">Lorem ipsum dolor sit amet. Sit quaerat
                        cupiditate et libero repudiandae ut
                        modi repellat et
                        autem fuga. Id ipsam soluta ad minus temporibus qui doloribus amet.
                        <br><br>
                        In obcaecati eaque et commodi quod et error commodi. Sed voluptatem reprehenderit quia alias sed
                        beatae
                        saepe. Eos fugiat libero ut molestiae quisquam a sint nihil est molestiae cupiditate!
                    </p>
                </div>
                <img src="../images/writing.png" class="absolute pb-153p mr-110p resize" style="bottom:0; right:0;">
            </div>
        </div>
    </div>
</template>

<style>
@media (min-width: 391px) and (max-width: 1099px) {
    .bg-custom-blue {
        background-color: #1e81b0;
    }
}

@media (max-width: 390px) {
    .blue-pattern-bg {
        background: url("../images/blueSmallImage.png");
        width: 100%;
        height: 100%;
    }
}


.vertical-text {
    text-orientation: mixed;
    writing-mode: vertical-rl;
    transform: rotate(-180deg);
}

.letter-class {
    letter-spacing: 0.33em;
}

@media(min-width: 1600px) {
    .move-left {
        top: 13%;
        left: 12%;
    }
}

@media(max-width: 1210px) {
    .margin-smaller {
        margin-right: 40px;
    }
}

@media(max-width: 1599px) {
    .move-left {
        top: 13%;
        left: 8%;
    }
}

@media(max-width: 1555px) {
    .resize {
        width: 500px;
    }
}

@media (min-width: 1728px) {
    .line-position {
        top: -9.5%;
        left: 4%;
    }
}

@media (max-width: 1727px) {
    .line-position {
        top: -5%;
        left: 3%;
    }
}

@media (min-width: 1728px) {
    .text-position {
        top: 40%;
        left: 3.5%;
    }
}

@media (max-width: 1727px) {
    .text-position {
        top: 50%;
        left: 2%;
    }
}

@media (max-width: 1550px) {
    .remove-left {
        display: none;
    }
}
</style>