<template>
  <section>
    <div class="artistes">
      <!-- Image -->
      <div class="container">
        <svg class="svg-filter">
          <defs>
            <filter id="teal-white" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feColorMatrix type="matrix" values=".33 .33 .33 0 0
                        .33 .33 .33 0 0
                        .33 .33 .33 0 0
                        0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
              <feComponentTransfer in="colormatrix" result="componentTransfer">
                <feFuncR type="table" tableValues="1 0.98"/>
                <feFuncG type="table" tableValues="1 0.96"/>
                <feFuncB type="table" tableValues="1 0.6"/>
                <feFuncA type="table" tableValues="0 1"/>
              </feComponentTransfer>
              <feBlend mode="color" in="componentTransfer" in2="SourceGraphic" result="blend"/>
            </filter>
            <filter id="teal-white2" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            	<feColorMatrix type="matrix" values=".33 .33 .33 0 0
                        .33 .33 .33 0 0
                        .33 .33 .33 0 0
                        0 0 0 1 0" in="SourceGraphic" result="colormatrix"/>
            	<feComponentTransfer in="colormatrix" result="componentTransfer">
                		<feFuncR type="table" tableValues="1 0.58"/>
            		<feFuncG type="table" tableValues="1 0.09"/>
            		<feFuncB type="table" tableValues="1 0.36"/>
            		<feFuncA type="table" tableValues="0 1"/>
              	</feComponentTransfer>
            	<feBlend mode="hue" in="componentTransfer" in2="SourceGraphic" result="blend"/>
            </filter>
          </defs>
        </svg>
        <div class="wopper">
          <div class="marquee">
            <p>
              LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 -
            </p>
            <p >
              LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 -
            </p>
          </div>
        </div>
        <ul>
          <li class="imagehover">
            <h2 class="artiste">arabian panther</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste1.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste1.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste1.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">chapelier fou ensemb7e live</h2>
            <h3>LIVESET - <span class="cuisines">AUDITORIUM SAINT PIERRE DES CUISINES</span></h3>
            <div class="date">
                <h4>15 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste2.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste2.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste2.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">dj marcelle</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste3.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste3.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste3.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">djrum live</h2>
            <h3>LIVESET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste4.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste4.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste4.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">esther</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste5.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste5.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste5.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">giant swan live</h2>
            <h3>LIVESET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste6.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste6.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste6.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">hysteria temple fondation </h2>
            <h3>LIVESET (paul ritch + kmyle) - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste7.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste7.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste7.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">jasss</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste8.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste8.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste8.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">kendal</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste9.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste9.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste9.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">kiddy smile</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste10.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste10.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste10.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">lena willikens</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste11.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste11.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste11.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">louisahhh live band</h2>
            <h3>LIVESET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste12.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste12.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste12.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">naranja</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste13.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste13.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste13.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">pablo bozzi</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste14.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste14.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste14.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">rebekah</h2>
            <h3>DJSET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste15.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste15.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste15.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">wallis</h2>
            <h3>LIVESET - <span></span></h3>
            <div class="date">
                <h4> <span></span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artistes/artiste16.webp">
              <img loading="lazy" class="follow f2" src="images/artistes/artiste16.webp">
              <img loading="lazy" class="follow f1" src="images/artistes/artiste16.webp">
            </div>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>
<style>
.follow {
    position:absolute;
    visibility: hidden;
    transform: translateX(20px)  translateY(-50%);
    pointer-events:none;
    width:25vw;
    overflow:hidden;
}
.lol {
    animation: lolking 5s linear;
    animation-iteration-count: infinite;
}
.f1 {
    filter: url("#teal-white");
}
.f2 {
    filter: url("#teal-white2");
    transition:.1s !important;
    position: absolute;
}
.f3 {
    filter: saturate(0);
    transition:.2s !important;
    position: absolute;
}
.follow.visible {
    visibility: visible;
}

