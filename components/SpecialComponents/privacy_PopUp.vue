<template>
    <div class="bg-background-tertiary">

        <div role=" alert ">
            <div class=" mx-4 py-2">

                <div class="bg-red-500 text-white font-bold rounded-t px-4 ">
                    PRIVACY POLICY:
                </div>


                <div class="border items-center justify-between flex border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-2 text-red-700">
                    <p>
                        Please read our Privacy Policy before accepting it.
                    </p>

                    <div class="  flex  justify-end">

                        <div class="text-center text-red-700 p-2 bg-red-500 items-center leading-none lg:rounded-full flex lg:inline-flex"
                             role="alert">
                            <nuxt-link to="/privacy">
                            <a class="cursor-pointer flex rounded-full bg-red-100 uppercase px-2 py-1 text-xs font-bold mr-3"
                               href="https://policies.google.com/technologies/partner-sites?hl=">READ OUR PRIVACY POLICY </a></nuxt-link>
                            <span class="text-white font-semibold mr-2 text-left flex-auto"> or</span>
                            <span class="cursor-pointer flex rounded-full bg-red-100 uppercase px-2 py-1 text-xs font-bold mr-3">ACCEPT AND
                                CLOSE
                            </span>

                        </div>
                    </div>

                </div>

            </div>


        </div>
    </div>

</template>

<script>
    export default {
        name: "privacy_PopUp"
    }
</script>

<style scoped>

</style>
