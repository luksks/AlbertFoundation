<template>
    <div class="w-full">
        <div class="text-justify mt-4 flex-col lg:flex-row h-full w-full flex items text-copy-primary bg-background-primary">
            <div class="mx-4 my-4  flex-wrap bg-background-secondary align-baseline items-center  hover:shadow-xl px-3 py-2 m-2 rounded ">
                <p class="lg:text-2xl sm:text-3xl  text-2xl  my-4">La structure du site web</p>
<!--SPA/VUEX/le créateur du logo/blender/ -->
                <div class="mx-4 ">
                    <div class=" mb-6 align-baseline flex sm:text-xl text-xl">
                        <div class="my-auto rounded-lg justify-start w-full">
                            <div class="justify-end items-end flex">
                                <p>Ce site est réalisé avec le framework javascript NuxtJS et Vue.JS et cuisiné
                                  par moi avec amour. Nuxt.js est un excellent framework français pour le rendu côté serveur !
                                  J'utilise aussi webpack et node.js pour l'environnement de développement.
                                  Pour le front-end j'utilise TailwindCSS. Les versions du site sont les suivantes<span
                                            class="mr-1"> v{{ $options.version }}</span>.
                                </p>
                            </div>
                        </div>

                        <div class="hidden lg:block xl:mx-12 lg:mx-8 my-auto sm:mx-4 mx-2 flex">
                            <picture>
                                <img class="rounded-full bg-white border-solid "
                                     height="200"
                                     width="200"
                                     alt="My favorite french js framework ♥"
                                     src="../assets/img/AboutWebsite/nuxt.png">
                            </picture>
                        </div>
                    </div>

                    <div class="align-baseline flex">
                        <div class="hidden lg:block xl:mx-12 lg:mx-8 my-auto sm:mx-4 mx-2 flex">
                            <picture>
                                <img
                                        class="border-solid rounded-full shadow-inset hover:border-green-600"
                                        height="200"
                                        width="200"
                                        alt="The best Paas ever"
                                        src="../assets/img/AboutWebsite/logo_clever_cloud.jpg">
                            </picture>
                        </div>
                        <div class="sm:text-1xl text-xl my-auto rounded-lg justify-end w-full ">
                            <p>Pour l'hébergement et le déploiement, j'utilise un PAAS français, Clever Cloud. Utile pour faciliter le
                              déploiement avec git. Le personnel et la communauté sont formidables. Pour l'hébergement du nom de
                              nom de domaine, j'utilise OVH. Le site web a également un magasin VueX local pour le changement de thème et un middleware avec une base de données MongoDB.
                              middleware avec une base de données MongoDB
 </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:w-3/5  md:w-auto lg:w-11/12 mx-4 my-4 bg-background-secondary align-baseline items-center hover:shadow-xl px-3 py-2 m-2 rounded ">
                <p class="lg:text-2xl sm:text-3xl  text-2xl my-4">Rest API</p>

                <p class="sm:text-1xl text-xl">Comme je l'ai dit, le site web fonctionne avec une mongoDB
                  connectée à une API de transfert d'état représentationnel créée par moi-même pour améliorer l'expérience
                  l'expérience des utilisateurs et ajouter un chat en ligne pour ma page chronologique. Les commentaires vont dans ma base de données
                  en passant par mon API. J'ai 2 autres projets github avec les mêmes technologies.

                  Traduit avec www.DeepL.com/Translator (version gratuite)
                    <a  href="https://github.com/AlbertLanne" class="italic border-b border-border-color-primary">See my github account!</a>
                </p>
                <!--                    <p class="text-3xl my-4">Google Ads</p>-->
            </div>
        </div>



                <div class="mb-8 text-copy-primary hover:shadow-xl mt-4 mx-4 bg-background-secondary
                              items-baseline  hover:shadow-xl px-3 py-2 m-2 rounded ">
                    <div class="flex w-full">
                        <div class="justify-start flex flex-wrap">
                            <p class="lg:text-2xl sm:text-3xl  text-2xl my-4">Certification</p>
                            <p class="sm:text-1xl text-xl my-2"> Pour les sites web, j'utilise différents
                              outils de mesure pour analyser les données et améliorer l'expérience des utilisateurs. J'ai la certification Google
                              sur les principes fondamentaux du marketing numérique. Et actuellement je travaille sur
                              la certification plus avancée de google ads et google analytics. La plupart du temps, je regarde
                              les données de CleverCloud, Google Search Console et Google Analytics. Vous pouvez voir ici plus
                              informations sur mon <nuxt-link to="/privacy" class="border-b border-border-color-primary italic">privacy policy here.</nuxt-link>
                            </p>
                        </div>
                    </div>

                    <div class="w-full flex justify-center">
                        <picture class="flex w-1/2 p-2">
                            <img class="rounded-lg w-auto"  alt="My google certificat"
                                 src="../assets/img/AboutWebsite/google_analytics.png"></picture>
                        <picture class="flex w-1/2 p-2">
                            <img class="rounded-lg w-auto" alt="My google certificat"
                                 src="../assets/img/AboutWebsite/google_search_engine.png">
                        </picture>
                    </div>
                </div>


    </div>
</template>



<script>

    import NavBarre from "~/components/NavBarre.vue";
    import {version} from '../package.json'
    export default {
        name: "about",
      head: {
        title: 'About the website',
        meta: [
          {
            hid: 'description',
            name: 'About website',
            content: 'the about page of the website'
          }
        ],
      },
        components: {NavBarre,},
        version
    }
</script>

<style scoped>
</style>
