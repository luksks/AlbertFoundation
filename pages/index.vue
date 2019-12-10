<template>
<!--    Page principale du site, donc avec ma photo, les bouttons de redirection et une présentation.-->
    <div>
        <PhotoEtBouton/>
        <texte-introduction/>

    </div>
</template>

<script>

    import texteIntroduction from  "~/components/PagePrincipale/texteIntroduction.vue";
    import PhotoEtBouton from  "~/components/PagePrincipale/PhotoEtBouton.vue";


export default {
  // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
  head() {
    return {
      title: "Home page"
    };
  },
    components: {texteIntroduction,PhotoEtBouton}

};
</script>
