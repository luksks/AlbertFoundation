<template>
    <div class=" bg-background-primary bg-premiere flex flex-col h-full content-center"
         :class="theme">

        <!--============================== BARRE SUPERIEUR ALBERTFOUNDATION ========================================-->
        <div class="bg-background-tertiary ">
            <div class=" container text-copy-primary m-4 ">
                <h1 class="">
                    <nuxt-link to="/" class="text-2xl">
                        Albertfoundation 📡
                    </nuxt-link>
                </h1>

                <!--                <button>-->

                <!--                    <svg class="stroke-current bg-background-tertiary inline-block h-12 w-12" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">-->
                <!--                        <circle cx="8" cy="21" r="2"></circle>-->
                <!--                        <circle cx="20" cy="21" r="2"></circle>-->
                <!--                        <path d="M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1"></path>-->
                <!--                    </svg>-->
                <!--                    <img class="fill-current bg-background-primary stroke-current bg-green-200"-->
                <!--                         href="ftp://92.222.224.108"-->
                <!--                         target="_blank"-->
                <!--                         title="Access to the FTP server"-->
                <!--                         src="~/assets/img/BDD.svg">-->

                <!--                </button>-->
            </div>

        </div>

        <!--============================== PHOTO ALBERT + BOUTTON ========================================-->
        <div class="flex flex-wrap py-6 md:py-10 bg-background-primary">
            <div class="flex flex-col justify-around items-center w-5/6 md:w-1/2 mx-auto text-center animated zoom-in">
                <picture>
                    <img
                            class="rounded-full border-solid  shadow-inset w-64 h-64 hover:border-green-600"
                            height="256"
                            width="256"
                            alt="Young man (Albert Lanne) wearing a suite, nature in the background"
                            src="~/assets/img/indexImageProfil.jpg"
                    >
                </picture>
                <div class="mt-4">
                    <h1 class=" text-2xl md:text-3xl text-xl text-copy-primary hover:text-green-600">
                        Albert Lanne
                    </h1>
                    <h2 class="text-copy-secondary -mt-1 text-base md:text-xl">
                        Developer &bull; Student &bull; Network Technician
                    </h2>
                </div>


                <div class="flex mt-4 bg-background-button text-copy-primary">
                    <a
                            class="zoom text-center  no-underline shadow-lg  border border-gray-400 hover:border-gray-500 hover:shadow-xl px-3 py-2 m-2 rounded hover:text-black"
                            href="https://github.com/AlbertLanne"
                            target="_blank"
                            title="My GitHub account"
                    >


                        Github
                        <!--                <Icon path="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z" />-->
                    </a>
                    <a
                            class="zoom text-center  no-underline shadow-lg  border border-gray-400 hover:border-gray-500 hover:shadow-xl px-3 py-2 m-2 rounded hover:text-blue-700"
                            href="https://www.linkedin.com/in/albertlanne/"
                            target="_blank"
                            title="My online Curriculum vitae ♟"

                    >
                        Linkedin
                        <!--                <Icon path="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50" />-->
                    </a>
                    <a
                            class="zoom text-center  no-underline shadow-lg  border border-gray-400 hover:border-gray-500 hover:shadow-xl px-3 py-2 m-2 rounded hover:text-red-600"
                            href="mailto:albert.lanne@gmail.com"
                            title="Send me an e-mail!"
                    >
                        Email
                        <!--                <Icon-->
                        <!--                        path="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"-->
                        <!--                        view-box="0 0 1792 1792"-->
                        <!--                />-->
                    </a>
                    <a
                            class="zoom text-center  no-underline shadow-lg  border border-gray-400 hover:border-gray-500 hover:shadow-xl px-3 py-2 m-2 rounded hover:text-green-600"
                            href="https://www.artstation.com/albertl"
                            target="_blank"
                            title="My 3D art galery"
                    >
                        ArtStation
                        <!--                <Icon path="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" />-->
                    </a>
                    <a
                            class="zoom text-center  no-underline shadow-lg  border border-gray-400 hover:border-gray-500 hover:shadow-xl px-3 py-2 m-2 rounded hover:text-blue-500"
                            href="https://twitter.com/albertlanne1"
                            target="_blank"
                            title="I'm on Twitter as well"
                    >
                        Twitter
                        <!--                <Icon path="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50" />-->
                    </a>
                    <a
                            class="zoom text-center  no-underline shadow-lg  border border-gray-400 hover:border-gray-500 hover:shadow-xl px-3 py-2 m-2 rounded hover:text-yellow-400"
                            href="https://instagram.com/albertdelanoche/"
                            target="_blank"
                            title="I love take pictures !"

                    >
                        Instagram
                        <!--                <Icon path="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50" />-->
                    </a>

                </div>
            </div>
        </div>

        <!--============================== Hey You ! presentation text========================================-->
        <div class="flex flex-col flex-wrap items-center bg-background-primary pt-8 animated fade-in">
            <div class="justify-around items-center w-5/6 md:w-1/2 mx-auto  pb-8 md:pb-0">
                <p class="text-xl md:text-2xl   text-copy-primary  mb-2 hover:text-green-600">
                    Hey you!
                </p>
                <p class="text-base md:text-lg leading-normal text-copy-primary hover:text-copy-secondary">
                    I'm <span class="text-green-600 hover:text-copy-primary" v-text="'Albert'"/>, a guy in his twenties
                    living in
                    <span class="text-copy-primary hover:text-green-600" v-text="'France'"/>. Already at young age,
                    computers impressed me
                    so much that I wanted to know more about them. Now, I am a developer on my free time
                    and in my school, I studies <span class="text-copy-primary hover:text-green-600" v-text="'C++'"/>
                    and
                    the <span class="text-copy-primary hover:text-green-600" v-text="'networking/telecommunication'"/>
                    in the meantime.
                    <br><br>
                    When developing web apps, I use <span class="text-copy-primary hover:text-green-600"
                                                          v-text="'Nuxt.js'"/>
                    often in combination with a great CSS framework called <span
                        class="text-copy-primary hover:text-green-600" v-text="'TailWindCSS'"/>.
                    Although i love work on website what I find even more awesome is to work on dekstop applications
                    with the <span class="text-copy-primary hover:text-green-600" v-text="'Electron.js  '"/> technology
                    ❤ !
                    <br><br>
                </p>
            </div>

        </div>


        <!--============================== MAIN COMPOSANT ========================================-->
        <!--        <div class="container mx-auto text-copy-primary m-8 md:flex-1">-->
        <!--            <nuxt/>-->
        <!--        </div>-->


        <!--============================== BOX TEXT========================================-->
        <!-- incoming animated main coponent-->
        <!--        <div class=" items-center bg-background-primary pt-8 bg-blue-100">-->
        <!--            mainpage here-->
        <!--        </div>-->
        <Skills></Skills>
        <!--============================== Footer ========================================-->
        <footer class="bg-background-secondary sticky">

            <div class="flex container mx-auto text-copy-primary">
                <div class="m-3 flex mx-12 flex">
                    <p><a href="/"><img
                            src="~/assets/img/AF_logo_2.png"
                            width="60"
                            class="right"/></a></p>
                </div>


                <div class="w-1/4 my-3 ">
                    <p class=" mb-4 hover:text-green-600 text-xl">Ressources</p>
                    <p class="hover:text-red-600 my-2">- CV</p>
                    <!--          <p class="hover:text-red-900 my-2 my-2">- Incoming</p>-->
                    <!--          <p class="hover:text-red-900 my-2 my-2">- Incoming</p>-->
                    <!--          <p class="hover:text-red-900 my-2 my-2">- Incoming</p>-->
                </div>

                <div class="w-1/4 my-3 ">
                    <p class="mb-4 hover:text-green-600 text-xl">Plus</p>
                    <button><p class="hover:text-green-500 my-2" @click.prevent="toggleTheme">- {{this.theme}}</p>
                    </button>
                    <!--          <p class="hover:text-red-900 my-2">- Incoming</p>-->
                    <!--          <p class="hover:text-red-900 my-2">- Incoming</p>-->
                    <!--          <p class="hover:text-red-900 my-2">- Incoming</p>-->
                </div>
                <div class="w-1/4 my-3">
                    <p class="mb-4 hover:text-green-600 text-xl">Contact</p>
                    <p class="hover:text-red-900 my-2">- Site map</p>
                    <!--          <p class="hover:text-red-900 my-2">- Site map</p>-->
                    <!--          <p class="hover:text-red-900 my-2">- Social media</p>-->
                    <!--          <p class="hover:text-red-900 my-2">- Incoming</p>-->
                </div>
                </nuxt>
            </div>

        </footer>

    </div>
</template>

<!--Permet de maintenir la hauteur à 100% pour plus avoir de blanc-->
<style>
    #__layout, #__nuxt, body, html {
        height: 100%;
    }
</style>

<script>
    import logo from "~/components/Navlogo.vue";
    import Skills from "~/components/Skills.vue";

    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-meta
        head() {
            return {
                titleTemplate: "%s - AlbertFoundation",
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: "The main page of my personal website"
                    }
                ]
            };
        },
        data() {
            return {
                theme: "theme-dark"
            };
        },
        methods: {
            toggleTheme() {
                this.theme = this.theme === "theme-light" ? "theme-dark" : "theme-light";
            }
        },
        components: {
            logo,
            Skills


        }
    };
</script>
