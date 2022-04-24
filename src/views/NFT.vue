<template lang="pug">
  article.work.w-full.relative

    .flex.w-full
      //- main
      .flex-1.relative.h-screen.overflow-y-scroll.scrollbars-hidden.transition.duration-500
        .w-full.grid.grid-cols-2
          //- left col
          figure.bg-gray-200.group.relative
            //- .pb-full
            img.w-full.block(:src="`/demo/${$route.params.work}2.png`")
            //- original
            .absolute.overlay.z-10.transition.duration-1000.opacity-0.group-hover_opacity-100
              img.absolute.overlay.group-hover_animate-pulse2(:src="`/demo/${$route.params.work}1.png`")

          //- right col
          section.flex.flex-col.bg-gray-50
            header.p-8.text-gray-400
              .flex.justify-between
                h1.line-throughff.text-black Decomposed ...
                //- div {{ '#' + $route.params.work }}
              div
                | #[span.text-sm from] #[router-link(to="/").text-black.border-b.border-gray-300.border-dotted.hover_border-solid Mutant Garden Seeder] #[sup.text-xs.text-gray-400 88]
              //- (minted by)
              div(v-if="true || mintedBy && owner && owner !== mintedBy")
                | #[span.text-sm minter] #[a.border-b.border-gray-300.border-dotted.hover_border-solid(v-if="mintedBy", :href="$store.getters.openSeaLink({ account: mintedBy })", target="_blank", rel="noopener noreferrer") #[addr.text-black(:address="mintedBy", :openSeaEnabled="true")]]#[template(v-else) ...]
              //- (owner)
              div
                | #[span.text-sm owner] #[a.border-b.border-gray-300.border-dotted.hover_border-solid(v-if="owner", :href="$store.getters.openSeaLink({ account: owner })", target="_blank", rel="noopener noreferrer") #[addr.text-black(:address="owner", :openSeaEnabled="true")]]#[template(v-else) ...]

              //- div
                | #[span.text-sm.mt-8.text-gray-400 ID] #[router-link(to="/").border-b.border-gray-300 Mutant Garden Seeder] #[sup.text-xs.text-gray-400 88]
              //- div.text-gray-400.text-sm.mt-8
                div color range: 168
                div rows: 144
                div density: 10
                div ...
            .flex-1
            footer.flex.justify-end.p-8.text-xxs.text-gray-300
              a.hover_text-black(:href="$store.getters.openSeaLink({ token: $route.params.token })", target="_blank", rel="noopener noreferrer") OpenSea ↗

        footer
          h6.block.w-full.px-6.pt-48.pb-4.text-smm.border-tff.bg-gray-100
            | More from Mutant Garden Seeder
          .grid.grid-cols-4.items-end
            template(v-for="n in 'ABCDEFGHIJKLMNOPQR'.split('')")
              router-link.relative.group.block.transition.duration-1000(:to="'/works/' + n")

                img.w-full(:src="`/demo/${n}2.png`")

                //- original
                .absolute.overlay.z-10.transition.duration-1000.opacity-0.group-hover_opacity-100
                  img.absolute.overlay.group-hover_animate-pulse2(:src="`/demo/${n}1.png`")

          //- h6.p-8 More from "Collection"
          //- section.grid.grid-cols-4
            template(v-for="n in 88")
              router-link.block.relative.border-b.border-gray-100.hover_bg-gray-300.transition.duration-1000(:to="'/works/' + n", :class="{'bg-gray-50': !(n % 2), 'bg-gray-100': n % 2}")
                .pb-full
                  .absolute.overlay.flex.items-center.justify-center.text-sm.opacity-10 {{ n }}

          .sticky.z-10.bottom-0.left-0.w-full.h-28.flex.text-sm
            router-link.w-1x2.flex.items-center.justify-center.bg-gray-200.relative(to="/")
              .w-28.h-full.flex.items-center.justify-center.absolute.top-0.left-0.pt-2 &larr;
              div View All
            router-link.w-1x2.flex.items-center.justify-center.bg-gray-300.relative(to="/mint")
              div Mint New
              .w-28.h-full.flex.items-center.justify-center.absolute.top-0.right-0 ꩜
</template>

<script>
import Addr from '@/components/Addr'
export default {
  name: 'NFT',
  components: { Addr },
  created () {
    this.getOwner()
    this.getMintedBy()
  },
  data () {
    return {
      owner: undefined,
      mintedBy: undefined
    }
  },
  methods: {
    async getOwner () {
      this.owner = await this.$store.dispatch('getNFTOwnerByTokenId', this.$route.params.token)
    },
    async getMintedBy () {
      try {
        await this.$store.dispatch('getMinted', { cached: true })
        const mint = this.$store.state.minted.find(mint => mint.newTokenId === this.$route.params.token)
        console.log(mint, this.$store.state.minted)
        if (mint) {
          this.mintedBy = (await mint.getTx()).from
        }
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style>
</style>
