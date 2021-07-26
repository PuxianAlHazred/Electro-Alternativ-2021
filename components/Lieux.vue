<template>
  <section>
    <div class="lieux">

      <div class="container">

        <div class="wopper">
          <div class="marquee marqueelieu">
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
                <picture>
                  <source media="(max-width: 767px)" srcset="/images/lieux/Abattoirs-xs.webp">
                  <source media="(max-width: 1024px)" srcset="/images/lieux/Abattoirs-md.webp">
                  <source media="(max-width: 1440px)" srcset="/images/lieux/Abattoirs-xl.webp">
                  <img loading="lazy" src="/images/lieux/Abattoirs.webp" alt="Les Abattoirs - Toulouse">
                </picture>
              </div>
              <Panthere :typee="'lieu'" />
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
                <picture>
                  <source media="(max-width: 767px)" srcset="/images/lieux/Bikini-xs.webp">
                  <source media="(max-width: 1024px)" srcset="/images/lieux/Bikini-md.webp">
                  <source media="(max-width: 1440px)" srcset="/images/lieux/Bikini-xl.webp">
                  <img loading="lazy" src="/images/lieux/Bikini.webp" alt="Le Bikini - Toulouse">
                </picture>
              </div>
          </li>
          <li id="cinema">
              <div class="lieu-img">
                <picture>
                  <source media="(max-width: 767px)" srcset="/images/lieux/Cinema-ABC-xs.webp">
                  <source media="(max-width: 1024px)" srcset="/images/lieux/Cinema-ABC-md.webp">
                  <source media="(max-width: 1440px)" srcset="/images/lieux/Cinema-ABC-xl.webp">
                  <img loading="lazy" src="/images/lieux/Cinema-ABC.webp" alt="Cinema ABC - Toulouse">
                </picture>
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
                <picture>
                  <source media="(max-width: 767px)" srcset="/images/lieux/Halle-de-la-machine-xs.webp">
                  <source media="(max-width: 1024px)" srcset="/images/lieux/Halle-de-la-machine-md.webp">
                  <source media="(max-width: 1440px)" srcset="/images/lieux/Halle-de-la-machine-xl.webp">
                  <img loading="lazy" src="/images/lieux/Halle-de-la-machine.webp" alt="Halle de la machine - Toulouse">
                </picture>
              </div>
          </li>
          <li id="metronum">
              <div class="lieu-img">
                <picture>
                  <source media="(max-width: 767px)" srcset="/images/lieux/Metronum-xs.webp">
                  <source media="(max-width: 1024px)" srcset="/images/lieux/Metronum-md.webp">
                  <source media="(max-width: 1440px)" srcset="/images/lieux/Metronum-xl.webp">
                  <img loading="lazy" src="/images/lieux/Metronum.webp" alt="Le Metronum - Toulouse">
                </picture>
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
                <picture>
                  <source media="(max-width: 767px)" srcset="/images/lieux/Saint-Pierre-des-cuisines-xs.webp">
                  <source media="(max-width: 1024px)" srcset="/images/lieux/Saint-Pierre-des-cuisines-md.webp">
                  <source media="(max-width: 1440px)" srcset="/images/lieux/Saint-Pierre-des-cuisines-xl.webp">
                  <img loading="lazy" src="/images/lieux/Saint-Pierre-des-cuisines.webp" alt="Saint Pierre des cuisines - Toulouse">
                </picture>
              </div>
          </li>
        </ul>
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
        if( window.innerWidth > 1024) {
            let leslieux = this.$gsap.timeline({
              scrollTrigger: {
                trigger: ".lieux .container",
                start: "top top+=450",
                end: "top top+=50",
                scrub: true
              }
            })
            .fromTo(".marqueelieu",
              { "font-size": "100px", "line-height": "100px","color": "#95165d", ease: "none", stagger: 0.5, ease: 'power2.inOut'},
              { "font-size": "45px", "line-height": "75px","color": "#000", ease: "none", stagger: 0.5, ease: 'power2.inOut'}
            )
        }
        if(window.innerWidth <= 1024) {
            let leslieux = this.$gsap.timeline({
              scrollTrigger: {
                trigger: ".lieux .container",
                start: "top top+=450",
                end: "top top+=50",
                scrub: true
              }
            })
            .fromTo(".marqueelieu",
              { "font-size": "75px", "line-height": "75px","color": "#95165d", ease: "none", stagger: 0.5, ease: 'power2.inOut'},
              { "font-size": "35px", "line-height": "75px","color": "#000", ease: "none", stagger: 0.5, ease: 'power2.inOut'}
            )
        }
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
          var mobile = e.parentNode;

          var titleLieu = this.$gsap.timeline({paused:true}), SplitLieu = new SplitType(lieu , {type:"words"}), words = SplitLieu.words;
              titleLieu.from(words, {delay: 0.2, duration: 0.5, opacity:0, y:-50, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0.1}, "+=0");

          var itineraireLieu = this.$gsap.timeline({paused:true}), SplitItineraire = new SplitType(itineraire , {type:"chars"}), chars = SplitItineraire.chars;
              itineraireLieu.from(chars, {delay: 0.2, duration: 0.5, opacity:0, y:100, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0}, "+=0");

          if( window.innerWidth > 767) {
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
            }
            if( window.innerWidth <= 767) {
              var blocLieu = this.$gsap.timeline({
                scrollTrigger: {
                      trigger: mobile,
                      start: "top center+=100px",
                      end: "bottom center-=100px",
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
            }
        });
        this.$gsap.utils.toArray(".lieu-img").forEach(e => {

          var img = e.getElementsByTagName('img');
          var mobile = e.parentNode;

          var imgFull = this.$gsap.from(img, {delay: 0, duration: 0.1, opacity:0, ease:"power2.inOut", stagger: 0.1});

          if( window.innerWidth > 767) {
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
          }
          if( window.innerWidth <= 767) {
              var blocImg = this.$gsap.timeline({
                scrollTrigger: {
                      trigger: mobile,
                      start: "top center+=100px",
                      end: "bottom center-=100px",
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
                      markers: {startColor: "blue", endColor: "blue", fontSize: "25px", fontWeight: "bold", indent: 0}
                }
              }).fromTo(e, {  y: 100, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});
          }

        });
        this.$gsap.utils.toArray(".intro-panth.lieu").forEach(e => {
          var panthOpa = this.$gsap.from(e, {delay: 0.5, duration: 0.5, opacity:0, ease:"power2.inOut", stagger: 0.1});
          if( window.innerWidth > 767) {
              var blocPanth = this.$gsap.timeline({
                scrollTrigger: {
                      trigger: e,
                      start: "center bottom-=100px",
                      end: "center top+=75px",
                      scrub: false,
                      toggleActions: "play reverse play reverse",
                      onEnterBack: e => {
                        panthOpa.play();
                      },
                      onLeaveBack: e => {
                        panthOpa.reverse();
                      },
                      onEnter: e => {
                        panthOpa.play();
                      },
                      onLeave: e => {
                        panthOpa.reverse();
                      },
                    //  markers: {startColor: "blue", endColor: "blue", fontSize: "25px", fontWeight: "bold", indent: 0}
                }
              }).fromTo(e, {  y: 0, opacity: 0, ease: "linear"}, {  y: 0, opacity: 1, ease: "linear"});
          }
        });

      },
    },
    mounted() {
      this.opacity();
      this.sticky();
      this.skew();
      window.addEventListener('resize', this.sticky);
      window.addEventListener('resize', this.opacity);
    }
  }
</script>
