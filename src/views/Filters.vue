<template lang="pug">
  .filters.w-full.relative
    .flex.w-full.overflow-hidden
      //- scrollable column
      .flex-1.h-screen.overflow-y-scroll.scrollbars-hidden.transition.duration-500
        .relative
          header.h-24.z-20.relative.sticky.top-0.left-0.w-full.flex.w-full.items-center.justify-center.bg-gray-50
            router-link.w-24.absolute.top-0.left-0.h-full.flex.items-center.justify-center.mouse_hover_bg-black-a08(to="/") &larr;
            h2.uppercase.tracking-wide Filter

          ul
            //- collections...
            li(v-for="(item, i) in whitelist", :class="{'bg-gray-100': i % 2 === 0}")
              button.h-24.flex.w-full.items-stretch.mouse_hover_bg-gray-200(@click="toggleFilter(item)")
                .w-24.bg-black-a03
                .px-8.flex.items-center {{ item[0] }}

    //- .flex.w-full
      //- scrollable column
      .flex-1.relative.h-screen.overflow-y-scroll.scrollbars-hiddenff.transition.duration-500
        ul.p-10
          h6.font-bold Collections
          li [ ] Mutant Garden Seeder
          li [ ] ...
</template>

<script>
import whitelist from '@/whitelist'
export default {
  name: 'FilterIndex',
  data () {
    return {
      whitelist
    }
  },
  methods: {
    toggleFilter (collection) {
      // const networkIndex = this.$store.state.networkId === 4 ? 2 : 1
      // const address = collection[networkIndex]
      // this.$router.push({ params: { collection: }})
    }
  }
}
</script>

<style>
</style>
