<template>
  <div>
    <div class="border-top">
      <div class="wopper-top">
        <div class="marque">
          <p>LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - </p>
          <p>LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - LINEUP 2021 - </p>
        </div>
      </div>
    </div>
    <div class="border-bottom"></div>
    <Logo />
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
        setTimeout(() => this.$nuxt.$loading.finish(), 7600)
      })

    }
  }
</script>
