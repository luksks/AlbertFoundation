<template>
    <footer class="mt-12 bg-background-tertiary flex">

        <div class="items-center flex  container mx-auto text-copy-primary flex-wrap">

            <div class="xl:w-1/4 sm:w-2/4 w-full
                        sm:justify-start justify-center
                        flex m-3 mx-auto">
                <nuxt-link to="/" class="sm:text-2xl text-3xl flex text-center">
                    Albertfoundation 📡
                </nuxt-link>

            </div>

            <div class="sm:w-2/4 xl:w-1/4 w-full my-3 sm:text-left text-center ">
                <p class=" mb-4 hover:text-green-600 sm:text-xl text-2xl ">Ressources</p>

                <a class="sm:p-0 sm:px-0 p-1 px-2  my-2 hover:text-blue-700" download
                   href="CV_LANNE_Albert.pdf">- CV</a>

                <nuxt-link to="/presentation">
                    <p class="sm:p-0 sm:px-0 p-1 px-2  my-2 hover:text-blue-700">
                        - Presentation</p>
                </nuxt-link>

                <!--          <p class="cursor-pointer hover:text-red-900 my-2 my-2">- Incoming</p>-->
            </div>

            <div class="sm:w-2/4 xl:w-1/4 w-full my-3 sm:text-left text-center">
                <p class=" mb-4 hover:text-green-600 sm:text-xl text-2xl ">More</p>

                <p class="flex sm:justify-start justify-center sm:mb-0 mb-4
                 sm:p-0 sm:px-0 p-1 px-2 rounded my-2 hover:text-blue-700">
                    - Theme Dark
                </p>
                <p class="sm:text-left text-center cursor-pointer sm:p-0 sm:px-0 p-1 px-3 my-2 hover:text-blue-700"
                   title="The opensource repo of the website !"><a
                        href="https://github.com/AlbertLanne/AlbertFoundation"
                        target="_blank">- GitHub repo</a></p>
                <!--          <p class="cursor-pointer hover:text-red-900 my-2">- Incoming</p>-->
            </div>

            <div class="sm:w-2/4 xl:w-1/4 w-full my-3 sm:text-left text-center">
                <p class=" mb-4 hover:text-green-600 sm:text-xl text-2xl ">Contact</p>

                <nuxt-link to="/privacy">
                    <p class="sm:mb-0 mb-4
                                sm:text-left text-center sm:p-0 sm:px-0 p-1 px-2 my-2 hover:text-blue-700">
                        - Privacy policy</p>
                </nuxt-link>
                <nuxt-link to="/aboutWebsite">
                    <p class="sm:text-left text-center sm:p-0 sm:px-0 p-1 px-2 my-2 hover:text-blue-700">
                        - About the website</p>
                </nuxt-link>

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

