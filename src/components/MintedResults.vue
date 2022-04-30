<template lang="pug">
  section.minted-results
    template(v-if="!mints")
      .fixed.z-50.bottom-0.left-0.animate-pulse.text-black.px-6.py-4.text-md Loading...

    template(v-else)
      .grid.grid-cols-2.sm_grid-cols-3.lg_grid-cols-4.items-end.bg-gray-100
        //- mints...
        template(v-for="mint in mintsFiltered")
          router-link.relative.group.block.mt-32(:to="'/tokens/' + mint.newTokenId")
            .w-full.relative.border
              .pb-full
              .absolute.top-0.left-0.w-full.truncateff.break-all.text-xs
                | from contract<br>{{ mint.contractAddress }}<br>
                | token ID<br>{{ mint.tokenId }}<br><br>
                | new token ID<br>{{ mint.newTokenId }}

            //- img.w-full(:src="`/demo/K2.png`")

            //- original
            //- .absolute.overlay.z-10.transitionff.duration-1000ff.opacity-0.group-hover_opacity-100.bg-gray-100
              img.absolute.overlay.group-hover_animate-pulse2ff(:src="`/demo/K1.png`")

        //- divider
        .col-span-2.sm_col-span-3.lg_col-span-4

        //- demo items...
        template(v-for="n in 'ABCDEFGHIJKLMNOPQR'.split('')")
          router-link.relative.group.block.mt-32(:to="'/tokens/' + n")

            img.w-full(:src="`/demo/${n}2.png`")

            //- original
            .absolute.overlay.z-10.transitionff.duration-1000ff.opacity-0.group-hover_opacity-100.bg-gray-100
              img.absolute.overlay.group-hover_animate-pulse2ff(:src="`/demo/${n}1.png`")

      //- credits
      .bg-gray-100.mt-48
        .w-1x2.lg_w-3x4.text-sm.h-20.flex.items-center.px-6.opacity-25.justify-left
          //- | End

      .sticky.z-10.bottom-0.left-0.w-full
        .absolute.bottom-0.left-0.w-full.h-20.flex.justify-end
          .w-1x2.lg_w-1x4.flex.overflow-hidden
            //- (filters active)
            template(v-if="filters.length")
              .w-full.flex.items-stretch.bg-yellow-500.relative(to="/filter", @click="$emit('showFilters')")
                //- open filters panel btn
                button.flex.w-full.items-center.justify-center.text-sm.uppercase.tracking-wide.mouse_hover_bg-yellow-600(@click="$emit('showFilters')")
                  | Filters<sup class="ml-1 text-gray-400ff">{{ filters.length }}</sup>
                //- clear filters btn
                button.absolute.top-0.right-0.h-full.flex.items-center.w-20.pt-2.text-lg.flex.items-center.justify-center.bg-yellow-500.mouse_hover_bg-yellow-600(@click.stop="$router.replace({ query: {} })")
                  svg-x.h-4.w-4(strokeWidth="1.1")

            //- (open filters btn)
            template(v-else)
              button.w-full.flex.items-center.justify-center.bg-gray-200.relative.mouse_hover_bg-yellow-600(to="/filter", @click="$emit('showFilters')")
                div.text-sm.uppercase.tracking-wide Filter
                .absolute.top-0.right-0.h-full.flex.items-center.w-20.pt-2.text-lg.flex.items-center.justify-center ⍆

</template>

<script>
import { mapState } from 'vuex'
import SvgX from '@/components/SVG-X'
export default {
  name: 'MintedResults',
  components: { SvgX },
  computed: {
    ...mapState(['mints']),

    filters () {
      return this.$route.query.collections?.split(',') || []
    },

    mintsFiltered () {
      let mints = this.mints
      const filterBy = this.filters.map(addr => addr.toLowerCase())
      if (filterBy.length) {
        mints = mints.filter(mint => filterBy.includes(mint.contractAddress.toLowerCase()))
      }
      return mints
    }
  },
  created () {
    this.$store.dispatch('getMints', { cached: false })
  }
}
</script>

<style>
</style>
