<template>
    <footer class=" bg-background-tertiary flex">
        <div class=" items-center flex flex-col sm:flex-row container mx-auto text-copy-primary flex-wrap">

            <div class="sm:hidden lg:block m-3 mx-12 flex justify-center">
                <nuxt-link to="/" class="sm:text-2xl text-5xl flex text-center">
                    Albertfoundation 📡
                </nuxt-link>

                <!--                    <p><a href="/"><img-->
                <!--                            src="../assets/img/AF_logo_2.png"-->
                <!--                            width="60"-->
                <!--                            alt="Albert Lanne"-->
                <!--                            class="right"/></a></p>-->
            </div>

            <div class="w-1/4 my-3 sm:text-left text-center">
                <p class=" mb-4 hover:text-green-600 sm:text-xl text-4xl ">Ressources</p>
                <!--                        zoom text-center  no-underline shadow-lg  border border-border-color-primary  px-3 py-2 m-2 rounded -->
                <a class="sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700"
                   download
                   href="CV_LANNE_Albert.pdf">- CV</a>
                <nuxt-link to="/presentation">
                    <p class="sm:p-0 sm:px-0 p-1 px-2 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700">
                        - Presentation</p>
                </nuxt-link>

                <!--          <p class="cursor-pointer hover:text-red-900 my-2 my-2">- Incoming</p>-->
                <!--          <p class="cursor-pointer hover:text-red-900 my-2 my-2">- Incoming</p>-->
                <!--          <p class="cursor-pointer hover:text-red-900 my-2 my-2">- Incoming</p>-->
            </div>

            <div class="w-1/4 my-3 ">
                <p class="mb-4 hover:text-green-600 sm:text-xl text-4xl">More</p>
                <a class="sm:text-left text-center cursor-pointer sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700">
                    -theme dark
                </a>
                <p class="sm:text-left text-center cursor-pointer sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700"
                   title="The opensource repo of the website !"><a
                        href="https://github.com/AlbertLanne/AlbertFoundation"
                        target="_blank">- GitHub repo</a></p>
                <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Incoming</p>-->
            </div>
            <div class="w-1/4 my-3">
                <p class="mb-4 hover:text-green-600 sm:text-xl text-4xl">Contact</p>

                <nuxt-link to="/privacy">
                    <p class="sm:text-left text-center sm:p-0 sm:px-0 p-1 px-2 sm:border-0 border border-border-color-primary rounded my-2 hover:text-blue-700">
                        - Privacy policy</p>
                </nuxt-link>
                <nuxt-link to="/aboutWebsite">
                    <p class="sm:text-left text-center sm:p-0 sm:px-0 p-1 px-2 sm:border-0  border border-border-color-primary rounded my-2 hover:text-blue-700">
                        - About the website</p>
                </nuxt-link>

                <!--                <p class="sm:p-0 sm:px-0 p-1 px-3 sm:border-0 border hover:shadow-xl border-border-color-primary rounded my-2 hover:text-blue-700">-->
                <!--                    - Site map</p>-->
                <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Site map</p>-->
                <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Social media</p>-->
                <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Incoming</p>-->
            </div>
        </div>

    </footer>
</template>

<script>
    export default {
        name: "NavFooter",
        data() {
            return {};
        },
    }
</script>

