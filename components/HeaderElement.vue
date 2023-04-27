<template>
    <div class="positioning hidden xxl:block">
        <div class="flex justify-end items-end h-104p">
            <div class="flex items-center mr-14 xxxl:mr-87.5p">
                <h2 class="text-projectColors-text-gray text-button-text mr-75.6p">Way we do it</h2>
                <h2 class="text-projectColors-text-gray text-button-text mr-59.12p">Partners</h2>
                <button
                    class="bg-projectColors-dark-gray w-132p h-46p text-white font-bold text-button-text border-radius-class">Let’s
                    chat</button>
            </div>
        </div>
    </div>
</template>

<style>
.border-radius-class {
    border-radius: 14px;
}

@media(max-width: 1727px) {
    .positioning {
        position: absolute;
        top: 0;
        bottom: 100%;
        right: 0;
    
    }
}

@media(min-width: 1728px) {
    .positioning {
        position: relative;
    }
}

@media(max-width:900px) {
    body {
        background: linear-gradient(150deg, #A4C1E2 -0.11%, rgba(255, 255, 255, 0) 6.55%);
        overflow-x: hidden;
    }
}
@media(min-width:901px) {
    body {
        background: linear-gradient(145deg, #A4C1E2 -0.11%, rgba(255, 255, 255, 0) 12%);
        box-shadow: 0px 55px 77px rgba(0, 0, 0, 0.3);
    }
}
</style>