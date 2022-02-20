<template>
<div>

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

            <p class="sm:text-2xl text-lg ">Je suis un étudiant français en Pré-Master of Science (MS) à Epitech Paris.
              J'ai 20 ans. De nature, je suis vraiment curieux et passionné par ce que je fais.
              Je passe beaucoup de temps à me former à la programmation, mon compte GitHub vous le confirmera.
              En classe, on me choisit souvent pour gérer les groupes car j'ai toujours une longueur d'avance et je sais toujours comment tirer le meilleur parti de chaque profil.
              comment tirer le meilleur parti de chaque profil différent. J'adore les projets open source, je travaille avec la méthodologie agile, et
              Je suis un vrai technicien DevOps.</p>

            <p class="font-normal sm:text-2xl  text-1xl py-4">
                Career
            </p>
            <i class="font-normal sm:text-2xl  text-lg">Baccalaureate</i><br>
            <p class="font-normal sm:text-2xl  text-lg"> Pour mon baccalauréat, j'ai décidé d'étudier à Paris au "Lycée Galilée" en partenariat avec la Marine nationale.
              Marine Nationale.
              J'ai été formé pendant mes stages par des militaires spécialisés dans les communications informatiques avancées.
              J'ai également effectué deux stages en entreprise, la première année chez Affix Formation où j'étais responsable du réseau.
              où j'étais en charge du service réseau et en deuxième année chez Astone Technology où je
              travaillais sur la programmation de bornes tactiles interactives. J'ai effectué deux stages dans la Marine nationale.
              Marine Nationale et j'ai ainsi pu étudier l'électronique industrielle directement à bord des frégates de la Marine Nationale.
              Marine Nationale. En particulier, la communication interne, les liaisons radio, ainsi que l'équipement des sous-marins m'ont ouvert de nouvelles opportunités.
              de nouvelles opportunités pour moi. Mon désir d'approfondir mes connaissances s'est renforcé dans les diverses applications offertes par la programmation et les réseaux en tant qu'ingénieur.
              applications offertes par la programmation et le réseau ainsi qu'une approche plus pragmatique du monde du travail.
              travail.
              J'ai effectué environ 5 mois de stage au cours de ces 3 années.
            </p><br>

            <i class="font-normal sm:text-2xl  text-lg">BTS(Brevet de Technicien Supérieur)<br>
              Option programmation des systèmes électroniques et réseau</i><br><br>

            <p class="font-normal sm:text-2xl  text-lg">Après avoir obtenu mon baccalauréat avec mention en électronique industrielle embarquée dans la marine, je suis
              je poursuis un brevet de technicien supérieur
              de technicien supérieur en programmation C++ et science des réseaux. J'ai dû effectuer un stage pendant ces 2
              années. Pour celui-ci, je me suis rendu à Emerya Thailande en Thailande pour améliorer mes compétences en matière de technologie web.
              programmation directement auprès de l'expert. J'ai travaillé sur Bootstrap, PrimerStyle, TailwindCSS, vue.js,
              nuxt.js, node.js. qui m'ont donné les compétences nécessaires pour créer mon propre site web.</p><br>

            <p class="font-normal font-normal sm:text-2xl  text-lg py-4">
                Further studies
            </p>
            <div class="mb-12">
            <p class="font-normal sm:text-2xl  text-lg">Après le BTS je veux continuer les études jusqu'au master en programmation et science des réseaux
              et continuer en multipliant mes expériences professionnelles à l'étranger et mes certifications pour me spécialiser toujours
              plus.<a href="https://www.linkedin.com/in/albertlanne/"
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
      head: {
        title: 'Presentation',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ],
      },
        components: {
            Photo, NavBarre
        }

    };
</script>

<style scoped>

</style>
