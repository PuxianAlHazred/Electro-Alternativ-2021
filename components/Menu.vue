<template>
  <nav class="menu ">
    <img src="images/panthererose.png" class="pink-panth">
    <h3 v-on:click="toggleMenu();" class="menu-span" :class="{'open': menu, 'close': !menu}">MENU</h3>
    <transition name="page_transition" mode="in-out"
      v-on:before-enter="beforeEnter"
            v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:before-leave="beforeLeave"
            v-on:leave="leave"
      v-on:after-leave="afterLeave">
      <div v-show="menu">
          <ul class="list">
              <li class="list-item" v-on:click="toggleMenu">
                <NuxtLink to="/">HOME</NuxtLink>
              </li>
              <li class="list-item" v-on:click="toggleMenu">
                <NuxtLink to="/artistes">ARTISTES</NuxtLink>
              </li>
              <li class="list-item" v-on:click="toggleMenu">
                <NuxtLink to="/lieux">LIEUX</NuxtLink>
              </li>
          </ul>
      </div>
    </transition>

  </nav>
</template>
<style scoped>
  .menu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 1007 !important;
  }
  .pink-panth {
      width: 70px;
      top: 38px;
      position: relative;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      margin-right: 5px;
  }
  .menu-span {
      font-family: "Sequel100Wide45";
      z-index: 1009 !important;
      color: black;
      font-size: 20px;
      text-align: center;
      line-height: 75px;
      position: absolute;
      width: 100px;
      cursor: pointer;
      top: 0;
      right: 75px;
      margin: 0;
      padding-left: 75px;
      background: #f9f69a;
  }
  .list {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 1006 !important;
      padding: 0 200px;
      min-height: 100vh;
      display: inline-flex;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      padding:0;
      margin:0;
  }
  .list-item {
      display: block;
      height: 25%;
      height: calc(100% / 4);
      min-height: 50px;
      position: relative;
      font-family: orchid;
      font-size: 45px;
      color: #fff;
      line-height: 75px;
  }
  .list-item a {
      display: block;
      position: relative;
      color: #FFF;
      text-decoration: none;
      overflow: hidden;
  }
</style>
<script>
export default {
  data: () => ({
    menu: false,
    content: false,
  }),
  methods: {
    appear() {
        this.$gsap.from(".pink-panth", { opacity: 0, ease: 'power2.inOut', duration: 0.5, delay: 7.4});
        var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".menu-span", {type:"words,chars"}), chars = mySplitText.chars;
        t1.from(chars, {delay: 3, duration: 1, opacity:0, y:-50, transformOrigin:"0% 50% 100",  ease:"back", stagger: 0.1}, "+=0");
        let menu = document.querySelector(".menu-span");
        menu.addEventListener("mouseenter", () => {
          this.$gsap.to(".menu-span", { duration: 0.5, opacity:0.5, text: "OPEN", ease: "back", stagger: 0.1});
        });
        menu.addEventListener("mouseleave", () => {
          this.$gsap.to(".menu-span", { duration: 0.2, opacity:1, text: "MENU", ease: "back", stagger: 0.1});
        });
    },
    beforeEnter(el) {
      console.log("MENU : beforeEnter")
    },
    afterEnter(el) {
      this.toggle();
      console.log("MENU : afterEnter")
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
      console.log("MENU : beforeLeave")
      this.toggle();
      let menu = document.querySelector(".menu-span");
      menu.addEventListener("mouseenter", () => {
        this.$gsap.to(".menu-span", { duration: 0.5, opacity:0.5, text: "OPEN", ease: "back", stagger: 0.1});
      });
      menu.addEventListener("mouseleave", () => {
        this.$gsap.to(".menu-span", { duration: 0.2, opacity:1, text: "MENU", ease: "back", stagger: 0.1});
      });
    },
    afterLeave(el) {
      console.log("MENU : afterLeave")
    },
    leave(el, done) {
      console.log("CONTENT : leaave")
        var list = this.$gsap.timeline(), mySplitText = new SplitType(".list-item", {type:"words,chars"}), chars = mySplitText.words;
        list.to(chars, {
          delay: 0,
          duration: 0.4,
          opacity:0,
          y:-50,
          transformOrigin:"0% 50% 100",
          ease:"back",
          stagger: 0.1,
          onComplete: function () {
            setTimeout(function () {
              done()
            }, 2300)
          }
        }, "+=0");
        this.$gsap.set(".list", { background: 'transparent'});

    },
    enter(el, done) {
      var list = this.$gsap.timeline(), mySplitText = new SplitType(".list-item", {type:"words,chars"}), chars = mySplitText.words;
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
      console.log("CONTENT : eenter")
    },

    toggleMenu() {
      this.menu = !this.menu
      if(this.menu === true) {
        console.log("toggleMenu : true")
        this.$gsap.to(".menu-span", {delay: 0.7, duration: 0.5, opacity:1, text: "CLOSE", ease: "back", stagger: 0.1});
      } else {
        console.log("toggleMenu : false")
        this.$gsap.to(".menu-span", {delay: 0.7, duration: 0.5, opacity:1, text: "MENU", ease: "back", stagger: 0.1});
      }
    },
    toggle() {
        this.$store.dispatch('toggled')
    }
  },
  mounted() {
    this.appear();
  },
  computed: {
    preloading () {
      return this.$store.getters['toggled']
    },
  },
}
</script>