.svg-filter {
    visibility: hidden;
    height: 0;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
<script>
  export default {
    data: () => ({
    }),
    computed: {
    },
    methods: {
        follow() {
              $('.imagehover').mouseenter(function(e){
                $(this).find('.follow').addClass('visible')
                var height = $(this).find('.follow').height();
                $(this).find('.follow').css({left:e.pageX, top: - height / 4});
              }).mousemove(function(e){
                var height = $(this).find('.follow').height();
                $(this).find('.follow').css({left:e.pageX, top: - height / 4});
              }).mouseleave(function(e){
                $(this).find('.follow').removeClass('visible');
              });
        },
        opacity() {
          this.$gsap.utils.toArray(".imagehover").forEach(e => {

            var artiste = e.getElementsByClassName('artiste');
            var date = e.getElementsByClassName('date');

            var titleArtiste = this.$gsap.timeline({paused:true}), SplitText = new SplitType(artiste , {type:"chars"}), chars = SplitText.chars;
                titleArtiste.from(chars, {delay: 0, duration: 0.1, opacity:0, x:-50, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0.1}, "+=0");

            var dateArtiste = this.$gsap.timeline({paused:true}), SplitDate = new SplitType(date , {type:"words"}), words = SplitDate.words;
                dateArtiste.from(words, {delay: 0.3, duration: 0.5, opacity:0, x:100, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0}, "+=0");

            var blocArtiste = this.$gsap.timeline({
              scrollTrigger: {
                    trigger: e,
                    start: "center-=25px bottom-=100px",
                    end: "top-=25px top+=75px",
                    scrub: false,
                    toggleActions: "play reverse play reverse",
                    onEnterBack: e => {
                      titleArtiste.play();
                      dateArtiste.play();
                    },
                    onLeaveBack: e => {
                      titleArtiste.reverse();
                      dateArtiste.reverse();
                    },
                    onEnter: e => {
                      titleArtiste.play();
                      dateArtiste.play();
                    },
                    onLeave: e => {
                      titleArtiste.reverse();
                      dateArtiste.reverse();
                    },
                    //markers: {startColor: "black", endColor: "black", fontSize: "25px", fontWeight: "bold", indent: 0}
              }
            }).fromTo(e, {  x: -100, opacity: 0, ease: "linear"}, {  x: 0, opacity: 1, ease: "lineary"});

          });

        },
        sticky() {
            let lineup = this.$gsap.timeline({
              scrollTrigger: {
                trigger: ".artistes",
                start: "top top+=450",
                end: "top top+=50",
                scrub: true,
              }
            })
            .fromTo(".marquee",
              { "font-size": "100px", "line-height": "100px","color": "#95165d", ease: "none", stagger: 0.5, ease: 'power2.inOut'},
              { "font-size": "45px", "line-height": "75px","color": "#000", ease: "none", stagger: 0.5, ease: 'power2.inOut'}
            )
        },
        stickytop() {

            let lineupRemove = this.$gsap.timeline({
              scrollTrigger: {
                trigger: ".lieux",
                start: "top top+=450",
                end: "top top+=250",
                scrub: true
              }
            })
            .fromTo(".marquelineup",
              {  opacity: 1, ease: "none", stagger: 0.5, ease: 'power2.inOut'},
              {  opacity: 0, ease: "none", stagger: 0.5, ease: 'power2.inOut'}
            )

            let lineup = this.$gsap.timeline({
              scrollTrigger: {
                trigger: ".marquee",
                start: "top top+=75",
                end: "bottom-=75",
                scrub: true
              }
            })
            .fromTo(".marquelineup",
              { "top": "75px", ease: "none", stagger: 0.5, ease: 'none'},
              { "top": "0", ease: "none", stagger: 0.5, ease: 'none'}
            )
        },
        scrolltoIP() {
          document.querySelectorAll(".imagehover h3 span").forEach((btn, index) => {
              var select = btn.getAttribute('class');
              btn.addEventListener("click", () => {
                this.$gsap.to(window, {duration: 1, scrollTo:{y:"#" + select, offsetY:75}});
              });
          });
        }


    },
    mounted() {
        this.follow();
        this.opacity();
        this.sticky();
        this.stickytop();
        this.scrolltoIP();
    }
  }
</script>
