<template>
  <div>
    <HeaderElement />
    <HeroSection />
    <BlueSection />
    <PlanetSection />
    <GraySection />
    <WhiteSection />
    <LagoonBlueSection />
    <GradientSection />
    <FormSection />
    <nuxt />
  </div>
</template>

<script>
import BlueSection from '../components/BlueSection.vue';
import HeaderElement from '../components/HeaderElement.vue';
import HeroSection from '../components/HeroSection.vue';
import PlanetSection from '../components/PlanetSection.vue';
import GraySection from '../components/GraySection.vue';
import WhiteSection from '../components/WhiteSection.vue';
import LagoonBlueSection from '../components/LagoonBlueSection.vue';
import GradientSection from '../components/GradientSection.vue';
import FormSection from '../components/FormSection.vue';

export default {
  name: "IndexPage",
  components: { HeaderElement, HeroSection, BlueSection, PlanetSection, GraySection, WhiteSection, LagoonBlueSection, GradientSection, FormSection }
}
</script>