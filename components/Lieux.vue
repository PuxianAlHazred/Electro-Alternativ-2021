<template>
  <section>
    <div class="lieux">



      <!-- Image -->

      <div class="container">

        <div class="wopper">
          <div class="marquee">
            <p>
              LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX -
            </p>
            <p >
              LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX -
            </p>
          </div>
        </div>

        <ul>
          <li id="abattoirs">
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Abattoirs.webp">
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>Les abattoirs</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li id="bikini">
              <div class="lieu-content">
                  <div class="center">
                      <h2>le Bikini</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Bikini.webp">
              </div>
          </li>
          <li id="cinema">
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Cinema-ABC.webp">
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>Cinema ABC</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li id="halle">
              <div class="lieu-content">
                  <div class="center">
                      <h2>Halle de la machine</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Halle-de-la-machine.webp">
              </div>
          </li>
          <li id="metronum">
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Metronum.webp">
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-content">
                  <div class="center">
                      <h2>Metronum</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
          </li>
          <li id="cuisines">
              <div class="lieu-content">
                  <div class="center">
                      <h2>Saint Pierre des cuisines</h2>
                      <a href="#"  target="_blank">s'y rendre</a>
                  </div>
              </div>
              <Panthere  :typee="'lieu'" />
              <div class="lieu-img">
                  <img loading="lazy" src="images/lieux/Saint-Pierre-des-cuisines.webp">
              </div>
          </li>
        </ul>
        <p class="more">& d'autres à venir ;)</p>
      </div>



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
      sticky() {
      /*  this.$gsap.utils.toArray(".marque p").forEach(e => {
            var switchTitleLieu = this.$gsap.to(e, { duration: 0.8, text: "LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX -", ease: "back", stagger: 0.1});
            var switchTitleLineup = this.$gsap.to(e, { duration: 0.8, text: "LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 -", ease: "back", stagger: 0.1});

            var blocMarqueLieu = this.$gsap.timeline({
              scrollTrigger: {
                    trigger: ".lieux",
                    start: "top top+=450",
                    end: "top top+=250",
                    scrub: false,
                    toggleActions: "play reverse play reverse",
                    onLeaveBack: e => {
                      switchTitleLineup.play();
                      switchTitleLieu.reverse();
                    },
                    onEnter: e => {
                      switchTitleLineup.reverse();
                      switchTitleLieu.play();
                    },
                    //markers: {startColor: "pink", endColor: "pink", fontSize: "25px", fontWeight: "bold", indent: 0}
              }
            });

        });*/

        let leslieux = this.$gsap.timeline({
          scrollTrigger: {
            trigger: ".lieux",
            start: "top top+=450",
            end: "top top+=50",
            scrub: true,
          }
        })
        .fromTo(".marquee",
          { "font-size": "100px", "line-height": "100px","color": "#95165d", ease: "none", stagger: 0.5, ease: 'power2.inOut'},
          { "font-size": "45px", "line-height": "75px","color": "#000", ease: "none", stagger: 0.5, ease: 'power2.inOut'}
        )

        let leslieuxtop = this.$gsap.timeline({
          scrollTrigger: {
            trigger: ".marquee",
            start: "top top+=75",
            end: "bottom-=75",
            scrub: true
          }
        })
        .fromTo(".marquelieu",
          { "top": "75px", opacity:0, ease: "none", stagger: 0.5, ease: 'none'},
          { "top": "0", opacity:1, ease: "none", stagger: 0.5, ease: 'none'}
        )

      },
      skew(){
        let proxy = { skew: 0 },
            skewSetter = this.$gsap.quickSetter(".lieux h2", "skewY", "deg"), // fast
            clamp = this.$gsap.utils.clamp(-3, 3); // don't let the skew go beyond 20 degrees.
        this.$ScrollTrigger.create({
          onUpdate: (self) => {
            let skew = clamp(self.getVelocity() / -300);
            // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
            if (Math.abs(skew) > Math.abs(proxy.skew)) {
              proxy.skew = skew;
              this.$gsap.to(proxy, {skew: 0, duration: 0.3, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
            }
          }
        });
        this.$gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

      },
      opacity() {
        this.$gsap.utils.toArray(".lieu-content").forEach(e => {

          var lieu = e.getElementsByTagName('h2');
          var itineraire = e.getElementsByTagName('a');

          var titleLieu = this.$gsap.timeline({paused:true}), SplitLieu = new SplitType(lieu , {type:"words"}), words = SplitLieu.words;
              titleLieu.from(words, {delay: 0.3, duration: 0.5, opacity:0, y:-50, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0.1}, "+=0");

          var itineraireLieu = this.$gsap.timeline({paused:true}), SplitItineraire = new SplitType(itineraire , {type:"chars"}), chars = SplitItineraire.chars;
              itineraireLieu.from(chars, {delay: 0.3, duration: 0.5, opacity:0, y:100, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0}, "+=0");

          var blocLieu = this.$gsap.timeline({
            scrollTrigger: {
                  trigger: e,
                  start: "center+=75px bottom-=100px",
                  end: "center-=75px top+=75px",
                  scrub: false,
                  toggleActions: "play reverse play reverse",
                  onEnterBack: e => {
                    titleLieu.play();
                    itineraireLieu.play();
                  },
                  onLeaveBack: e => {
                    titleLieu.reverse();
                    itineraireLieu.reverse();
                  },
                  onEnter: e => {
                    titleLieu.play();
                    itineraireLieu.play();
                  },
                  onLeave: e => {
                    titleLieu.reverse();
                    itineraireLieu.reverse();
                  },
                  //markers: {startColor: "pink", endColor: "pink", fontSize: "25px", fontWeight: "bold", indent: 0}
            }
          }).fromTo(e, {  y: -100, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});

        });
        this.$gsap.utils.toArray(".lieu-img").forEach(e => {

          var img = e.getElementsByTagName('img');

          var imgFull = this.$gsap.from(img, {delay: 0, duration: 0.1, opacity:0, ease:"power2.inOut", stagger: 0.1});

          var blocImg = this.$gsap.timeline({
            scrollTrigger: {
                  trigger: e,
                  start: "top-=75px bottom-=100px",
                  end: "bottom-=300px top+=75px",
                  scrub: false,
                  toggleActions: "play reverse play reverse",
                  onEnterBack: e => {
                    imgFull.play();
                  },
                  onLeaveBack: e => {
                    imgFull.reverse();
                  },
                  onEnter: e => {
                    imgFull.play();
                  },
                  onLeave: e => {
                    imgFull.reverse();
                  },
                //  markers: {startColor: "blue", endColor: "blue", fontSize: "25px", fontWeight: "bold", indent: 0}
            }
          }).fromTo(e, {  y: 100, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});

        });


      },
    },
    mounted() {
      this.opacity();
      this.sticky();
      this.skew();
    }
  }
</script>
