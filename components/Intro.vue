<template>
  <section class="intro ">

      <h1 class="text-white w-full font-title ">ELECTRO ALTERNATIV</h1>

  </section>
</template>
<style lang="postcss">
  .intro {
    @apply flex items-center text-center justify-center m-[100px];
     width:calc(100vw - 200px);
     height:calc(100vh - 200px);
     font-size:10em;
     line-height:1em;
  }
</style>
<script>
  export default {
    data: () => ({
    }),
    props: {
      titre: {
        type: String,
        required: true
      }
    },
    computed: {
    },
    methods: {
      enter() {
          var t1 = this.$gsap.timeline(), mySplitText = new SplitType("h1", {type:"words,chars"}), chars = mySplitText.chars;
          t1.from(chars, {delay: 0.5, duration: .1, opacity:0, y:-50, transformPerspective:800, transformOrigin:"center", rotationY:180,  ease:"power2.inOut", stagger: 0.1}, "+=0");
      },
    },
    mounted() {
        this.enter();
    }
  }
</script>
