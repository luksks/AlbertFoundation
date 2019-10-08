<template>
  <div class="bg-background-primary">
     <Logo/>
  </div>
</template>

<script>
import Logo from "~/components/Navlogo.vue";

export default {
  // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
  head() {
    return {
      title: "MainPage - AlbertFoundation"
    };
  },
  components: {
    Logo
  }
};
</script>
