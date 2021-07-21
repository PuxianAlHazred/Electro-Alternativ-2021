<template>
  <div class="logo">

    <NuxtLink to="/">
      <h1 class="title-logo">ea</h1>
    </NuxtLink>
    <h2 class="ea-date">{{this.$route.name}}</h2>
  </div>
</template>
<style scoped>
  .logo {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1007 !important;
  }
  .logo a {
      text-decoration: none;
  }
  .title-logo {
      color: black;
      margin: 0;
      max-width: 60px;
      font-size: 85px;
      word-wrap: break-word;
      line-height: 70px;
      padding: 0 7.5px;
  }
  .logo h2 {
      font-family: "Sequel100Wide45";
      font-size: 16px;
      position: absolute;
      width: max-content;
      top: 0;
      left: 75px;
      margin: 0;
      line-height: 75px;
      text-transform: uppercase;
      color: #95165d;
      font-weight: lighter;
  }
  .ea-date {
      padding-right: 75px;
      background: #f9f69a;
  }
</style>
<script>
export default {
  methods: {
    appear() {
      var h1 = this.$gsap.timeline(), mySplitText = new SplitType(".title-logo", {type:"words,chars"}), chars = mySplitText.chars;
        h1.from(chars, {delay: 1, duration: 1, opacity:0, x:-50, transformOrigin:"0% 50% 100",  ease:"back", stagger: 0.5}, "+=0");
      var h2 = this.$gsap.timeline(), mySplitText = new SplitType(".logo h2", {type:"words,chars"}), words = mySplitText.words;
        h2.from(words, {delay: 1, duration: 1, opacity:0, y:-50, transformOrigin:"0% 50% 100",  ease:"back", stagger: 0.1}, "+=0");
    },
  },
  created() {
  },
  mounted() {
    this.appear();
    if(this.$store.state.preloading === false) {
      console.log("IORE 1")
    } else {
      console.log("IORE 2")
    }
  }
}
</script>
