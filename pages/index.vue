<template>
    <!--    Page principale du site, donc avec ma photo, les bouttons de redirection et une présentation.-->
    <div>

        <!--        <video controls playsinline="" loop="" autoplay="" class="bg-fixed w-full h-full absolute flex inline-flex pointer-events-none">-->
        <!--            <source src="../assets/img/animd.mp4" type="video/mp4" autostart="true">-->
        <!--        </video>-->

        <!--        <div class="absolute inset-0  ">-->


        <!--        </div>-->
        <div class="bg-background-primary antialiased">
            <!--                <header class="header relative lg:overflow-hidden">-->
            <!--        <div class="absolute inset-0  ">-->
            <video autoplay muted loop id="myVideo" class="w-full h-auto object-cover object-left pointer-events-none ">
                <source src="../assets/img/anime.webm" type="video/webm" autostart="true">
            </video>
        </div>

<!--        <NavBarre/>-->
        <!--                </header>-->


        <div class="relative ">
            <Photo/>
            <NetworkBouton/>
            <texte-introduction/>
            <project/>
        </div>
    </div>

</template>

<script>

    import texteIntroduction from "~/components/IndexPagePrincipale/texteIntroduction.vue";
    import project from "~/components/IndexPagePrincipale/project.vue";
    import Photo from "~/components/IndexPagePrincipale/Photo.vue";
    import NetworkBouton from "~/components/IndexPagePrincipale/NetworkBouton.vue";
    import paper from "~/components/SpecialComponents/grain_effect.vue";
    import NavBarre from "~/components/NavBarre.vue";


    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
        head() {
            return {
                title: "Home page"
            };
        },
        components: {NavBarre, Photo,texteIntroduction, project , NetworkBouton}

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
