<template>
<!--    Page principale du site, donc avec ma photo, les bouttons de redirection et une présentation.-->
    <div>
        <Photo/>
        <NetworkBouton/>
        <texte-introduction/>
    </div>
</template>

<script>

    import texteIntroduction from  "~/components/IndexPagePrincipale/texteIntroduction.vue";
    import Photo from  "~/components/IndexPagePrincipale/Photo.vue";
    import NetworkBouton from  "~/components/IndexPagePrincipale/NetworkBouton.vue";


export default {
  // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
  head() {
    return {
      title: "Home page"
    };
  },
    components: {texteIntroduction,Photo,NetworkBouton}

};
</script>
