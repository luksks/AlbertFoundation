<template>

    <div class="flex text-copy-primary bg-background-primary">
        <div class=" mx-8 m-8">
            <h1 class="text-3xl my-4s">The structure of the website</h1>


            <div class="justify-start">
                <p>Nuxt.js, vue.js</p>
            </div>

            <div class="justify-end">
                <picture>
                    <img
                            class="border-solid  shadow-inset w-64 h-64 hover:border-green-600"
                            height="256"
                            width="256"
                            alt="My favorite french js framework ♥"
                            src="../assets/img/AboutWebsite/nuxt.png">
                </picture>
            </div>
            <p>node.js, javascript</p>
            <p>TailwindCSS</p>
            <p>Clever Cloud</p>
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
                title: "about page"
            };
        },
    }
</script>

<style scoped>

</style>
