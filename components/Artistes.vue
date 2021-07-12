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
            <h3>DJSET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste1.webp">
              <img loading="lazy" class="follow f2" src="images/artiste1.webp">
              <img loading="lazy" class="follow f1" src="images/artiste1.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">chapelier fou ensemb7e</h2>
            <h3>DJSET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste2.webp">
              <img loading="lazy" class="follow f2" src="images/artiste2.webp">
              <img loading="lazy" class="follow f1" src="images/artiste2.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">dj marcelle</h2>
            <h3>DJSET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste3.webp">
              <img loading="lazy" class="follow f2" src="images/artiste3.webp">
              <img loading="lazy" class="follow f1" src="images/artiste3.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">djrum live</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste4.webp">
              <img loading="lazy" class="follow f2" src="images/artiste4.webp">
              <img loading="lazy" class="follow f1" src="images/artiste4.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">esther</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste5.webp">
              <img loading="lazy" class="follow f2" src="images/artiste5.webp">
              <img loading="lazy" class="follow f1" src="images/artiste5.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">giant swan live</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste6.webp">
              <img loading="lazy" class="follow f2" src="images/artiste6.webp">
              <img loading="lazy" class="follow f1" src="images/artiste6.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">hysteria temple fondation</h2>
            <h3>(paul ritch + kmyle) live - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste7.webp">
              <img loading="lazy" class="follow f2" src="images/artiste7.webp">
              <img loading="lazy" class="follow f1" src="images/artiste7.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">jasss</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste8.webp">
              <img loading="lazy" class="follow f2" src="images/artiste8.webp">
              <img loading="lazy" class="follow f1" src="images/artiste8.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">kendal</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste9.webp">
              <img loading="lazy" class="follow f2" src="images/artiste9.webp">
              <img loading="lazy" class="follow f1" src="images/artiste9.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">kiddy smile</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste10.webp">
              <img loading="lazy" class="follow f2" src="images/artiste10.webp">
              <img loading="lazy" class="follow f1" src="images/artiste10.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">lena willikens</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste11.webp">
              <img loading="lazy" class="follow f2" src="images/artiste11.webp">
              <img loading="lazy" class="follow f1" src="images/artiste11.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">louisahhh live band</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste12.webp">
              <img loading="lazy" class="follow f2" src="images/artiste12.webp">
              <img loading="lazy" class="follow f1" src="images/artiste12.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">naranja</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste13.webp">
              <img loading="lazy" class="follow f2" src="images/artiste13.webp">
              <img loading="lazy" class="follow f1" src="images/artiste13.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">pablo bozzi</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste14.webp">
              <img loading="lazy" class="follow f2" src="images/artiste14.webp">
              <img loading="lazy" class="follow f1" src="images/artiste14.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">rebekah</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste15.webp">
              <img loading="lazy" class="follow f2" src="images/artiste15.webp">
              <img loading="lazy" class="follow f1" src="images/artiste15.webp">
            </div>
          </li>
          <li class="imagehover">
            <h2 class="artiste">wallis live</h2>
            <h3>LIVESET - <span>LE BIKINI</span></h3>
            <div class="date">
                <h4>14 <span>sept</span></h4>
            </div>
            <div class="lol">
              <img loading="lazy" class="follow f3" src="images/artiste16.webp">
              <img loading="lazy" class="follow f2" src="images/artiste16.webp">
              <img loading="lazy" class="follow f1" src="images/artiste16.webp">
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

            var test = e.getElementsByClassName('artiste');
            var titleScrolling = this.$gsap.timeline({paused:true}), mySplitText = new SplitType(test , {type:"words,chars"}), chars = mySplitText.chars;
            titleScrolling.from(chars, {delay: 0, duration: 0.1, opacity:0, x:-50, transformOrigin:"0% 50% 100",  ease:"power2.inOut", stagger: 0.1}, "+=0");

            let tll = this.$gsap.timeline({
                    scrollTrigger: {
                    trigger: e,
                    start: "top top+=200px",
                    end: "top top+=50px",
                    scrub: true,
                    toggleActions: "restart none none reverse",
                    onEnterBack: e => titleScrolling.play(),
                    //onLeaveBack: e => titleScrolling.reverse(),
                    onEnter: e => titleScrolling.reverse(),
                    //onLeave: e => titleScrolling.reverse(),
                    //markers: true,
              }
            })
            .fromTo(e,
              {  x: 0, opacity: 1, ease: "none", stagger: 0.5 },
              {  x: -100, opacity: 0, ease: "none", stagger: 0.5}
            )
            let tl = this.$gsap.timeline({
                    scrollTrigger: {
                    trigger: e,
                    start: "bottom bottom",
                    end: "bottom bottom-=100px",
                    scrub: true,
                    toggleActions: "restart none none reverse",
                    onEnterBack: e => titleScrolling.reverse(),
                    //onLeaveBack: e => titleScrolling.reverse(),
                    onEnter: e => titleScrolling.play(),
                    //onLeave: e => titleScrolling.reverse(),
                    //markers: true,
              }
            })
            .fromTo(e,
              {  x: -100, opacity: 0, ease: "none", stagger: 0.5 },
              {  x: 0, opacity: 1, ease: "none", stagger: 0.5}
            )



          });
        },
        sticky() {
            let test = this.$gsap.timeline({
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
            .fromTo(".marque",
              { y: 0, opacity: 1, ease: "none", stagger: 0.5, ease: 'power2.inOut'},
              { y: 100, opacity: 0, ease: "none", stagger: 0.5, ease: 'power2.inOut'}
            )
            let lineup = this.$gsap.timeline({
              scrollTrigger: {
                trigger: ".marquee",
                start: "top top+=75",
                end: "top",
                scrub: true
              }
            })
            .fromTo(".marque",
              { "top": "75px", ease: "none", stagger: 0.5, ease: 'power2.inOut'},
              { "top": "0", ease: "none", stagger: 0.5, ease: 'power2.inOut'}
            )
        }

    },
    mounted() {
        this.follow();
        this.opacity();
        this.sticky();
        this.stickytop();
    }
  }
</script>
