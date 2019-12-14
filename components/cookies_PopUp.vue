<template>
    <div class="bg-background-tertiary">

        <div role=" alert ">
            <div class=" mx-4 py-2">

                <div class="bg-red-500 text-white font-bold rounded-t px-4 ">
                    INCOMING COOKIES:
                </div>


                <div class="border items-center justify-between flex border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-2 text-red-700">
                    <p>
                        Our website uses Google Analytics to analyze our traffic.<br> To learn how you can control
                        Google's
                        use of your data and how you can opt out <a
                            href="https://policies.google.com/technologies/partner-sites?hl="><i>click here</i></a>.</p>
                    <div class=" -my-2 flex  justify-end">

                        <div class="text-center text-red-700 p-2 bg-red-500 items-center leading-none lg:rounded-full flex lg:inline-flex"
                             role="alert">
                            <a class="cursor-pointer flex rounded-full bg-red-100 uppercase px-2 py-1 text-xs font-bold mr-3"
                               href="https://policies.google.com/technologies/partner-sites?hl=">TO CHANGE YOUR
                                SETTING</a>
                            <span class="text-white font-semibold mr-2 text-left flex-auto">or</span>
                            <span class="cursor-pointer flex rounded-full bg-red-100 uppercase px-2 py-1 text-xs font-bold mr-3">ACCEPT AND
                        CLOSE</span>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    </div>

</template>

<script>
    export default {
        name: "cookies_PopUp"
    }
</script>

<style scoped>

</style>
