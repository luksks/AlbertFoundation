<template>
    <div>

        <div class="mt-4 h-full w-full flex items text-copy-primary bg-background-primary">

            <div class=" mx-4 my-4  flex-wrap bg-background-secondary align-baseline items-center  hover:shadow-xl px-3 py-2 m-2 rounded ">
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

                        <div class="hidden lg:block
                                    sm:mx-24 mx-6 justify-end flex">
                            <picture>
                                <img class="rounded-full bg-white border-solid "
                                     height="260"
                                     width="260"
                                     alt="My favorite french js framework ♥"
                                     src="../assets/img/AboutWebsite/nuxt.png">
                            </picture>
                        </div>
                    </div>

                    <div class="align-baseline  my-6 flex">
                        <div class="hidden lg:block
                                    sm:mx-24 mx-6 justify-start flex">
                            <picture>
                                <img
                                        class="border-solid rounded-full shadow-inset hover:border-green-600"
                                        height="260"
                                        width="260"
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
            <div class=" container mx-4  my-4 bg-background-secondary align-baseline items-center hover:shadow-xl px-3 py-2 m-2 rounded ">
                <p class="text-3xl my-4">Data science</p>

                <p class="text-2xl text-justify flexflex-wrap ">The website has an important backend of data analysis. I
                    spend an important
                    time to watch the video of google SkillShop and have the certification on google analytics, google
                    ads
                    and general e-marketing. For the websites, I use different metrics tools for analyse the data of it
                    and
                    improve the experiences of the users. Mostly I watch the data from CleverCloud, Google Search
                    Console
                    and Google Analytics. You can see here more information about my
                    <nuxt-link to="/privacy">privacy policy here.</nuxt-link>
                </p>
                <!--                    <p class="text-3xl my-4">Google Ads</p>-->
            </div>
        </div>

        <div class="mb-8 text-copy-primary hover:shadow-xl mt-4 mx-4 bg-background-secondary
                      items-baseline flex hover:shadow-xl px-3 py-2 m-2 rounded ">
<div class="flex">


            <div class="justify-start flex flex-wrap">
                <p class="text-3xl my-4">Data science certification</p>
                <p class="text-2xl ">To understand and use well the data, I need to have certification. I have the
                    Google
                    certification of the Fundamental principles of digital marketing. And actually I'm working on more
                    advanced
                    google ads and google analytics certification.
                </p>
            </div>

<!--            <div class="hidden xl:block justify-end flex flex-wrap">-->
<!--                <picture class="flex w-2/4">-->
<!--                    <img class="rounded-lg w-auto"-->
<!--                         alt="My google certificat"-->
<!--                         src="../assets/img/AboutWebsite/certificat_de_base.png">-->
<!--                </picture>-->
<!--            </div>-->
            </div>

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
