<template>
    <span class="menu" :class="{'open': menu, 'close': !menu}">+</span>
</template>
<style lang="postcss">
  .menu {
     @apply w-[100px] bottom-[0px] right-[0px] fixed h-[100px] z-50 leading-[100px] text-center text-5xl;
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
