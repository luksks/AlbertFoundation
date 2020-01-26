<template>
    <div>
        <div class="text-justify mt-4 flex-col lg:flex-row h-full w-full flex items text-copy-primary bg-background-primary">
            <div class="mx-4 my-4  flex-wrap bg-background-secondary align-baseline items-center  hover:shadow-xl px-3 py-2 m-2 rounded ">
                <p class="lg:text-2xl sm:text-3xl  text-2xl  my-4">The structure of the website</p>

                <div class="mx-4 ">
                    <div class=" mb-12 align-baseline flex sm:text-xl text-xl">
                        <div class="my-auto rounded-lg justify-start w-full">
                            <div class="justify-end items-end flex">
                                <p>This website is made with the javascript framework NuxtJS and Vue.JS and cooked
                                    by me with love. Nuxt.js is a great french framework for the server-side rendering!
                                    I use too webpack and node.js for the environment of development and compilation.
                                    For the front end I use TailwindCSS. The version of the website are the <span
                                            class="mr-1"> v{{ $options.version }}</span>.
                                </p>
                            </div>
                        </div>

                        <div class="hidden lg:block
                                    xl:mx-24 lg:mx-16 my-auto sm:mx-12 mx-6 flex">
                            <picture>
                                <img class="rounded-full bg-white border-solid "
                                     height="260"
                                     width="260"
                                     alt="My favorite french js framework ♥"
                                     src="../assets/img/AboutWebsite/nuxt.png">
                            </picture>
                        </div>
                    </div>

                    <div class="align-baseline flex">
                        <div class="hidden lg:block
                                    xl:mx-24 lg:mx-16 my-auto sm:mx-12 mx-6 flex">
                            <picture>
                                <img
                                        class="border-solid rounded-full shadow-inset hover:border-green-600"
                                        height="260"
                                        width="260"
                                        alt="The best Paas ever"
                                        src="../assets/img/AboutWebsite/logo_clever_cloud.jpg">
                            </picture>
                        </div>
                        <div class="sm:text-1xl text-xl my-auto rounded-lg justify-end w-full ">
                            <p>For the hosting and deployment, I use a French PAAS, Clever Cloud. Useful for easier
                                deployment with git . The staff and the community are great. For the hosting of the
                                domain name I use OVH. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:w-3/5  md:w-auto lg:w-11/12 mx-4 my-4 bg-background-secondary align-baseline items-center hover:shadow-xl px-3 py-2 m-2 rounded ">
                <p class="lg:text-2xl sm:text-3xl  text-2xl my-4">Data science</p>

                <p class="lg:text-lg sm:text-2xl text-xl">The website has an important backend of
                    data analysis. I time to watch the video of google SkillShop and have the certification on google
                    analytics, google ads spend an important and general e-marketing. For the websites, I use different
                    metrics tools for analyse the data of it and improve the experiences of the users. Mostly I watch
                    the data from CleverCloud, Google Search Console and Google Analytics. You can see here more
                    information about my <nuxt-link to="/privacy">privacy policy here.</nuxt-link>
                </p>
                <!--                    <p class="text-3xl my-4">Google Ads</p>-->
            </div>
        </div>

                <div class="mb-8 text-copy-primary hover:shadow-xl mt-4 mx-4 bg-background-secondary
                              items-baseline flex hover:shadow-xl px-3 py-2 m-2 rounded ">
                    <div id="app">
                        <canvas id="myLineChart"></canvas>
                    </div>
                    <div class="flex">
                    </div>
                    </div>

        <!--        <div class="mb-8 text-copy-primary hover:shadow-xl mt-4 mx-4 bg-background-secondary-->
        <!--                      items-baseline flex hover:shadow-xl px-3 py-2 m-2 rounded ">-->
        <!--            <div class="flex">-->


        <!--                <div class="justify-start flex flex-wrap">-->
        <!--                    <p class="lg:text-2xl sm:text-3xl  text-2xl my-4">Certification</p>-->
        <!--                    <p class="sm:text-2xl text-xl">To understand and use well the data, I need to have certification. I-->
        <!--                        have the-->
        <!--                        Google-->
        <!--                        certification of the Fundamental principles of digital marketing. And actually I'm working on-->
        <!--                        more-->
        <!--                        advanced-->
        <!--                        google ads and google analytics certification.-->
        <!--                    </p>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->

        <!--                <div class="hidden xl:block justify-end flex flex-wrap">-->
        <!--                    <picture class="flex w-2/4">-->
        <!--                        <img class="rounded-lg w-auto"-->
        <!--                             alt="My google certificat"-->
        <!--                             src="../assets/img/AboutWebsite/google_analytics.png">-->
        <!--                    </pi            </div>
        cture>-->
        <!--                </div>-->
        <!--                <div class="hidden xl:block justify-end flex flex-wrap">-->
        <!--                    <picture class="flex w-2/4">-->
        <!--                        <img class="rounded-lg w-auto"-->
        <!--                             alt="My google certificat"-->
        <!--                             src="../assets/img/AboutWebsite/google_search_engine.png">-->
        <!--                    </picture>-->
        <!--                </div>-->


        <!--                    <p class="text-3xl my-4">Google Ads</p>-->
    </div>
</template>



<script>

    import NavBarre from "~/components/NavBarre.vue";
    import {version} from '../package.json'
    export default {
        name: "about",
        head() {
            return {
                title: "About"
            };
        },
        components: {NavBarre,},
        version
    }
</script>

<style scoped>
</style>
