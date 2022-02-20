<template>
    <!--    Page principale du site, donc avec ma photo, les bouttons de redirection et une présentation.-->
    <div>

        <div class="bg-background-primary antialiased">
            <video autoplay muted loop id="myVideo" class="w-full h-auto object-cover object-left pointer-events-none ">
                <source src="../assets/img/anime.webm" type="video/webm" autostart="true">
            </video>
        </div>

        <div class="relative ">
            <Photo/>
            <NetworkBouton/>
            <texte-introduction/>
            <project/>
<!--            <skill/>-->
        </div>
    </div>
</template>

<script>

    import texteIntroduction from "~/components/IndexPagePrincipale/texteIntroduction.vue";
    import project from "~/components/IndexPagePrincipale/project.vue";
    import skill from "~/components/IndexPagePrincipale/skill.vue";
    import Photo from "~/components/IndexPagePrincipale/Photo.vue";
    import NetworkBouton from "~/components/IndexPagePrincipale/NetworkBouton.vue";
    import NavBarre from "~/components/NavBarre.vue";


    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
      head: {
        title: 'Consultant SEO - Rendez-vous 15 Minutes Offert ✅',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: '✅ Référencement Manuel Garantit - Découvrez notre Méthode de Travail en Vidéo -Cliquez Ici ! Une Véritable Stratégie de Référencement SEO Clé en Main au Service de votre Site Web !'
          }
        ],
      },
        components: {NavBarre, Photo,texteIntroduction, project , NetworkBouton,skill}

    };
</script>

<style scoped>

    #myVideo {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }
</style>
