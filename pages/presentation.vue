<template>

    <div class="flex flex-col  items-center flex-wrap bg-background-primary pt-8 animated fade-in">
        <div class="-my-8">
            <Photo/>
        </div>
        <div class="font-serif text-xl text-justify text-copy-primary justify-around items-center w-5/6 md:w-1/2 mx-auto  pb-8 md:pb-0">

            <p class="font-normal text-center text-3xl py-4">
                ~ About me ~
            </p>
            <p class="font-normal sm:text-2xl  text-1xl py-4">
                Introduction
            </p>

            <p class="sm:text-2xl text-lg">I am a French student in the second year of programming at the Paul Cornu College in Lisieux in Normandy
                I have 20 year's old. By nature, I am really curious and passionate about what I do.
                I spend a lot of time training on programming, my GitHub account will confirm this.
                In class people often choose me to manage groups because I'm always one step ahead and I always know how
                to make the most of each different profile. I love open source project, work with agile methodology, and
                I'm a real DevOps technician.</p>

            <p class="font-normal sm:text-2xl  text-1xl py-4">
                Career
            </p>
            <i class="font-normal sm:text-2xl  text-lg">Baccalaureate</i><br>
            <p class="font-normal sm:text-2xl  text-lg"> For my baccalaureat, I decided to study at Paris in the "Lycée Galilée" in partnership with the French
                Navy.
                I was trained during my internships by soldiers specialized in advanced computer communications.
                I also had two internships to perform into a enterprise.The first year at Affix Formation
                where I was in charge of the network service and in second year at Astone Technology where I
                was working on the programming of interactive touch terminals. I did two internships in the French
                Navy and thus I was able to study industrial electronics directly on board the frigates of the French
                Navy. In particular, internal communication, radio links, as well as equipment on submarines have opened
                up new opportunities for me. My desire to deepen my knowledge has been strengthened in the various
                applications offered by the programming and network as well as a more pragmatic approach to the world of
                work.
                I had about 5 months of internship during this 3 years.
            </p><br>

            <i class="font-normal sm:text-2xl  text-lg">BTS(Brevet de Techicien Supérieur)<br>
                Electronic system programming option and Network</i><br><br>

            <p class="font-normal sm:text-2xl  text-lg">After obtaining my baccalaureate with honours in embedded industrial electronics in the navy, I am
                pursuing a Higher
                Technician Certificate in C++ programming and network science. I had to do an internship during this 2
                years. For this one, I was go to Emerya Thailande in Thailande to improve my skill to web technology
                programming directly near to the expert. I have work on Bootstrap, PrimerStyle, TailwindCSS, vue.js,
                nuxt.js, node.js. which gave me the skills to make my own website. </p><br>

            <p class="font-normal font-normal sm:text-2xl  text-lg py-4">
                Further studies
            </p>
            <div class="mb-12">
            <p class="font-normal sm:text-2xl  text-lg">After the BTS I want to continue studies until master in programming and network science
                and continue by multiplying my professional experiences abroad and certifications to specialize always
                more.<a href="https://www.linkedin.com/in/albertlanne/"
                        target="_blank"
                        title="My online Curriculum vitae ♟"> My Linkedin.</a></p>
        </div>
        </div>
    </div>
</template>

<script>

    import Photo from "../components/IndexPagePrincipale/Photo";


    export default {
        // https://www.vuemastery.com/courses/scaling-vue-with-nuxt-js/seo-vue-metav
        head() {
            return {
                title: "Presentation"
            };
        },
        components: {
            Photo
        }

    };
</script>

<style scoped>

</style>
