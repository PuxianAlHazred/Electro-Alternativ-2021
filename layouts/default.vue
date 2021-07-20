<template>
  <div>
    <div class="border-top">
      <div class="wopper-top">
        <div class="marque marquelineup">
          <p>LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - </p>
          <p>LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - </p>
        </div>
        <div class="marque marquelieu">
          <p>LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - </p>
          <p>LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - LES LIEUX - </p>
        </div>
      </div>
      <div class="cover-wooper"></div>
    </div>
    <div class="border-bottom"></div>
    <Logo  v-if="!this.$store.state.preloading" />
    <Menu />
    <Nuxt v-if="!this.$store.state.preloading" />
  </div>
</template>

<style>
</style>

<script>
  export default {
    data: () => ({
    }),
    computed: {
    },
    methods: {

    },
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 4900)
      })

    }
  }
</script>
