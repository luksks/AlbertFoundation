<template>
    <!--    Page principale du site, donc avec ma photo, les bouttons de redirection et une présentation.-->
    <div>

        <!--        <video controls playsinline="" loop="" autoplay="" class="bg-fixed w-full h-full absolute flex inline-flex pointer-events-none">-->
        <!--            <source src="../assets/img/animd.mp4" type="video/mp4" autostart="true">-->
        <!--        </video>-->

<!--        <div class="absolute inset-0  ">-->


<!--        </div>-->
<!--            <div class="header relative lg:overflow-hidden antialiased-->
            <div class="
            flex-wrap items-center justify-between flex ">

                <div class="pointer-events-none  bg-auto  flex">
                    <video  autoplay muted loop id="myVideo">
                        <source src="../assets/img/anime.webm" type="video/webm" autostart="true">
                    </video>
                </div>



                <nuxt-link to="/" class="sm:px-6 sm:mx-0 mx-auto">
                    <img class="-pt-8  fill-current stroke-current sm:h-26 sm:w-26 h-24 w-24 zoom  "
                         src="../assets/img/logo_site_dark_mod.svg"
                         title="The white version logo of my website"
                         alt="The white version logo of my website">
                </nuxt-link>

                <!--        Div pour les élément de droite-->

                <div class=" align-baseline flex justify-end  text-copy-primary sm:mx-0 mx-auto">

                    <nuxt-link to="/presentation"
                               class=" button zoom hover:text-purple-700 ">
                        Presentation
                    </nuxt-link>
                    <nuxt-link to="/aboutWebsite" class="button zoom hover:text-green-700  text-sm sm:text-base ">
                        About the website
                    </nuxt-link>
                </div>
            </div>


        <div class="absolute inset-0">
            <Photo/>


            <NetworkBouton/>

            <texte-introduction/>
        </div>

    </div>

</template>

<script>

    import texteIntroduction from "~/components/IndexPagePrincipale/texteIntroduction.vue";
    import Photo from "~/components/IndexPagePrincipale/Photo.vue";
    import NetworkBouton from "~/components/IndexPagePrincipale/NetworkBouton.vue";
    import paper from "~/components/SpecialComponents/grain_effect.vue";



    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
        head() {
            return {
                title: "Home page"
            };
        },
        components: { texteIntroduction, Photo, NetworkBouton}

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
