<template>
    <div class="relative bg-projectColors-lighter-blue z-10">
        <img src="../images/contactForm.png" class="relative w-full">
        <img src="../images/contactForm2.png" class="absolute bottom-10%neg w-full">
        <div class="flex max-w-1078p w-full mt-189p ml-340.5p top-0 right-0 left-0 absolute z-20 bg-white form-radius">
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
    </div>
</template>


<style>
.message::placeholder {
    position: absolute;
    top: 13.4px;
}

.text-color::placeholder {
    color: #343A40;
}

.form-radius {
    border-radius: 26.7px;
}

.input-radius {
    border-radius: 10px;
}
</style>