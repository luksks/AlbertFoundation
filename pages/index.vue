<template>
    <!--    Page principale du site, donc avec ma photo, les bouttons de redirection et une présentation.-->
    <div>

        <!--        <video controls playsinline="" loop="" autoplay="" class="bg-fixed w-full h-full absolute flex inline-flex pointer-events-none">-->
        <!--            <source src="../assets/img/animd.mp4" type="video/mp4" autostart="true">-->
        <!--        </video>-->

        <!--        <div class="absolute inset-0  ">-->


        <!--        </div>-->
        <div class="bg-black antialiased">
                <header class="header relative lg:overflow-hidden">
                    <div class="absolute inset-0 lg:opacity-100 opacity-50">
                        <video autoplay muted loop id="myVideo">
                            <source src="../assets/img/anime.webm" type="video/webm" autostart="true"
                                    class="object-cover w-full "> </video>
                    </div>
                    <NavBarre/>
                </header>



            <div class="absolute inset-0">

                <Photo/>
                <NetworkBouton/>
                <texte-introduction/>
            </div>
        </div>
    </div>

</template>

<script>

    import texteIntroduction from "~/components/IndexPagePrincipale/texteIntroduction.vue";
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
        components: {NavBarre,texteIntroduction, Photo, NetworkBouton}

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
