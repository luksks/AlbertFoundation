<template>
  <div class="bg-background-primary">
     <Logo/>
      <AboutMe/>
  </div>
</template>

<script>
import Logo from "~/components/Navlogo.vue";
import AboutMe from "~/components/AboutMe.vue";

export default {
  // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
  head() {
    return {
      title: "MainPage - AlbertFoundation"
    };
  },
  components: {
    Logo,
      AboutMe
  }
};
</script>
