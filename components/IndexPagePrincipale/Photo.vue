<template>

    <div class="flex flex-col items-center pt-8 animated fade-in ">

        <div class=" flex flex-col flex-wrap py-6 ">
            <div class="flex w-full flex-col justify-around items-center mx-auto text-center">
                <picture>
                    <img
                            class="rounded-full border-solid  shadow-inset w-64 h-64 hover:border-green-600"
                            height="256"
                            width="256"
                            alt="Young man (Albert Lanne) wearing a suite, nature in the background"
                            src="../../assets/img/indexImageProfil.jpg"
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

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhotoEtBouton"
    }
</script>

<style scoped>

</style>
