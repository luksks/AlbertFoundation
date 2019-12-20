<template>
    <div class="bg-background-tertiary ">
        <div class="alert-banner">
            <label class="close cursor-pointer  items-center " title="close" for="banneralert">
                <input type="checkbox" class="hidden" id="banneralert">

                <div role="alert  ">
                    <div class=" mx-4 py-2">

                        <div class="bg-red-500 text-white font-bold rounded-t px-4 ">
                            INCOMING COOKIES:
                        </div>


                        <div class="border items-center justify-between flex border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-2 text-red-700">
                            <p>
                                Our website uses Google Analytics to analyze our traffic.<br> To learn how you can
                                control
                                Google's
                                use of your data and how you can opt out <a
                                    href="https://policies.google.com/technologies/partner-sites?hl="><i>click here</i></a>.
                            </p>
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
            </label>
        </div>

    </div>

</template>

<script>
    export default {
        name: "cookies_PopUp"
    }
</script>

<style>

    /*Banner open/load animation*/
    .alert-banner {
        -webkit-animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    /*Banner close animation*/
    .alert-banner input:checked ~ * {
        -webkit-animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    /*Footer open/load animation*/
    .alert-footer {
        -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    /*Footer close animation*/
    .alert-footer input:checked ~ * {
        -webkit-animation: slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
        animation: slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    /*Toast open/load animation*/
    .alert-toast {
        -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    /*Toast close animation*/
    .alert-toast input:checked ~ * {
        -webkit-animation: fade-out-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
        animation: fade-out-right 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    /* -------------------------------------------------------------
    * Animations generated using Animista * w: http://animista.net,
    * ---------------------------------------------------------- */

    @-webkit-keyframes slide-in-top {
        0% {
            -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
            opacity: 0
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
    }

    @keyframes slide-in-top {
        0% {
            -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
            opacity: 0
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
    }

    @-webkit-keyframes slide-out-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
        100% {
            -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
            opacity: 0
        }
    }

    @keyframes slide-out-top {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
        100% {
            -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
            opacity: 0
        }
    }

    @-webkit-keyframes slide-in-bottom {
        0% {
            -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
            opacity: 0
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
    }

    @keyframes slide-in-bottom {
        0% {
            -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
            opacity: 0
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
    }

    @-webkit-keyframes slide-out-bottom {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
        100% {
            -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
            opacity: 0
        }
    }

    @keyframes slide-out-bottom {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 1
        }
        100% {
            -webkit-transform: translateY(1000px);
            transform: translateY(1000px);
            opacity: 0
        }
    }

    @-webkit-keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
            opacity: 0
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1
        }
    }

    @keyframes slide-in-right {
        0% {
            -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
            opacity: 0
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1
        }
    }

    @-webkit-keyframes fade-out-right {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1
        }
        100% {
            -webkit-transform: translateX(50px);
            transform: translateX(50px);
            opacity: 0
        }
    }

    @keyframes fade-out-right {
        0% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 1
        }
        100% {
            -webkit-transform: translateX(50px);
            transform: translateX(50px);
            opacity: 0
        }
    }

</style>
