<template>
  <section>
    <div class="main-content">

      <Intro />
      <Artistes />
      <Lieux />

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
      appear() {
        var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".title", {type:"words,chars"}), chars = mySplitText.words;
          t1.from(chars, {delay: 0.6, duration: 1, opacity:0, y:50, transformOrigin:"0% 50% 100",  ease:"back", stagger: 0.1}, "+=0");
      }
    },
    mounted() {
      this.appear();
    }
  }
</script>
