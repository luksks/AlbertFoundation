<template>
    <div class="w-full">
        <div class="text-justify mt-4 flex-col lg:flex-row h-full w-full flex items text-copy-primary bg-background-primary">
            <div class="mx-4 my-4  flex-wrap bg-background-secondary align-baseline items-center  hover:shadow-xl px-3 py-2 m-2 rounded ">
                <p class="lg:text-2xl sm:text-3xl  text-2xl  my-4">The structure of the website</p>
<!--SPA/VUEX/le créateur du logo/blender/ -->
                <div class="mx-4 ">
                    <div class=" mb-6 align-baseline flex sm:text-xl text-xl">
                        <div class="my-auto rounded-lg justify-start w-full">
                            <div class="justify-end items-end flex">
                                <p>This website is made with the javascript framework NuxtJS and Vue.JS and cooked
                                    by me with love. Nuxt.js is a great french framework for the server-side rendering!
                                    I use too webpack and node.js for the environment of development.
                                    For the front end I use TailwindCSS. The version of the website are the <span
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
                            <p>For the hosting and deployment, I use a French PAAS, Clever Cloud. Useful for easier
                                deployment with git . The staff and the community are great. For the hosting of the
                                domain name I use OVH. The website have also a local VueX store for a theme switcher and a
                                middleware with MongoDB database </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sm:w-3/5  md:w-auto lg:w-11/12 mx-4 my-4 bg-background-secondary align-baseline items-center hover:shadow-xl px-3 py-2 m-2 rounded ">
                <p class="lg:text-2xl sm:text-3xl  text-2xl my-4">Rest API</p>

                <p class="sm:text-1xl text-xl">Like I have say the website work with a mongoDB
                    connected with a Representational state transfer API creat by myself to improve the users
                    experience and add like a online chat for my timeline page. Like/comments go on my database
                    going throught my API. I have 2 others github project with the similar technologies.
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
                            <p class="sm:text-1xl text-xl my-2"> For the websites, I use different
                                metrics tools for analyse the data of it and improve the users experiences. I have the Google
                                certification of the Fundamental principles of digital marketing. And actually I'm working on
                                more advanced google ads and google analytics certification. Mostly I watch
                                the data from CleverCloud, Google Search Console and Google Analytics. You can see here more
                                information about my <nuxt-link to="/privacy" class="border-b border-border-color-primary italic">privacy policy here.</nuxt-link>
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
