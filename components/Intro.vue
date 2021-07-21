<template>
  <section>
    <div class="accueil ">

      <!-- Image -->
      <div class="parallax">
        <div class="layer" data-depth='0.40'>
          <img src="/images/background.jpg" class="fond" loading="lazy" >
        </div>
      </div>
      <!-- Titre EA -->
      <h1>{{titre}}</h1>
      <h2>Electro Alternativ <br> <span>c'est un mélange d'espoir, d'envie et de persévérance.</span></h2>

      <Panthere :typee="'intro'" />

      <p>C’est aussi une forme de renaissance ; après ses multiples aventures, le festival a intégré de nouveaux sujets. Pionnier dans le désir de mettre en avant une culture
        stigmatisée, le festival a su proposer des formes originales pour intégrer la musique électronique au paysage culturel toulousain. Aujourd’hui, il a à cœur de soutenir
        les artistes nationaux et locaux qui ont subi la crise actuelle de plein fouet, ainsi que de proposer une programmation paritaire et inclusive. Toujours itinérant, le
        festival saura s’adapter aux contraintes liées à la situation. Plus que jamais, nous avons envie de faire et d’exister, nous avons envie de vous retrouver unis autour
        de la musique. Visuellement, l’orchidée anthropomorphique est là pour illustrer ce mouvement, ce changement de forme, cette adaptation dont nous avons fait et dont nous
        allons devoir faire preuve tout au long de la construction du festival. Son visage est celui de la panthère rose, qui représente ici un esprit joueur, très créatif, qui
        détourne les règles et se les approprie pour profiter de la vie. C’est donc avec un esprit positif que nous vous annonçons Electro Alternativ 2021 du 11 au 19 septembre
        à Toulouse !</p>

    </div>

  </section>
</template>
<script>
  export default {
    data: () => ({
    }),
    props: {
      titre: {
        type: String,
        required: true
      }
    },
    computed: {
    },
    methods: {
      enter() {
          var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".accueil h1", {type:"words,chars"}), chars = mySplitText.chars;
          t1.from(chars, {delay: 0.5, duration: .1, opacity:0, y:-50, transformPerspective:800, transformOrigin:"center", rotationY:180,  ease:"power2.inOut", stagger: 0.1}, "+=0");
      },
      skew(){
        let proxy = { skew: 0 },
            skewSetter = this.$gsap.quickSetter(".accueil p", "skewY", "deg"), // fast
            clamp = this.$gsap.utils.clamp(-5, 5); // don't let the skew go beyond 20 degrees.
            this.$ScrollTrigger.create({
              onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -500);
                // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                  proxy.skew = skew;
                  this.$gsap.to(proxy, {skew: 0, duration: 0.1, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
                }
              }
            });
            this.$gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

      },

      parallax() {
          let fond = this.$gsap.timeline({
            scrollTrigger: {
              trigger: ".parallax",
              start: "top-=75px",
              end: "+=750",
              scrub: true
            }
          })
          .fromTo(".layer",
            { y: 0, ease: "none", stagger: 0.5, ease: 'power2.inOut'},
            { y: -1000, ease: "none", stagger: 0.5, ease: 'power2.inOut'}
          )

          let title = this.$gsap.timeline({
            scrollTrigger: {
              trigger: ".accueil p",
              start: "top-=850",
              end: "top-=650",
              scrub: true
            }
          })
          .fromTo(".accueil h2",
            { opacity: 0, ease: "none", stagger: 0.5, ease: 'power2.inOut'},
            { opacity: 1, ease: "none", stagger: 0.5, ease: 'power2.inOut'}
          )

          let panth = this.$gsap.timeline({
            scrollTrigger: {
              trigger: ".accueil p",
              start: "top-=850",
              end: "top-=450",
              scrub: true
            }
          })
          .fromTo(".intro-panth",
            { y: -75, ease: "none", stagger: 0.5, ease: 'power2.inOut'},
            { y: 0, ease: "none", stagger: 0.5, ease: 'power2.inOut'}
          )

      },
    },
    mounted() {
        this.enter();
        this.parallax();
              this.skew();
    }
  }
</script>
