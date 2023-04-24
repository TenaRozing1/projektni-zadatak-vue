<template>
  <div>
      <HeaderElement />
      <HeroSection />
      <BlueSection />
      <nuxt />
  </div>
</template>

<script>
import BlueSection from '../components/BlueSection.vue';
import HeaderElement from '../components/HeaderElement.vue';
import HeroSection from '../components/HeroSection.vue';


export default {
  name: "IndexPage",
  components: { HeaderElement, HeroSection, BlueSection }
}
</script>