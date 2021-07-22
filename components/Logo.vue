<template>
  <div class="logo">

    <NuxtLink to="/">
      <h1 class="title-logo">ea</h1>
    </NuxtLink>
    <h2 class="ea-title-page">{{this.$route.name}}</h2>
  </div>
</template>
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
