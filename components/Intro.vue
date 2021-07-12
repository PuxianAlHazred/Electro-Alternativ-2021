<template>
  <section>
    <div class="accueil ">

      <!-- Image -->
      <div class="fond"></div>

      <!-- Titre EA -->
      <h1>electro<br>alternativ</h1>

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
      enter() {
        console.log("enter")
          var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".accueil h1", {type:"words,chars"}), chars = mySplitText.chars;
            t1.from(chars, {delay: 0, duration: .1, opacity:0, y:-50, transformPerspective:800, transformOrigin:"center", rotationY:180,  ease:"power2.inOut", stagger: 0.1}, "+=0");

      }
    },
    mounted() {
        this.enter();
    }
  }
</script>
