<template>
    <div class="background-form relative background-blue">
        <div class="flex justify-center items-center xxxl:items-start xxxl:justify-start">
            <div
                class="form-radius max-w-1078p w-full bg-white mx-6 sm:mx-30p md:mx-20 xxxl:mx-0 mt-97p xl:mt-52 xxxl:mt-189p xxxl:ml-340.5p">
                <div class="flex flex-col w-full pt-26.7p sm:pt-10 md:pt-64p px-5 md:px-12 lg:px-90p">
                    <h2
                        class="font-black text-projectColors-dark-gray text-blue-button-text sm:text-3xl md:text-5xl lg:text-ask pb-8 sm:pb-10 lg:pb-57p">
                        Ask anything. </h2>
                    <div class="flex flex-col xl:flex-row xl:pb-30p">
                        <input type="text" placeholder="First name"
                            class="pl-14p md:pl-26.7p w-full xl:mr-25.7p border mb-14p md:mb-30p xl:mb-0 text-color text-button-small md:text-input-text border-projectColors-input-border h-9 md:h-49p input-radius">
                        <input type="text" placeholder="Last Name"
                            class="pl-14p md:pl-26.7p w-full xl:mr-25.7p border text-color mb-14p md:mb-30p xl:mb-0 text-button-small md:text-input-text border-projectColors-input-border h-9 md:h-49p input-radius">
                        <input type="text" placeholder="Email"
                            class="pl-14p md:pl-26.7p w-full text-button-small md:text-input-text text-color mb-14p md:mb-30p xl:mb-0 border border-projectColors-input-border h-9 md:h-49p input-radius">
                    </div>
                    <div>
                        <input type="text" placeholder="Topic"
                            class="mb-14p md:mb-30p pl-14p md:pl-26.7p text-button-small md:text-input-text w-full text-color border border-projectColors-input-border h-9 md:h-49p input-radius">
                        <input type="text" placeholder="Message"
                            class="pl-14p md:pl-26.7p text-button-small md:text-input-text w-full text-color border message border-projectColors-input-border h-251p md:h-219p input-radius">
                    </div>
                    <button
                        class="bg-projectColors-light-blue w-158.5p h-50p hidden md:block text-white font-bold text-input-text border-radius-class mt-30p mb-67p">Make
                        contact</button>
                    <button
                        class="bg-projectColors-light-blue w-77p h-35p my-37p md:hidden text-white font-bold text-button-small border-radius-class-2">Send</button>
                </div>
            </div>
        </div>
        <div
            class="mt-5 sm:mt-30p pb-58p lg:pb-0 xxxl:pb-73p flex justify-center xxxl:justify-start items-center xxxl:item-start mx-6 sm:mx-30p md:mx-20 xxxl:mx-0">
            <div class="flex max-w-1078p h-88p xl:h-124p w-full xxxl:ml-340.5p bg-projectColors-dark-gray form-radius">
            </div>
        </div>
        <!-- <div class="flex max-w-1078p w-full mt-189p ml-340.5p bg-white form-radius">
            <div class="flex flex-col w-full pt-64p px-90p pb-67p">
                <h2 class="font-black text-projectColors-dark-gray text-ask pb-57p">Ask anything. </h2>
                <div class="flex pb-30p">
                    <input type="text" placeholder="First name"
                        class="pl-26.7p w-full mr-25.7p border text-color text-input-text border-projectColors-input-border h-49p input-radius">
                    <input type="text" placeholder="Last Name"
                        class="pl-26.7p w-full mr-25.7p border text-color text-input-text border-projectColors-input-border h-49p input-radius">
                    <input type="text" placeholder="Email"
                        class="pl-26.7p w-full text-input-text text-color border border-projectColors-input-border h-49p input-radius">
                </div>
                <div>
                    <input type="text" placeholder="Topic"
                        class="mb-30p pl-26.7p text-input-text w-full text-color border border-projectColors-input-border h-49p input-radius">
                    <input type="text" placeholder="Message"
                        class="mb-30p pl-26.7p text-input-text w-full text-color border message border-projectColors-input-border h-219p input-radius">
                </div>
                <button
                    class="bg-projectColors-light-blue w-158.5p h-50p text-white font-bold text-input-text border-radius-class">Make
                    contact</button>
            </div>
        </div>
        <div class="flex max-w-1078p h-124p w-full ml-340.5p bottom-20px- right-0 left-0 absolute z-20 bg-projectColors-dark-gray form-radius">

        </div> -->
    </div>
</template>


<style>
@media(min-width: 392px) {
    .background-form {
        background-image: url("../images/contactForm.png");
    }
}

@media(min-width: 1151px) {
    .background-blue {
        background-color: #EDF6FF;
    }
}

@media(max-width: 391px) {
    .background-form {
        background-image: url("../images/smallForm.png");
    }
}

.message::placeholder {
    position: absolute;
    top: 13.4px;
}

.text-color::placeholder {
    color: #343A40;
}

@media(min-width: 900px) {
    .form-radius {
        border-radius: 26.7px;
    }
}

@media(max-width: 899px) {
    .form-radius {
        border-radius: 16px;
    }
}

.input-radius {
    border-radius: 10px;
}
</style>