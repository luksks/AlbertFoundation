<template>


            <div class="h-full w-full text-copy-primary bg-background-primary">
                <div class="mx-8 m-8  flex-wrap bg-background-secondary align-baseline items-center  hover:shadow-xl px-3 py-2 m-2 rounded ">
                    <p class="text-3xl my-4">The structure of the website</p>

                    <div class="mx-4 ">

                        <div class="align-baseline flex text-2xl">
                            <div class=" rounded-lg justify-start w-full">
                                <div class="justify-end items-end flex">
                                    <p>This website is made with the javascript framework NuxtJS and Vue.JS and cooked
                                        by me
                                        with love. Nuxt.js is
                                        a great french framework for the server-side rendering! I use too webpack and
                                        node.js
                                        for the environment of development and compilation. For the front end I use. </p>
                                </div>
                            </div>

                            <div class="sm:mx-24 mx-6 justify-end flex">
                                <picture>
                                    <img class="rounded-full bg-white border-solid  shadow-insethover:border-green-600 "
                                         height="160"
                                         width="160"
                                         alt="My favorite french js framework ♥"
                                         src="../assets/img/AboutWebsite/nuxt.png">
                                </picture>
                            </div>
                        </div>

                        <div class="flex">
                        </div>
                        <div class="align-baseline  flex">
                            <div class="sm:mx-24 mx-6 justify-start flex">
                                <picture>
                                    <img
                                            class="border-solid rounded-full shadow-inset hover:border-green-600"
                                            height="160"
                                            width="160"
                                            alt="The best Paas ever"
                                            src="../assets/img/AboutWebsite/logo_clever_cloud.jpg">
                                </picture>
                            </div>
                            <div class="text-2xl rounded-lg justify-end w-full ">
                                <p>For the hosting i use a French PAAS, Clever Cloud. Usefull for a easier deployment
                                    and a htpps certificat. the support help a lot. For the hosting i use OVH. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hover:shadow-xl mx-8 m-8  flex-wrap bg-background-secondary align-baseline items-center hover:shadow-xl px-3 py-2 m-2 rounded ">
                    <p class="text-3xl my-4">Data science </p>

                    <p class="text-2xl">I use different metriques tools for analyse the data of my websites and improve it
                        are google Analytics, clever cloud information, Google search Engine. You can see here more
                        information about my <nuxt-link to="/privacy">privacy policy here.</nuxt-link></p>
<!--                    <p class="text-3xl my-4">Google Ads</p>-->
                </div>
        </div>

</template>

<script>
    export default {
        name: "about",
        head() {
            return {
                title: "About"
            };
        },
    }
</script>

<style scoped>

</style>
