<template>
  <div :class="{'isDesktop': this.$device.isDesktop, 'isMobile': this.$device.isMobile, 'isTablet': this.$device.isTablet,}" >
    <div class="border-top">
      <div class="wopper-top" :class="this.$route.name">
        <div class="marque marquelineup">
          <p> 10 / 11 / 14 / 15 / 16 / 17 / 18 - <span>SEPTEMBRE</span> - </p>
          <p> 10 / 11 / 14 / 15 / 16 / 17 / 18 - <span>SEPTEMBRE</span> - </p>
          <p> 10 / 11 / 14 / 15 / 16 / 17 / 18 - <span>SEPTEMBRE</span> - </p>
          <p> 10 / 11 / 14 / 15 / 16 / 17 / 18 - <span>SEPTEMBRE</span> - </p>
          <p> 10 / 11 / 14 / 15 / 16 / 17 / 18 - <span>SEPTEMBRE</span> - </p>
          <p> 10 / 11 / 14 / 15 / 16 / 17 / 18 - <span>SEPTEMBRE</span> - </p>
          <p> 10 / 11 / 14 / 15 / 16 / 17 / 18 - <span>SEPTEMBRE</span> - </p>
          <p> 10 / 11 / 14 / 15 / 16 / 17 / 18 - <span>SEPTEMBRE</span> - </p>
        </div>
      </div>
      <div class="cover-wooper"></div>
    </div>
    <div class="border-bottom">
      <div class="sound">
        <div v-if="this.$store.state.muted" v-on:click="mute()" class="play">&#9205;</div>
        <div v-else="!this.$store.state.muted" v-on:click="mute()" class="pause">&#9208;</div>
      </div>
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
    </div>
    <Logo  v-if="!this.$store.state.preloading" />
    <Menu />
    <Nuxt v-if="!this.$store.state.preloading" />
  </div>
</template>

<style>

  .svg-filter {
    visibility: hidden;
    height: 0;
  }
</style>

<script>
  export default {
    methods: {
      mute() {
        this.$store.dispatch('muteed')
      }
    },
    computed: {
      muteeed () {
        return this.$store.getters['muteed']
      },
    },
    mounted() {
      this.$gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
      })
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 4900)
      })
    }
  }
</script>
