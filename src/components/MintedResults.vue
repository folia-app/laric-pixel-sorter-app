<template lang="pug">
  .minted-results.grid.grid-cols-2.sm_grid-cols-3.lg_grid-cols-4.items-end.bg-gray-100
    template(v-if="mints")
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
    .col-span-4

    //- demo items...
    template(v-for="n in 'ABCDEFGHIJKLMNOPQR'.split('')")
      router-link.relative.group.block.mt-32(:to="'/tokens/' + n")

        img.w-full(:src="`/demo/${n}2.png`")

        //- original
        .absolute.overlay.z-10.transitionff.duration-1000ff.opacity-0.group-hover_opacity-100.bg-gray-100
          img.absolute.overlay.group-hover_animate-pulse2ff(:src="`/demo/${n}1.png`")

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MintedResults',
  computed: {
    ...mapState(['mints']),

    mintsFiltered () {
      let mints = this.mints
      let filterBy = this.$route.query.collections?.split(',') || []
      filterBy = filterBy.map(addr => addr.toLowerCase())
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
