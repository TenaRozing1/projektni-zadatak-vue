<template>
    <div class="relative">
        <div class="bg-projectColors-lighter-blue hide-section">
            <img src="../images/phase.png" class="relative w-full" style="top:0">
            <img src="../images/line.png" class="absolute line-position-2 remove-left">
            <h2
                class="font-semibold text-projectColors-dark-gray vertical-text absolute text-vertical z-20 letter-class remove-left uppercase estimation-position">
                Estimation
            </h2>
            <div class="absolute flex justify-between margin-left-2 ml-24 xxl:ml-130p xxxl:ml-0 mr-20 xxl:mr-130p mt-24 xxxl:mt-136p"
                style="top:0; right: 0;">
                <div class="mr-10 xxxl:mr-0">
                    <h2 class="font-black text-gray-section-1 text-white pb-90p">Estimation summary</h2>
                    <p class="text-white text-gray-section-2 h-152p max-w-450p w-full">Lorem ipsum dolor sit amet. Sit
                        quaerat
                        cupiditate et libero repudiandae ut
                        modi repellat et
                        autem fuga. Id ipsam soluta ad minus temporibus qui doloribus amet.
                        <br><br>
                        In obcaecati eaque et commodi quod et error commodi. Sed voluptatem reprehenderit quia alias sed
                        beatae
                        saepe. Eos fugiat libero ut molestiae quisquam a sint nihil est molestiae cupiditate!
                    </p>
                </div>
                <img src="../images/watch.png" class="xxx:ml-51p watch-image-resize">
            </div>
            <div class="absolute resize-bottom">
                <div class="flex margin-left-1 ml-24
             xxl:ml-130p xxxl:ml-213p mr-20 xxl:mr-113p pb-201p">
                    <img src="../images/laptop.png" class="mr-20 xxxl:mr-133p watch-image-resize">
                    <div>
                        <h2 class="font-black text-gray-section-1 text-white pb-90p max-w-609p">Cost optimisation</h2>
                        <p class="text-white text-gray-section-2 h-152p max-w-450p w-full">Lorem ipsum dolor sit amet. Sit
                            quaerat
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
            </div>
        </div>
        <div class="relative show-section">
            <div class="sm:hidden absolute right-0 bg-projectColors-dark-gray w-12" style="height: 2px; top:5.3%"></div>
            <div class="flex justify-center sm:mx-5">
                <div
                    class="pt-30p sm:pt-24 flex flex-col sm:items-center w-265p sm:max-w-640p sm:w-full sm:mx-10 pb-100p sm:pb-10">
                    <div class="flex justify-center">
                        <h2 class="text-projectColors-dark-gray uppercase font-semibold letter-class text-specification sm:text-4xl">
                            Estimation</h2>
                    </div>
                    <h2
                        class="text-projectColors-dark-gray font-black pt-85p text-discovery sm:text-7xl pb-9 sm:pb-14 sm:text-center w-282p sm:w-full">
                        Estimation summary</h2>
                    <p class="text-projectColors-dark-gray text-description-small sm:text-xl pb-54p">Lorem ipsum dolor sit amet. Sit
                        quaerat cupiditate et libero
                        repudiandae
                        ut modi repellat et autem
                        fuga. Id ipsam soluta ad minus temporibus qui doloribus amet.
                        <br><br>
                        In obcaecati eaque et commodi quod et error commodi. Sed voluptatem reprehenderit quia alias sed
                        beatae saepe. Eos fugiat libero ut molestiae quisquam a sint nihil est molestiae cupiditate!
                    </p>
                    <img src="../images/watchSmall.png" class="w-full">
                </div>
            </div>
        </div>
    </div>
</template>

<style>
@media(max-width: 1554px) {
    .watch-image-resize {
        width: 500px;
    }
}

@media(max-width: 1150px) {
    .hide-section {
        display: none;
    }
}

@media(min-width: 1151px) {
    .show-section {
        display: none;
    }
}

@media(max-width: 1200px) {
    .resize-bottom {
        bottom: -5.3%;
        left: 0;
    }
}

@media(min-width: 1201px) {
    .resize-bottom {
        bottom: 0;
        left: 0;
    }
}

@media (min-width: 1728px) {
    .line-position-2 {
        top: -9.5%;
        left: 4%;
        width: 4.8px;
        height: 899px;
    }
}

@media (max-width: 1727px) {
    .line-position-2 {
        top: -5%;
        left: 3%;
    }
}

@media (min-width: 1728px) {
    .estimation-position {
        top: 49%;
        left: 3.2%;
    }
}

@media (max-width: 1727px) {
    .estimation-position {
        top: 49%;
        left: 2%;
    }
}

@media(max-width: 1200px) {
    .margin-left-2 {
        margin-left: 64px;
    }
}

@media(max-width: 1200px) {
    .margin-left-1 {
        margin-left: 45px;
    }
}
</style>