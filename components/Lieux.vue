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
                <img srcset="/images/lieux/Abattoirs-xl.webp 1440w, /images/lieux/Abattoirs-md.webp 1024w, /images/lieux/Abattoirs-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Abattoirs-xs.webp" loading="lazy" alt="Les Abattoires - Toulouse" />
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
                <img srcset="/images/lieux/Bikini-xl.webp 1440w, /images/lieux/Bikini-md.webp 1024w, /images/lieux/Bikini-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Bikini-xs.webp" loading="lazy" alt="Le Bikini - Toulouse" />
              </div>
          </li>
          <li id="cinema">
              <div class="lieu-img">
                <img srcset="/images/lieux/Cinema-ABC-xl.webp 1440w, /images/lieux/Cinema-ABC-md.webp 1024w, /images/lieux/Cinema-ABC-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Cinema-ABC-xs.webp" loading="lazy" alt="Cinema ABC - Toulouse" />
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
                <img srcset="/images/lieux/Halle-de-la-machine-xl.webp 1440w, /images/lieux/Halle-de-la-machine-md.webp 1024w, /images/lieux/Halle-de-la-machine-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Halle-de-la-machine-xs.webp" loading="lazy" alt="Halle de la machine - Toulouse" />
              </div>
          </li>
          <li id="metronum">
              <div class="lieu-img">
                <img srcset="/images/lieux/Metronum-xl.webp 1440w, /images/lieux/Metronum-md.webp 1024w, /images/lieux/Metronum-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Metronum-xs.webp" loading="lazy" alt="Le Metronum - Toulouse" />
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
                <img srcset="/images/lieux/Saint-Pierre-des-cuisines-xl.webp 1440w, /images/lieux/Saint-Pierre-des-cuisines-md.webp 1024w, /images/lieux/Saint-Pierre-des-cuisines-xs.webp 767w"
                    sizes="(max-width: 1440px), (max-width: 1024px), (max-width: 767px)"
                    src="/images/lieux/Saint-Pierre-des-cuisines-xs.webp" loading="lazy" alt="Saint Pierre des cuisines - Toulouse" />
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

          if( window.innerWidth > 767) {

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
      window.addEventListener('resize', this.sticky);
      window.addEventListener('resize', this.opacity);
    }
  }
</script>
