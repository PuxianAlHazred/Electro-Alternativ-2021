<template>
  <section>
    <div class="accueil ">

      <!-- Image -->
      <div class="fond"></div>
      <div class="cover-fond"></div>
      <!-- Titre EA -->
      <h1>electro<br>alternativ</h1>
      <h2>Electro Alternativ <br> <span>c'est un mélange d'espoir, d'envie et de persévérance.</span></h2>
      <img src="images/panthererose.png" class="intro-panth" loading="lazy">
      <p>C’est aussi une forme de renaissance ; après ses multiples aventures, le festival a intégré de nouveaux sujets. Pionnier dans le désir de mettre en avant une culture
        stigmatisée, le festival a su proposer des formes originales pour intégrer la musique électronique au paysage culturel toulousain. Aujourd’hui, il a à cœur de soutenir
        les artistes nationaux et locaux qui ont subi la crise actuelle de plein fouet, ainsi que de proposer une programmation paritaire et inclusive. Toujours itinérant, le
        festival saura s’adapter aux contraintes liées à la situation. Plus que jamais, nous avons envie de faire et d’exister, nous avons envie de vous retrouver unis autour
        de la musique. Visuellement, l’orchidée anthropomorphique est là pour illustrer ce mouvement, ce changement de forme, cette adaptation dont nous avons fait et dont nous
        allons devoir faire preuve tout au long de la construction du festival. Son visage est celui de la panthère rose, qui représente ici un esprit joueur, très créatif, qui
        détourne les règles et se les approprie pour profiter de la vie. C’est donc avec un esprit positif que nous vous annonçons Electro Alternativ 2021 du 11 au 19 septembre
        à Toulouse !</p>

      <h4>10/11/14/15/16/17/18 <span>SEPTEMBRE</span></h4>

    </div>

  </section>
</template>
<script>
  export default {
    data: () => ({
    }),
    computed: {

    },
    methods: {
      enter() {
        console.log("enter")
          var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".accueil h1", {type:"words,chars"}), chars = mySplitText.chars;
            t1.from(chars, {delay: 0, duration: .1, opacity:0, y:-50, transformPerspective:800, transformOrigin:"center", rotationY:180,  ease:"power2.inOut", stagger: 0.1}, "+=0");

      }
    },
    mounted() {
        this.enter();
    }
  }
</script>
