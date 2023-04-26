<template>
    <div class="relative bg-projectColors-lighter-blue">
        <img src="../images/phase.png" class="relative w-full" style="top:0">
        <img src="../images/line.png" class="absolute" style="top:-7%; left: 4.5%; height: 899px; width: 4.8px;">
        <h2 class="font-semibold text-projectColors-dark-gray vertical-text absolute text-vertical z-20 letter-class uppercase"
            style="top:50%; left: 3.5%;">Estimation
        </h2>
        <div class="absolute flex justify-between ml-12 xxl:ml-130p xxxl:ml-0 mr-20 xxl:mr-130p mt-20 xxl:mt-136p" style="top:0; right: 0;">
            <div class="mr-10 xxxl:mr-0">
                <h2 class="font-black text-gray-section-1 text-white pb-90p">Estimation summary</h2>
                <p class="text-white text-gray-section-2 h-152p max-w-450p w-full">Lorem ipsum dolor sit amet. Sit quaerat
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
            <div class="flex ml-12 xxl:ml-130p xxxl:ml-213p mr-20 xxl:mr-113p pb-201p">
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
</template>

<style>
@media(max-width: 1430px) {
    .watch-image-resize {
        width: 500px;
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

</style>