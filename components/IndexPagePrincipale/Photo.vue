<template>

    <div class="flex flex-col items-center pt-8 animated fade-in ">

        <div class=" flex flex-col flex-wrap py-6 ">
            <div class="flex w-full flex-col justify-around items-center mx-auto text-center">
                <div v-if="val === true" >
                    <picture>
                        <img
                                v-on:click="toggle"
                                class="rounded-full border-solid  shadow-inset w-64 h-64 hover:border-green-600"
                                height="256"
                                width="256"
                                alt="Me, Albert Lanne, cool showcase?"
                                src="../../assets/img/indexImageProfil.jpg">
                    </picture>
                </div>
                <div class="rounded-full border-solid  shadow-inset w-64 h-64 hover:border-green-600" v-else v-on:click="toggle">
                    <video autoplay muted loop id="myVideo">
                        <source src="https://video.twimg.com/tweet_video/EMKjC97WsAMc7Dn.mp4" height="256"
                                width="256" type="video/mp4" autostart="true"
                                alt="welcome to my website"
                                class="">
                    </video>
                </div>


                <!--                            <picture @click="$store.commit('localStorage/changetheme')" class="mx-2 mr-6 cursor-pointer"-->
                <!--                                     v-if="val === 'true'">-->
                <!--                                <img-->
                <!--                                        class=" h-8 w-8 fill-current fill-text-red-600 hover:text-green-600"-->
                <!--                                        src="../assets/img/logo_light_mod.svg"-->
                <!--                                        title="Switch for the light theme"-->
                <!--                                        alt="button light theme ">-->
                <!--                            </picture>-->
                <!--                            <picture @click="$store.commit('localStorage/changetheme')" class="mx-2 mr-6 cursor-pointer" v-else>-->
                <!--                                <img-->
                <!--                                        class="h-8 w-8  fill-current fill-text-red-600 hover:text-green-600  "-->
                <!--                                        src="../assets/img/logo_dark_mod.svg"-->
                <!--                                        alt="theme dark button"-->
                <!--                                        title=" dark for the theme">-->
                <!--                            </picture>-->


                <div class="mt-4">
                    <h1 class=" text-2xl md:text-3xl text-xl text-copy-primary hover:text-green-300">
                        Albert Lanne
                    </h1>
                    <h2 class="text-copy-secondary -mt-1 text-base md:text-xl">
                        Developer &bull; Student &bull; Network Technician
                    </h2>
                    <!--                    https://video.twimg.com/tweet_video/EMKjC97WsAMc7Dn.mp4-->
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PhotoEtBouton",
        data() {
            return {
                val: true
         }
        },
        methods: {
            toggle()
            {
                this.val = !this.val
            }
        },
    }
</script>

<style>

    /*shake la vidéo du chat */
    video:hover {
        animation: shake 0.3s;
        animation-iteration-count: infinite;
    }

    @keyframes shake {
        0% {
            transform: translate(2px, 2px) rotate(0deg);
        }
        10% {
            transform: translate(-1px, -2px) rotate(-1deg);
        }
        20% {
            transform: translate(-3px, 0px) rotate(1deg);
        }
        30% {
            transform: translate(3px, 2px) rotate(0deg);
        }
        40% {
            transform: translate(1px, -1px) rotate(1deg);
        }
        50% {
            transform: translate(-1px, 2px) rotate(-1deg);
        }
        60% {
            transform: translate(-3px, 1px) rotate(0deg);
        }
        70% {
            transform: translate(3px, 1px) rotate(-1deg);
        }
        80% {
            transform: translate(-1px, -1px) rotate(1deg);
        }
        90% {
            transform: translate(3px, 4px) rotate(0deg);
        }
        100% {
            transform: translate(1px, -2px) rotate(-1deg);
        }
    }
</style>
