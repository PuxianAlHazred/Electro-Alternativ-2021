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
        VanillaTilt.init(document.querySelector(".portfolio-eyes"), {
          reverse: false,
          max: 15,
          speed: 500,
          perspective: 1000,
          scale: 1,
          transition: true,
          "mouse-event-element":  "section",
        });
        var t1 = this.$gsap.timeline(), mySplitText = new SplitType(".title", {type:"words,chars"}), chars = mySplitText.words;
          t1.from(chars, {delay: 0.6, duration: 1, opacity:0, y:50, transformOrigin:"0% 50% 100",  ease:"back", stagger: 0.1}, "+=0");
      },
      scrollpage(){
          var container = document.querySelector(".main-content");
          var height = container.clientHeight;
          document.body.style.height = height + "px";
          this.$gsap.to(container, {
            y: -(height - document.documentElement.clientHeight),
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 0
            }
          });
      }
    },
    mounted() {
      this.appear();
      this.$nextTick(function () {
        this.scrollpage();
      })
    }
  }
</script>
