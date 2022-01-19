<template>
    <span class="menu" :class="{'open': menu, 'close': !menu}">+</span>
</template>
<style lang="postcss">
  .menu {
     @apply w-[100px] bottom-[0px] right-[-25px] md:right-[0px] fixed z-50 leading-[10vh] text-center text-5xl;
  }
</style>
<script>
export default {
  data: () => ({
    menu: false,
    content: false
  }),
  methods: {

  },
  mounted() {

  }
}
</script>
