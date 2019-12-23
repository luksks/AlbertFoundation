<template>

    <div class="text-copy-primary bg-background-primary">
        <div class="mx-8 m-8  flex-wrap align-baseline items-center">
            <h1 class="text-3xl my-4">The structure of the website</h1>


            <div class="flex">
            </div>
            <div class="align-baseline  flex">
                <div class="bg-background-secondary rounded-lg justify-start w-full">

                    <p>Nuxt.js, vue.js</p>
                    <p>node.js, javascript</p>
                </div>
                <div class="sm:mx-24 mx-6 justify-end flex">
                    <picture>
                        <img
                                class="rounded-full bg-white border-solid  shadow-insethover:border-green-600 "
                                height="256"
                                width="256"
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
                                class="border-solid  shadow-inset rounded-full bg-white hover:border-green-600"
                                height="256"
                                width="256"
                                alt="My favorite french css framework ♥"
                                src="../assets/img/AboutWebsite/tailwind.png">
                    </picture>
                </div>
                <div class="bg-background-secondary rounded-lg justify-end w-full ">
                    <p>TailwindCSS</p>
                </div>
            </div>

            <div class="flex">
            </div>
            <div class="align-baseline  flex">
                <div class="bg-background-secondary rounded-lg justify-start w-full">
                    <p>Clever Cloud</p>
                </div>
                <div class="sm:mx-24 mx-6 justify-end flex">
                    <picture>
                        <img
                                class="border-solid rounded-full shadow-inset hover:border-green-600"
                                height="256"
                                width="256"
                                alt="The best Paas ever"
                                src="../assets/img/AboutWebsite/logo_clever_cloud.jpg">
                    </picture>
                </div>
            </div>

            <p>OVH</p>
            <p>Google Analytics</p>
            <div class="h-full w-full ">
            </div>
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
