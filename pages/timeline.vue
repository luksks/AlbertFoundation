<template>
    <div class="font-sans ">
        <div class=" max-w-lg mx-auto my-8 ">
            <div class=" text-center">
                <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                     role="alert">
                    <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                    <span class="font-semibold mr-2 text-left flex-auto">The (under construction) timeline of my life !</span>
                    <svg class="fill-current opacity-75 h-4 w-4"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20">
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/>
                    </svg>
                </div>
            </div>
        </div>


        <!--EPITECH-->
        <div class="bg-background-tertiary max-w-lg mx-auto my-8 border rounded-t-lg border-border-color-primary">
            <a class="block  no-underline text-copy-primary">
                <img src="../assets/img/timeline/epitech-paris.jpg"
                     alt="My diploma" class="rounded-t-lg ">
                <div class="p-4">
                    <h2 class="font-medium text-lg mb-2">EPITECH Paris -
                        European Institute of Technology</h2>
                    <p class="text-copy-primary">Master of Science (MS)-
                        Transformation Digitale Retail Tech </p>
                    <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                            <rect x="3" y="4" width="18" height="18" rx="2"
                                  ry="2 "></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span class="text-copy-primary">7/20/2020 -7/20/2023 <i>(currently)</i></span>
                    </div>
                    <p class="leading-normal mb-4 text-copy-secondary">
                        Programming - Network management
                    </p>
                    <div class="pl-2 pr-2 border-t border-border-color-primary mx-6">
                        <p class="font-medium text-lg text-copy-primary mt-4">
                            Degree of Web and Mobile Development Manager.</p>
                        <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                                <rect x="3" y="4" width="18" height="18" rx="2"
                                      ry="2 "></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span class="text-copy-primary">2021</span>
                        </div>
                        <p class="leading-normal mb-4 text-copy-secondary">
                            Level II (Fr) and Level 6 (Eu) Professional
                            Certification registered with the RNCP
                        </p>

                    </div>
                </div>
            </a>

            <footer class=" text-sm flex pb-6">
                <div class="w-32 ">
                </div>
                <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                    <!--                    Counter text                    -->

                    <p class="text-blue-500 items-center flex text-2xl"> {{
                        counter2 }}</p>
                    <!--                    Counter text                    -->
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-on:click="counter2 += 1" v-if="counter2 === ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-copy-primary">Liked</p>
                    </a>
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-blue-500">Liked !</p>
                    </a>
                    <!--                    Reply                    -->
                    <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span class="text-copy-primary">Reply</span>
                    </a>
                </div>
            </footer>

        </div>
        <!--        STANDARD ECOM COM-->
        <div class="bg-background-tertiary max-w-lg mx-auto my-8 border border-border-color-primary overflow-hidden w-full">
            <div class="flex flex-wrap no-underline text-copy-primary h-32 overflow-hidden">
                <img src="../assets/img/timeline/logo-standardecomcompany.jpg"
                     alt="My diploma" class="bg-center  object-top"
                     style="object-fit: cover;">
            </div>

            <div class="p-4 text-copy-primary">
                <h2 class="font-medium text-lg mb-2">CEO Founder - Standard
                    E-com Company</h2>
                <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2"
                              ry="2 "></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span class="text-copy-primary">20/05/2020 - now <i></i></span>
                </div>
                <p class="leading-normal mb-4 text-copy-secondary">
                <p>My company on e-market. I work on 3 steps. Programming to
                    improve webdesign, marketing for the communication, and
                    webdesign with

                    ainsi que les technologies de
                    rendu 3D pour les publicités et vidéo commercial sur
                    facebook et youtube ads.</p>
            </div>
            <footer class=" text-sm flex pb-6">
                <div class="w-32 ">
                </div>
                <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                    <!--                    Counter text                    -->

                    <p class="text-blue-500 items-center flex text-2xl"> {{
                        counter7 }}</p>
                    <!--                    Counter text                    -->
                    <a class=" block no-underline text-blue flex px-4 py-2 items-center"
                       v-on:click="counter7 += 1" v-if="counter7 === ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class=" feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-copy-primary">Liked</p>
                    </a>
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-blue-500">Liked !</p>
                    </a>
                    <!--                    Reply                    -->
                    <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="cursor-pointer feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span class="text-copy-primary">Reply</span>
                    </a>
                </div>
            </footer>
        </div>

        <!--        Higher  technician    -->
        <div class="bg-background-tertiary max-w-lg mx-auto my-8 border border-border-color-primary overflow-hidden  w-full">
            <div class="flex flex-wrap no-underline text-copy-primary h-64 overflow-hidden">
                <div class="w-3/4 h-full">
                    <img class="block pr-px w-full h-full"
                         src="../assets/img/timeline/BTS_main_illustration.jpg"
                         alt=""
                         style="object-fit: cover;">
                </div>
                <div class="w-1/4 h-full">
                    <div class="bg-pink-200 mb-px h-32">
                        <img class="block w-full h-full"
                             src="../assets/img/timeline/BTS_second_illustration.jpg"
                             alt=""
                             style="object-fit: cover;">
                    </div>
                    <div class="bg-pink-200 h-32">
                        <img class="block w-full h-full"
                             src="../assets/img/timeline/BTS_tertiary_illustration.jpg"
                             alt=""
                             style="object-fit: cover;">
                    </div>
                </div>
            </div>
            <div class="p-4 text-copy-primary">
                <h2 class="font-medium text-lg mb-2">Second year of Higher
                    Technical Certificate (BTS):
                    Electronic system programming option and Network</h2>
                <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2"
                              ry="2 "></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span class="text-copy-primary">2018-2020</span>
                </div>
                <p class="leading-normal mb-4 text-copy-secondary">
                    At Hight School Paul Cornu (14100) Lisieux. IT science
                    (algorithmic) and math/physics. I
                    also have one internship at Emerya thailande.</p>

                <div class="pl-2 pr-2 border-t border-border-color-primary mx-6">
                    <p class="font-medium text-lg text-copy-primary mt-4">
                        Professional project of the
                        diploma.</p>
                    <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                            <rect x="3" y="4" width="18" height="18" rx="2"
                                  ry="2 "></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span class="text-copy-primary">13/01/2020 - 13/05/2020</span>
                    </div>
                    <p class="leading-normal mb-4 text-copy-secondary"> Creation
                        of a intern gestion website
                        for a compagnie.
                        The system is provided with a database, VPN. My work is
                        on the site design. <br>
                        <br>
                    </p>
                    <a class="text-s"
                       href="https://github.com/AlbertLanne/ProductionMonitoringMysql">https://github.com/AlbertLanne/ProductionMonitoringMysql</a>
                </div>
            </div>

            <footer class=" text-sm flex pb-6">
                <div class="w-32 ">
                </div>
                <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                    <!--                    Counter text                    -->
                    <!--                    <p class="text-blue-500 items-center flex text-2xl"> {{ counter8 }}</p>-->
                    <!--                    Counter text                    -->
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-on:click="counter8 += 1" v-if="counter8 === ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-copy-primary">Liked</p>
                    </a>
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-blue-500">Liked !</p>
                    </a>
                    <!--                    Reply                    -->
                    <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center"
                       v-on:click="isNinja = !isNinja">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span class="text-copy-primary">Reply</span>
                    </a>
                </div>
            </footer>
            <!--            ==============================   PROTOTYPE COMMENTAIRE SERVEUR =========================================-->
            <p v-if="error"> {{error}}</p>
            <div class="posts-container">
                <div class=" max-w-lg mx-auto "
                     v-for="(product, index) in products" v-bind:item="product"
                     v-bind:index="index"
                     v-bind:key="product._id"
                     v-on:dblclick="removeProducts(product._id)">
                    <div class="bg-background-tertiary p-4 flex border-t border-border-color-primary">
                        <div class="w-1/5 pr-4">
                            <svg class="icon" viewBox="0 0 1025 1024"
                                 xmlns="http://www.w3.org/2000/svg"
                                 width="90.195" height="90">
                                <defs>
                                    <style/>
                                </defs>
                                <path d="M512.656-.057A511.971 511.971 0 00.628 511.97a512.029 512.029 0 101024.057 0A511.971 511.971 0 00512.656-.057zm0 42.678c258.81 0 469.35 210.54 469.35 469.35a467.41 467.41 0 01-108.465 299.777c-46.844-19.57-157.306-57.912-225.66-78.11-5.82-1.826-6.733-2.112-6.733-26.418 0-20.027 8.216-40.225 16.261-57.285 8.73-18.543 19.057-49.754 22.766-77.769 10.385-12.039 24.478-35.831 33.55-81.077 7.988-39.883 4.279-54.433-1.027-68.07-.514-1.426-1.142-2.852-1.54-4.278-1.998-9.358.74-57.97 7.588-95.628 4.735-25.904-1.199-80.907-36.802-126.438-22.538-28.814-65.558-64.075-144.183-69.039l-43.135.057c-77.312 4.907-120.39 40.168-142.927 68.982-35.604 45.531-41.538 100.534-36.802 126.381 6.847 37.715 9.586 86.327 7.589 95.513a34.006 34.006 0 01-1.541 4.45c-5.25 13.637-9.015 28.187-1.027 68.07 9.072 45.246 23.165 69.038 33.606 81.077 3.652 28.015 13.98 59.226 22.766 77.769 6.334 13.58 9.358 32.066 9.358 58.198 0 24.25-.913 24.592-6.39 26.303-70.694 20.826-183.268 61.565-225.204 79.937A467.296 467.296 0 0143.249 511.971c0-258.81 210.597-469.35 469.407-469.35zM184.978 847.637a2711.058 2711.058 0 01206.775-72.405c36.573-11.526 36.573-42.336 36.573-67.099 0-20.54-1.426-50.78-13.408-76.342a242.15 242.15 0 01-19.799-71.093 20.997 20.997 0 00-7.19-14.207c-6.047-5.306-18.314-24.706-26.188-63.79-6.162-30.925-3.538-37.714-1.027-44.276 1.084-2.796 2.11-5.477 2.967-8.615 5.135-18.715-.571-80.28-6.79-114.4-2.682-14.834.685-57 28.471-92.489 24.877-31.78 62.535-49.525 110.576-52.606l40.454-.057c49.354 3.138 87.012 20.883 111.945 52.663 27.73 35.49 31.154 77.655 28.415 92.547-6.162 34.063-11.925 95.627-6.79 114.284.856 3.196 1.883 5.877 2.967 8.673 2.51 6.562 5.135 13.351-1.027 44.276-7.817 39.084-20.141 58.484-26.19 63.79a21.51 21.51 0 00-7.245 14.207c-1.997 23.507-11.412 53.52-19.685 71.093-9.471 20.084-20.312 46.844-20.312 75.43 0 24.819 0 55.63 36.973 67.212a3148.4 3148.4 0 01207.287 70.865 467.98 467.98 0 01-330.074 136.08 467.924 467.924 0 01-327.678-133.74z"
                                      fill="#fff"/>
                            </svg>
                        </div>
                        <div class="p-2 flex-grow w-4/5">
                            <div>
                                <a href="#">
                                    <span class="font-medium text-copy-primary">Users</span>
                                    <span class="font-normal text-copy-secondary">@internaute</span>
                                </a>
                                <div class="text-xs text-copy-secondary flex items-center my-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         width="24" height="24"
                                         viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2"
                                         stroke-linecap="round"
                                         stroke-linejoin="round"
                                         class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                                        <rect x="3" y="4" width="18" height="18"
                                              rx="2" ry="2 "></rect>
                                        <line x1="16" y1="2" x2="16"
                                              y2="6"></line>
                                        <line x1="8" y1="2" x2="8"
                                              y2="6"></line>
                                        <line x1="3" y1="10" x2="21"
                                              y2="10"></line>
                                    </svg>
                                    <span class="text-copy-primary">{{product.createdAt}}</span>
                                </div>
                            </div>
                            <div class="py-4 leading-normal items-stretch text-copy-primary">
                                {{product.text}}
                            </div>

                        </div>


                    </div>

                    <footer class=" text-sm flex pb-6">
                        <div class="w-32 ">
                        </div>
                        <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                            <!--                    Counter text                    -->
                            <!--                    <p class="text-blue-500 items-center flex text-2xl"> {{ counter8 }}</p>-->
                            <!--                    Counter text                    -->
                            <a class="block no-underline text-blue flex px-4 py-2 items-center"
                               v-on:click="counter8 += 1"
                               v-if="counter8 === ''">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24"
                                     viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round"
                                     class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                </svg>
                                <p class="text-copy-primary">Liked</p>
                            </a>
                            <a class="block no-underline text-blue flex px-4 py-2 items-center"
                               v-else>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24"
                                     viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round"
                                     class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                </svg>
                                <p class="text-blue-500">Liked !</p>
                            </a>
                            <!--                    Reply                    -->
                            <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center"
                               v-on:click="isNinja = !isNinja">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24"
                                     viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round"
                                     class="feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                                <span class="text-copy-primary">Reply</span>
                            </a>
                        </div>
                    </footer>

                </div>
            </div>


            <!--            ==============================   PROTOTYPE COMMENTAIRE SERVEUR =========================================-->
            <!-- REPLY FORM FOR ANNOUNCE-->

            <div class="bg-grey-lighter p-4 pl-8 text-copy-primary"
                 v-show="!isNinja">
                <textarea class="px-2 w-full border border-blue rounded hover:bg-background-primary bg-background-tertiary italic font-mono
                                 focus:outline-none focus:shadow-outline"
                          laceholder="Create a post..." id="create-post"
                          v-model="text"></textarea>
                <span class="flex justify-between items-center mt-2">
                    <button class=" text-blue leading-none rounded border border-transparent hover:border-blue">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round" stroke-linejoin="round"
                             class="feather feather-image stroke-current text-copy-primary focus:outline-none focus:shadow-outline">
                            <rect x="3" y="3" width="18" height="18" rx="2"
                                  ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                    </button>
                    <button class="py-2 px-4 text-copy-primary bg-background-secondary border border-border-color-primary rounded-full
                                   focus:outline-none focus:shadow-outline"
                            v-on:click="createProducts">
                        Reply
                    </button>
                </span>
            </div>


        </div>


        <!--        internship Emerya    -->

        <div class="bg-background-tertiary max-w-lg mx-auto my-8 border border-border-color-primary overflow-hidden w-full">
            <div class="flex flex-wrap no-underline text-copy-primary h-32 overflow-hidden">
                <div class="w-1/2 h-full">
                    <a href="https://jdmmedical.fr/">
                        <img class="block pr-px w-full h-full"
                             src="../assets/img/timeline/EMERYA_main_illustration.JPG"
                             alt="Project of website during my internship"
                             style="object-fit: cover;">
                    </a>
                </div>
                <div class="w-1/2 h-full">
                    <div class="bg-pink-200 mb-px h-32">
                        <img class="block w-full h-full"
                             src="../assets/img/timeline/EMERYA_second_illustration.JPG"
                             alt="Other of website during my internship"
                             style="object-fit: cover;">
                    </div>
                </div>
            </div>

            <div class="p-4 text-copy-primary">
                <h2 class="font-medium text-lg mb-2">Internship - EMERYA
                    Thailande, (๘๓๑๐๐, ประเทศไทย)</h2>
                <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2"
                              ry="2 "></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span class="text-copy-primary">20/05/2019 - 28/07/2019 <i>(7 weeks)</i></span>
                </div>
                <p class="leading-normal mb-4 text-copy-secondary">
                    Webmastering full stack MEVN, especially the creation of
                    e-market. Works in
                    depth on technologies VueJS, NuxtJS, TailWindCSS, and REST
                    API
                </p>
            </div>
            <footer class=" text-sm flex pb-6">
                <div class="w-32 ">
                </div>
                <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                    <!--                    Counter text                    -->

                    <p class="text-blue-500 items-center flex text-2xl"> {{
                        counter7 }}</p>
                    <!--                    Counter text                    -->
                    <a class=" block no-underline text-blue flex px-4 py-2 items-center"
                       v-on:click="counter7 += 1" v-if="counter7 === ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class=" feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-copy-primary">Liked</p>
                    </a>
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-blue-500">Liked !</p>
                    </a>
                    <!--                    Reply                    -->
                    <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="cursor-pointer feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span class="text-copy-primary">Reply</span>
                    </a>
                </div>
            </footer>
        </div>

        <!--        Baccalaureate    -->
        <div class="bg-background-tertiary max-w-lg mx-auto my-8 border border-border-color-primary overflow-hidden w-full">
            <div class="flex flex-wrap no-underline text-copy-primary h-64 overflow-hidden">
                <div class="w-3/4 h-full">
                    <img class="block pr-px w-full h-full"
                         src="../assets/img/timeline/BAC_main_illustration.jpg"
                         alt=""
                         style="object-fit: cover;">
                </div>
                <div class="w-1/4 h-full">
                    <div class="bg-pink-200 mb-px h-32">
                        <img class="block w-full h-full"
                             src="../assets/img/timeline/BAC_second_illustration.jpg"
                             alt=""
                             style="object-fit: cover;">
                    </div>
                    <div class="bg-pink-200 h-32">
                        <img class="block w-full h-full object-left"
                             src="../assets/img/timeline/BAC_tertiary_illustration.jpg"
                             alt=""
                             style="object-fit: cover;">
                    </div>
                </div>
            </div>
            <div class="p-4 text-copy-primary">
                <h2 class="font-medium text-lg mb-2">Baccalaureate in Electronic
                    and Digital System </h2>

                <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2"
                              ry="2 "></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span class="text-copy-primary">5/7/2018 <i>(obtained with honors)</i></span>
                </div>
                <p class="leading-normal mb-4 text-copy-secondary">
                    In partnership with the French Navy Embedded Industrial
                    Electronics Specialization
                    Hight School Galilée, Paris 13.
                </p>
            </div>
            <footer class=" text-sm flex pb-6">
                <div class="w-32 ">
                </div>
                <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                    <!--                    Counter text                    -->

                    <p class="text-blue-500 items-center flex text-2xl"> {{
                        counter6 }}</p>
                    <!--                    Counter text                    -->
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-on:click="counter6 += 1" v-if="counter6 === ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-copy-primary">Liked</p>
                    </a>
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-blue-500">Liked !</p>
                    </a>
                    <!--                    Reply                    -->
                    <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span class="text-copy-primary">Reply</span>
                    </a>
                </div>
            </footer>
        </div>
        <!--        Internship Navy    -->
        <div class="bg-background-tertiary max-w-lg mx-auto my-8 border border-border-color-primary overflow-hidden w-full">

            <div class="flex flex-wrap no-underline text-copy-primary h-64 overflow-hidden">
                <div class="w-3/4 h-full">
                    <img class="block pr-px w-full h-full"
                         src="../assets/img/timeline/Navy_main_illustration.jpg"
                         alt=""
                         style="object-fit: cover;">
                </div>
                <div class="w-1/4 h-full">
                    <div class="bg-pink-200 mb-px h-32">
                        <img class="block w-full h-full object-left"
                             src="../assets/img/timeline/Navy_second_illustration.jpg"
                             alt=""
                             style="object-fit: cover; ">
                    </div>
                    <div class="bg-pink-200 h-32">
                        <img class="block w-full h-full object-right"
                             src="../assets/img/timeline/Navy_tertiary_illustration.jpg"
                             alt=""
                             style="object-fit: cover;">
                    </div>
                </div>
            </div>


            <div class="p-4 text-copy-primary">
                <h2 class="font-medium text-lg mb-2">Internship - MARINE
                    NATIONALE, Saint Mandrier
                    (83430)</h2>
                <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2"
                              ry="2 "></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span class="text-copy-primary">??/??/???? <i>(8 weeks)</i></span>
                </div>
                <p class="leading-normal mb-4 text-copy-secondary text-justify">
                    Training in SITEL (specialist in information and
                    telecommunication systems of
                    the French Navy). Followed by an assignment on the
                    Anti-Aircraft Frigate “Le Cassard”
                    as a network technician. I'm on the middle on the main
                    picture, the picture of right are
                    the Cassard.
                </p>
            </div>
            <footer class=" text-sm flex pb-6">
                <div class="w-32 ">
                </div>
                <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                    <!--                    Counter text                    -->

                    <p class="text-blue-500 items-center flex text-2xl"> {{
                        counter5 }}</p>
                    <!--                    Counter text                    -->
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-on:click="counter5 += 1" v-if="counter5 === ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-copy-primary">Liked</p>
                    </a>
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-blue-500">Liked !</p>
                    </a>
                    <!--                    Reply                    -->
                    <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span class="text-copy-primary">Reply</span>
                    </a>
                </div>
            </footer>
        </div>

        <!--        Astone    -->
        <div class="bg-background-tertiary max-w-lg mx-auto my-8 border border-border-color-primary overflow-hidden w-full">
            <div class="p-4 text-copy-primary">
                <h2 class="font-medium text-lg mb-2">Internship - Astone
                    Technology </h2>
                <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2"
                              ry="2 "></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span class="text-copy-primary">?/?/? - ?/?/? <i>(6 weeks)</i></span>
                </div>
                <p class="leading-normal mb-4 text-copy-secondary">
                    Works on the embedded equipment.
                </p>
            </div>
            <footer class=" text-sm flex pb-6">
                <div class="w-32 ">
                </div>
                <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                    <!--                    Counter text                    -->

                    <p class="text-blue-500 items-center flex text-2xl"> {{
                        counter4 }}</p>
                    <!--                    Counter text                    -->
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-on:click="counter4 += 1" v-if="counter4 === ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-copy-primary">Liked</p>
                    </a>
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-blue-500">Liked !</p>
                    </a>
                    <!--                    Reply                    -->
                    <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span class="text-copy-primary">Reply</span>
                    </a>
                </div>
            </footer>
        </div>
        <!--        Affix    -->
        <div class="bg-background-tertiary max-w-lg mx-auto my-8 border border-border-color-primary overflow-hidden w-full">
            <div class="p-4 text-copy-primary">
                <h2 class="font-medium text-lg mb-2">Internship - Affix
                    Formation</h2>
                <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24"
                         height="24" viewBox="0 0 24 24"
                         fill="none"
                         stroke="currentColor" stroke-width="2"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                        <rect x="3" y="4" width="18" height="18" rx="2"
                              ry="2 "></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span class="text-copy-primary">?/?/? - ?/?/? <i>(6 weeks)</i></span>
                </div>
                <p class="leading-normal mb-4 text-copy-secondary">
                    Installation and configuration of Ethernet networks in
                    companies
                </p>
            </div>
            <footer class=" text-sm flex pb-6">
                <div class="w-32 ">
                </div>
                <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                    <!--                    Counter text                    -->

                    <p class="text-blue-500 items-center flex text-2xl"> {{
                        counter3 }}</p>
                    <!--                    Counter text                    -->
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-on:click="counter3 += 1" v-if="counter3 === ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-copy-primary">Liked</p>
                    </a>
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-blue-500">Liked !</p>
                    </a>
                    <!--                    Reply                    -->
                    <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span class="text-copy-primary">Reply</span>
                    </a>
                </div>
            </footer>
        </div>

        <!--     National diploma -->
        <div class="bg-background-tertiary max-w-lg mx-auto my-8 border border-border-color-primary">
            <a class="block  no-underline text-copy-primary">
                <img src="../assets/img/timeline/national_college_diploma.jpg"
                     alt="My diploma">
                <div class="p-4">
                    <h2 class="font-medium text-lg mb-2">French National
                        Diploma </h2>
                    <div class="text-xs text-copy-secondary flex items-center my-1 pl-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                            <rect x="3" y="4" width="18" height="18" rx="2"
                                  ry="2 "></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span class="text-copy-primary">6/7/2015 <i>(obtained with honors)</i></span>
                    </div>
                    <p class="leading-normal mb-4 text-copy-secondary">
                        At College Notre-Dame Lisieux. I had already mounted my
                        computers. During this
                        period I also
                        do a little internship at Ava information a computer
                        repairman. I was 15 years old.
                    </p>
                </div>
            </a>

            <footer class=" text-sm flex pb-6">
                <div class="w-32 ">
                </div>
                <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                    <!--                    Counter text                    -->

                    <p class="text-blue-500 items-center flex text-2xl"> {{
                        counter2 }}</p>
                    <!--                    Counter text                    -->
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-on:click="counter2 += 1" v-if="counter2 === ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-copy-primary">Liked</p>
                    </a>
                    <a class="block no-underline text-blue flex px-4 py-2 items-center"
                       v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                        </svg>
                        <p class="text-blue-500">Liked !</p>
                    </a>
                    <!--                    Reply                    -->
                    <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24"
                             height="24" viewBox="0 0 24 24"
                             fill="none"
                             stroke="currentColor" stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round"
                             class="feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        <span class="text-copy-primary">Reply</span>
                    </a>
                </div>
            </footer>

        </div>
        <!--     Born -->
        <div class=" max-w-lg mx-auto my-8 border border-border-color-primary">
            <div class="bg-background-tertiary p-4 flex border-t border-border-color-primary">

                <div class="w-1/5 pr-4">
                    <img class="rounded rounded-full mr-4"
                         src="../assets/img/index/ImageProfil.jpg">
                </div>
                <div class="p-2 flex-grow w-4/5">
                    <div>
                        <a href="#">
                            <span class="font-medium text-copy-primary">Albert Lanne</span>
                            <span class="font-normal text-copy-secondary">@AlbertLanne</span>
                        </a>
                        <div class="text-xs text-copy-secondary flex items-center my-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                 height="24"
                                 viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round"
                                 stroke-linejoin="round"
                                 class="h-4 w-4 mr-1 feather feather-calendar stroke-current text-copy-primary">
                                <rect x="3" y="4" width="18" height="18" rx="2"
                                      ry="2 "></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                            <span class="text-copy-primary">13/11/1999</span>
                        </div>
                    </div>
                    <div class="py-4 leading-normal items-stretch text-copy-primary">
                        Thank's !<a class="no-underline text-blue-300" href="#">@my_mom</a>
                        I was born
                        🎉🎇🎉✨
                    </div>
                    <footer class=" text-sm flex pb-6">
                        <div class="w-32 ">
                        </div>
                        <div class="w-4/5 flex mr-6 border-t border-border-color-primary">
                            <!--                    Counter text                    -->

                            <p class="text-blue-500 items-center flex text-2xl">
                                {{ counter1 }}</p>
                            <!--                    Counter text                    -->
                            <a class="block no-underline text-blue flex px-4 py-2 items-center"
                               v-on:click="counter1 += 1"
                               v-if="counter1 === ''">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24"
                                     viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round"
                                     class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-copy-primary">
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                </svg>
                                <p class="text-copy-primary">Liked</p>
                            </a>
                            <a class="block no-underline text-blue flex px-4 py-2 items-center"
                               v-else>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24"
                                     viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round"
                                     class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current text-blue-500">
                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                </svg>
                                <p class="text-blue-500">Liked !</p>
                            </a>
                            <!--                    Reply                    -->
                            <a class="block no-underline text-copy-primary flex mr-4 px-4 py-2 items-center ">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24"
                                     viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2"
                                     stroke-linecap="round"
                                     stroke-linejoin="round"
                                     class="feather feather-message-circle h-6 w-6 mr-1 stroke-current text-copy-primary ">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                                <span class="text-copy-primary">Reply</span>
                            </a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>


        <!--
                <div class="bg-white max-w-lg mx-auto my-8 border border-border-color-primary  overflow-hidden w-full">
                    <div class="flex flex-wrap no-underline text-black h-64 overflow-hidden">
                        <div class="w-3/4 h-full">
                            <img class="block pr-px w-full h-full" src="https://pbs.twimg.com/media/DRKabGUW0AA4yzH.jpg:large" alt=""
                                 style="object-fit: cover;">
                        </div>
                        <div class="w-1/4 h-full">
                            <div class="bg-pink-200 mb-px h-32">
                                <img class="block w-full h-full" src="https://pbs.twimg.com/media/DRKabdIX0AAN-Pa.jpg" alt=""
                                     style="object-fit: cover;">
                            </div>
                            <div class="bg-pink-200 h-32">
                                <img class="block w-full h-full" src="https://pbs.twimg.com/media/DRKacEZWkAAg0-l.jpg" alt=""
                                     style="object-fit: cover;">
                            </div>
                        </div>
                    </div>
                    <div class="flex pt-4 px-4">
                        <div class="w-16 mr-2">
                            <img class="p-2 rounded rounded-full"
                                 src="https://scontent-frt3-1.cdninstagram.com/t51.2885-19/s150x150/22638783_1031626323645160_6412994168498421760_n.jpg">
                        </div>
                        <div class="px-2 pt-2 flex-grow">
                            <header>
                                <a href="#" class="text-black no-underline">
                                    <span class="font-medium">Rathes Sachchithananthan</span>
                                    <span class="font-normal text-grey">@rathes</span>
                                </a>
                                <div class="text-xs text-grey flex items-center my-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="h-4 w-4 mr-1 feather feather-calendar">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>2 hours ago</span>
                                </div>
                            </header>
                            <article class="py-4 text-grey-darkest">
                                Lorem ipsum sit dolor et amet et cetera og quandum morales.
                            </article>
                            <footer class="border-t border-border-color-primary text-sm flex">
                                <a href="#" class="block no-underline text-blue flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                    <span>Liked</span>
                                </a>
                                <a href="#" class="block no-underline text-black flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-message-circle h-6 w-6 mr-1">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <span>Reply</span>
                                </a>
                            </footer>
                        </div>
                    </div>
                </div>
                <div class="bg-white max-w-lg mx-auto my-8 border border-border-color-primary">
                    <div class="flex pt-4 px-4">
                        <div class="w-16 mr-2">
                            <img class="p-2 rounded rounded-full"
                                 src="https://scontent-frt3-1.cdninstagram.com/t51.2885-19/s150x150/22638783_1031626323645160_6412994168498421760_n.jpg">
                        </div>
                        <div class="px-2 pt-2 flex-grow">
                            <header>
                                <a href="#" class="text-black no-underline">
                                    <span class="font-medium">Rathes Sachchithananthan</span>
                                    <span class="font-normal text-grey">@rathes</span>
                                </a>
                                <div class="text-xs text-grey flex items-center my-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="h-4 w-4 mr-1 feather feather-calendar">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>2 hours ago</span>
                                </div>
                            </header>
                            <article class="py-4 text-grey-darkest">
                                Lorem ipsum sit dolor et amet et cetera og quandum morales.
                            </article>
                            <footer class="border-t border-gray-100 text-sm flex">
                                <a href="#" class="block no-underline text-black flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-thumbs-up h-6 w-6 mr-1">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                    <span>Like</span>
                                </a>
                                <a href="#" class="block no-underline text-black flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-message-circle h-6 w-6 mr-1">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <span>Reply</span>
                                </a>
                            </footer>
                        </div>
                    </div>
                    <div class="bg-grey-lightest p-4 pl-8 flex border-t border-gray-100">
                        <div class="w-12 mr-2 flex-no-shrink">
                            <img class="p-2 rounded rounded-full"
                                 src="https://scontent-frt3-1.cdninstagram.com/t51.2885-19/s150x150/22638783_1031626323645160_6412994168498421760_n.jpg">
                        </div>
                        <div class="p-2 flex-grow">
                            <header>
                                <a href="#" class="text-black no-underline">
                                    <span class="font-medium">Max Mustermann</span>
                                    <span class="font-normal text-grey">@max_the_great</span>
                                </a>
                                <div class="text-xs text-grey flex items-center my-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="h-4 w-4 mr-1 feather feather-calendar">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>A few minutes ago</span>
                                </div>
                            </header>
                            <article class="py-4 text-grey-darkest">
                                Lorem ipsum no lo se dolores ametandum come
                            </article>
                            <footer class="border-t border-gray-100 text-sm flex">
                                <a href="#" class="block no-underline text-black flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-thumbs-up h-6 w-6 mr-1">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                    <span>Like</span>
                                </a>
                                <a href="#" class="block no-underline text-black flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-message-circle h-6 w-6 mr-1">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <span>Reply</span>
                                </a>
                            </footer>
                        </div>
                    </div>
                    <div class="bg-grey-lightest p-4 pl-8 flex border-t border-gray-100">
                        <div class="w-12 mr-2 flex-no-shrink">
                            <img class="p-2 rounded rounded-full"
                                 src="https://scontent-frt3-1.cdninstagram.com/t51.2885-19/s150x150/22638783_1031626323645160_6412994168498421760_n.jpg">
                        </div>
                        <div class="p-2 flex-grow">
                            <header>
                                <a href="#" class="text-black no-underline">
                                    <span class="font-medium">Moritz Mustermann</span>
                                    <span class="font-normal text-grey">@mo</span>
                                </a>
                                <div class="text-xs text-grey flex items-center my-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="h-4 w-4 mr-1 feather feather-calendar">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>Just now</span>
                                </div>
                            </header>
                            <article class="py-4 text-grey-darkest leading-normal">
                                <a class="no-underline text-blue" href="#">@max_the_great</a> Lorem ipsum no lo se dolores ametandum no come,
                                astare pero canime perferme
                            </article>
                            <footer class="border-t border-gray-100 text-sm flex">
                                <a href="#" class="block no-underline text-black flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-thumbs-up h-6 w-6 mr-1">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                    <span>Like</span>
                                </a>
                                <a href="#" class="block no-underline text-black flex mr-4 px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-message-circle h-6 w-6 mr-1">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <span>Reply</span>
                                </a>
                            </footer>
                        </div>
                    </div>
                    <div class="bg-grey-lighter p-4 pl-8">
                        <textarea class="w-full border border-blue rounded"></textarea>
                        <div class="flex justify-between items-center mt-2">
                            <button class="p-2 text-blue leading-none rounded border border-transparent hover:border-blue">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                     class="feather feather-image">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                    <polyline points="21 15 16 10 5 21"></polyline>
                                </svg>
                            </button>
                            <button class="py-2 px-4 bg-white border border-blue rounded rounded-full
                  hover:bg-blue hover:text-white">
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-white max-w-lg mx-auto my-8 border border-border-color-primary">
                    <div class="flex pt-4 px-4">
                        <div class="w-16 mr-2">
                            <img class="p-2 rounded rounded-full"
                                 src="https://scontent-frt3-1.cdninstagram.com/t51.2885-19/s150x150/22638783_1031626323645160_6412994168498421760_n.jpg">
                        </div>
                        <div class="px-2 pt-2 flex-grow">
                            <header>
                                <a href="#" class="text-black no-underline">
                                    <span class="font-medium">Rathes Sachchithananthan</span>
                                    <span class="font-normal text-grey">@rathes</span>
                                </a>
                                <div class="text-xs text-grey flex items-center my-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="h-4 w-4 mr-1 feather feather-calendar">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>2 hours ago</span>
                                </div>
                            </header>
                            <article class="py-4 text-grey-darkest">
                                Lorem ipsum sit dolor et amet et cetera og quandum morales.
                            </article>
                            <footer class="border-t border-gray-100 text-sm flex">
                                <a href="#" class="block no-underline text-blue flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                    <span>Liked</span>
                                </a>
                                <a href="#" class="block no-underline text-black flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-message-circle h-6 w-6 mr-1">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <span>Reply</span>
                                </a>
                            </footer>
                        </div>
                    </div>
                    <div class="bg-grey-lightest p-4 pl-8 flex border-t border-gray-100">
                        <div class="w-12 mr-2 flex-no-shrink">
                            <img class="p-2 rounded rounded-full"
                                 src="https://scontent-frt3-1.cdninstagram.com/t51.2885-19/s150x150/22638783_1031626323645160_6412994168498421760_n.jpg">
                        </div>
                        <div class="p-2 flex-grow">
                            <header>
                                <a href="#" class="text-black no-underline">
                                    <span class="font-medium">Moritz Mustermann</span>
                                    <span class="font-normal text-grey">@mo</span>
                                </a>
                                <div class="text-xs text-grey flex items-center my-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="h-4 w-4 mr-1 feather feather-calendar">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>Just now</span>
                                </div>
                            </header>
                            <article class="py-4 text-grey-darkest leading-normal">
                                <a class="no-underline text-blue" href="#">@max_the_great</a> Lorem ipsum no lo se dolores ametandum no come,
                                astare pero canime perferme
                            </article>
                            <footer class="border-t border-gray-100 text-sm flex">
                                <a href="#" class="block no-underline text-blue flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                    <span>Liked</span>
                                </a>
                                <a href="#" class="block no-underline text-black flex mr-4 px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-message-circle h-6 w-6 mr-1">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <span>Reply</span>
                                </a>
                            </footer>
                        </div>
                    </div>
                </div>
                <div class="bg-white max-w-lg mx-auto my-8 border border-gray-100">
                    <a href="https://uxplanet.org/redesign-neiman-marcus-ios-app-5a0db3119b36"
                       class="block border-b border-gray-100 no-underline text-black">
                        <img src="https://cdn-images-1.medium.com/max/1000/1*0SiPB4-TouBdJCpVwGwLdw.png" alt="">
                        <div class="p-4">
                            <h2 class="font-medium text-lg mb-2">How I Redesign - Neiman Marcus iOS App</h2>
                            <p class="leading-normal mb-4 text-grey-darker">
                                Neiman Marcus, is an American Flagship department store which is among the most prestigious luxury
                                stores. However, its iOS App is barely satisfactory.
                            </p>
                            <span class="text-sm text-grey">
                  https://uxplanet.org/redesign-neiman-marcus-ios-app-5a0db3119b36
                </span>
                        </div>
                    </a>
                    <div class="flex pt-4 px-4">
                        <div class="w-16 mr-2">
                            <img class="p-2 rounded rounded-full"
                                 src="https://scontent-frt3-1.cdninstagram.com/t51.2885-19/s150x150/22638783_1031626323645160_6412994168498421760_n.jpg">
                        </div>
                        <div class="px-2 pt-2 flex-grow">
                            <header>
                                <a href="#" class="text-black no-underline">
                                    <span class="font-medium">Rathes Sachchithananthan</span>
                                    <span class="font-normal text-grey">@rathes</span>
                                </a>
                                <div class="text-xs text-grey flex items-center my-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="h-4 w-4 mr-1 feather feather-calendar">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                    <span>2 hours ago</span>
                                </div>
                            </header>
                            <article class="py-4 text-grey-darkest">
                                Lorem ipsum sit dolor et amet et cetera og quandum morales.
                            </article>
                            <footer class="border-t border-gray-100 text-sm flex">
                                <a href="#" class="block no-underline text-blue flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-thumbs-up h-6 w-6 mr-1 stroke-current">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                    <span>Liked</span>
                                </a>
                                <a href="#" class="block no-underline text-black flex px-4 py-2 items-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                         class="feather feather-message-circle h-6 w-6 mr-1">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                    <span>Reply</span>
                                </a>
                            </footer>
                        </div>
                    </div>
                </div>
        -->

    </div>


</template>

<script>

    import ProductsService from '../components/informations';

    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
        head() {
            return {
                title: "Timeline",
            };

        },
        data() {
            return {
                isNinja: true,
                counter1: '',
                counter2: '',
                counter3: '',
                counter4: '',
                counter5: '',
                counter6: '',
                counter7: '',
                counter8: '',
                products: [],
                error: '',
                text: '',
                category: null,
            }
        },
        async created() {
            try {
                this.products = await ProductsService.getProducts();
            } catch (err) {
                // this.error = err.message;
            }
        },
        methods: {
            async createProducts() {
                await ProductsService.insertProducts(this.text);
                this.products = await ProductsService.getProducts();
            },
            async removeProducts(id) {
                await ProductsService.deleteProducts(id);
                this.products = await ProductsService.getProducts();
            },
        },
        components: {}
    };

</script>
