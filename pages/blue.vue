<template>
    <div>
        <HeaderElement />
        <BlueSection />
        <nuxt />
    </div>
</template>

<script>
import BlueSection from '../components/BlueSection.vue';
import HeaderElement from '../components/HeaderElement.vue';



export default {
    name: "hero",
    components: { HeaderElement, BlueSection }
}
</script>