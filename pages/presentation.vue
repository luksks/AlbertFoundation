<template>
<div>
<!--    <header class=" flex flex-wrap items-center justify-between flex">-->
<!--        <nuxt-link to="/" class="sm:px-6 sm:mx-0 mx-auto">-->
<!--            <img class="-pt-8  fill-current stroke-current sm:h-26 sm:w-26 h-24 w-24 zoom  "-->
<!--                 src="../assets/img/logo_site_dark_mod.svg"-->
<!--                 title="The white version logo of my website"-->
<!--                 alt="The white version logo of my website">-->
<!--        </nuxt-link>-->

<!--        &lt;!&ndash;        Div pour les élément de droite&ndash;&gt;-->

<!--        <div class=" align-baseline flex justify-end  text-copy-primary sm:mx-0 mx-auto">-->

<!--            <nuxt-link to="/presentation"-->
<!--                       class=" button zoom hover:text-purple-700 ">-->
<!--                Presentation-->
<!--            </nuxt-link>-->
<!--            <nuxt-link to="/aboutWebsite" class="button zoom hover:text-green-700  text-sm sm:text-base ">-->
<!--                About the website-->
<!--            </nuxt-link>-->
<!--        </div>-->
<!--    </header>-->
    <div class="flex flex-col  items-center flex-wrap bg-background-primary pt-8 animated fade-in">
        <div class="-my-8">
            <Photo/>
        </div>

        <div class="font-serif text-xl text-justify text-copy-primary justify-around items-center w-5/6 xl:w-1/2 mx-auto  pb-8 md:pb-0">

            <p class="font-normal text-center text-3xl py-4">
                ~ About me ~
            </p>
            <p class="font-normal sm:text-2xl  text-1xl py-4">
                Introduction
            </p>

            <p class="sm:text-2xl text-lg ">I am a French student in my second year of programming at the Paul Cornu High School in Lisieux in Normandy
                I am 20 years old. By nature, I am really curious by nature and passionate about what I do.
                I spend a lot of time training on programming, my GitHub account can confirm this.
                In class people often choose me to manage groups because I am always one step ahead and I always know how
                to make the most of each different profile. I love open source projects, and working with agile methodology, and
                I am a real DevOps technician.</p>

            <p class="font-normal sm:text-2xl  text-1xl py-4">
                Career
            </p>
            <i class="font-normal sm:text-2xl  text-lg">Baccalaureate</i><br>
            <p class="font-normal sm:text-2xl  text-lg"> For my baccalaureat, I decided to study at Paris in the "Lycée Galilée" in partnership with the French
                Navy.
                I was trained during my internships by soldiers specialized in advanced computer communications.
                I also had two internships to do in a company.The first year was at Affix Formation
                where I was in charge of the network services and in second year at Astone Technology where I
                was working on the programming of interactive touch terminals. I did two internships in the French
                Navy, therefore,  I was able to study industrial electronics directly on board of the French Frigates.
                I really liked in particular some aspects of the frigates: internal communication, radio links, as well as equipments on submarines. 
                It have opened up new opportunities for me. My desire to deepen my knowledge has been strengthened in the various
                My desire to deepen my knowledge has been strengthened by the many
                possibilities offered by the programming and the networking as well as a more pragmatic approach to the world of
                work. I had about 5 months of internship during those 3 years.
              
               
            </p><br>

            <i class="font-normal sm:text-2xl  text-lg">BTS(Brevet de Techicien Supérieur)<br>
                Electronic system Programming & Network option</i><br><br>

            <p class="font-normal sm:text-2xl  text-lg">After obtaining my baccalaureate with honours in embedded industrial electronics in the navy, I am
                pursuing a Higher
                Technician Certificate in C++ programming and network science. I had to do an internship during this 2
                years. For this one, I went to Emerya Thailande in Thailand to improve my skill in web technologies
                programming close to experts. I have work on Bootstrap, PrimerStyle, TailwindCSS, vue.js,
                nuxt.js, node.js. which gave me the skills to make my own website. </p><br>

            <p class="font-normal font-normal sm:text-2xl  text-lg py-4">
                Further studies
            </p>
            <div class="mb-12">
            <p class="font-normal sm:text-2xl  text-lg">After the BTS I want to continue studying until  a master in programming and network science
                and to continue to multiply my professional experiences abroad and certifications to specialize even more.<a href="https://www.linkedin.com/in/albertlanne/"
                        target="_blank"
                        title="My online Curriculum vitae ♟"> My Linkedin.</a></p>
        </div>
        </div>
    </div>
</div>

</template>

<script>

    import Photo from "../components/IndexPagePrincipale/Photo";
    import NavBarre from "~/components/NavBarre.vue";

    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
        head() {
            return {
                title: "Presentation"
            };
        },
        components: {
            Photo, NavBarre
        }

    };
</script>

<style scoped>

</style>
