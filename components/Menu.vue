<template>
  <nav class="menu ">
    <Panthere :typee="'menu'" class="pink-panth"/>
    <h3 v-on:click="toggleMenu();" class="menu-span" :class="{'open': menu, 'close': !menu}">MENU</h3>
    <transition name="page_transition" mode="in-out"
      v-on:before-enter="beforeEnter"
            v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
            v-on:leave="leave"
      v-on:after-leave="afterLeave">
      <div v-show="menu" class="content-menu">
          <ul class="list">
              <li class="list-item" v-on:click="toggleMenu">
                <NuxtLink to="/"><h4>LE FESTIVAL</h4></NuxtLink>
              </li>
              <li class="list-item" v-on:click="toggleMenu">
                <NuxtLink to="/artistes"><h4>ARTISTES</h4></NuxtLink>
              </li>
              <li class="list-item" v-on:click="toggleMenu">
                <NuxtLink to="/lieux"><h4>LIEUX</h4></NuxtLink>
              </li>
              <li class="list-item">
                <a target="_blank" href="https://regarts.festik.net/evenements"><h4>BILLETTERIE</h4></a>
              </li>
              <li class="list-item">
                <a target="_blank" href="https://shop.regarts.eu/collections/electro-alternativ "><h4>MERCH</h4></a>
              </li>
              <li class="list-item">
                <div class="social">
                  <a target="_blank" href="https://www.facebook.com/events/815885182336796" class="FB">FACEBOOK</a>
                  <a target="_blank" href="https://www.instagram.com/electroalternativ/" class="INSTA">INSTAGRAM</a>
                  <a target="_blank" href="https://open.spotify.com/playlist/5P6DlxBfkAvBwhJx9XxO0A" class="SPOTIFY">SPOTIFY</a>
                </div>
              </li>
          </ul>

      </div>
    </transition>

  </nav>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    content: false
  }),
  methods: {
    appear() {
        var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".menu-span", {type:"words,chars"}), chars = mySplitText.chars;
        t1.from(chars, {delay: 5.7, duration: 1, opacity:0, y:-50, transformOrigin:"0% 50% 100",  ease:"back", stagger: 0.1}, "+=0");
        t1.fromTo(".intro-panth.menu", { opacity: 0, ease: 'power2.inOut', duration: 1, delay: 0}, { opacity: 1, ease: 'power2.inOut', duration: 1, delay: 0});

        let menu = document.querySelector(".menu-span");
        menu.addEventListener("mouseenter", () => {
          this.$gsap.to(".menu-span", { duration: 0.5, opacity:0.5, text: "OPEN", ease: "back", stagger: 0.1});
        });
        menu.addEventListener("mouseleave", () => {
          this.$gsap.to(".menu-span", { duration: 0.2, opacity:1, text: "MENU", ease: "back", stagger: 0.1});
        });
    },
    beforeEnter(el) {
      //console.log("MENU : beforeEnter")
    },
    afterEnter(el) {
      //console.log("MENU : afterEnter")
      this.$gsap.set(".list", { background: '#95165d'});



      let menu = document.querySelector(".menu-span");
      menu.addEventListener("mouseenter", () => {
        this.$gsap.to(".menu-span", { duration: 0.5, opacity:0.5, text: "MENU", ease: "back", stagger: 0.1});
      });
      menu.addEventListener("mouseleave", () => {
        this.$gsap.to(".menu-span", { duration: 0.2, opacity:1, text: "CLOSE", ease: "back", stagger: 0.1});
      });
    },
    beforeLeave(el) {
      //console.log("MENU : beforeLeave")

      let menu = document.querySelector(".menu-span");
      menu.addEventListener("mouseenter", () => {
        this.$gsap.to(".menu-span", { duration: 0.5, opacity:0.5, text: "OPEN", ease: "back", stagger: 0.1});
      });
      menu.addEventListener("mouseleave", () => {
        this.$gsap.to(".menu-span", { duration: 0.2, opacity:1, text: "MENU", ease: "back", stagger: 0.1});
      });
    },
    afterLeave(el) {

      //console.log("MENU : afterLeave")
    },
    leave(el, done) {
        //console.log("CONTENT : leaave")

        var retour = this.$gsap.to(".list-item:last-child", { opacity: 0, y:50, transformOrigin:"0% 50% 100", ease: 'back', duration: .4, delay: 0});
        var panth = this.$gsap.to(".intro-panth.menu .shp0", { 'fill': '#95165d', ease: 'back', duration: .4, delay: 1});
        var list = this.$gsap.timeline(), mySplitText = new SplitType(".list-item h4", {type:"words,chars"}), chars = mySplitText.words;
        list.to(chars, {
          delay: 0,
          duration: 0.4,
          opacity:0,
          y:-50,
          transformOrigin:"0% 50% 100",
          ease:"back",
          stagger: 0.1,
          onComplete: function () {
            this.animation === false;
            setTimeout(function () {
              done()
            }, 500)
          }
        }, "+=0");
        this.$gsap.set(".list", { background: 'transparent'});

    },
    enter(el, done) {

      var aller = this.$gsap.to(".list-item:last-child", { opacity: 1, y:0, transformOrigin:"0% 0% 100", ease: 'back', duration: .4, delay: 1});
      var panth = this.$gsap.to(".intro-panth.lieu .shp0", { 'fill': '#f9f69a', ease: 'back', duration: .4, delay: 1});

      var list = this.$gsap.timeline(), mySplitText = new SplitType(".list-item h4", {type:"words,chars"}), chars = mySplitText.words;
      list.from(chars, {
        delay: 1,
        duration: 0.6,
        opacity:0,
        y:-50,
        transformOrigin:"0% 50% 100",
        ease:"back",
        stagger: 0.1,
        onComplete: function () {
          done()
        }
      }, "+=0");
      //console.log("CONTENT : eenter")
    },

    toggleMenu() {
      this.menu = !this.menu
      if(this.menu === true) {
        //console.log("toggleMenu : true")
        this.$gsap.to(".menu-span", {delay: 0.7, duration: 0.5, opacity:1, text: "CLOSE", ease: "back", stagger: 0.1});
      } else {
        //console.log("toggleMenu : false")
        this.$gsap.to(".menu-span", {delay: 0.7, duration: 0.5, opacity:1, text: "MENU", ease: "back", stagger: 0.1});
      }
    },

  },
  mounted() {
    this.appear();
  }
}
</script>
