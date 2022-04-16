<template lang="pug">
  section.nft-selector
    //- (loading)
    template(v-if="!collections")
      .h-24.flex.items-center.justify-center.bg-gray-100(:class="{'animate-pulse': status.includes('...') }")
        | {{ status }}

    //-
    template(v-else)
      //- collections...
      template(v-for="(collection, i) in collections")
        details.bg-gray-100(:class="{'bg-gray-200': i % 2 !== 0}")
          summary.h-24.flex.items-center.justify-center.relative.cursor-pointer
            | {{ collection.name }} <sup class="ml-1">{{ collection.assets.length }}</sup>
            .absolute.top-0.right-0.h-full.flex.items-center.text-xs
              .mr-5.opacity-50 0/88
              svg-chevron-down.mr-8.h-8.w-8.transform(strokeWidth="1")

          ul.w-full.overflow-x-scroll.whitespace-no-wrap.scrollbars-hidden
            //- assets...
            li.inline-block.px-8.py-7(v-for="asset in collection.assets", :class="{'bg-yellow-500': isSelected(asset) }")
              figure.w-48
                .relative.w-full.h-48
                  img.absolute.overlay.object-contain.object-left-bottom(:src="asset.image.thumb")
                  //- select button
                  button.absolute.overlay(@click="$emit('selected', asset)", aria-label="Select NFT")

                //- caption
                figcaption.text-xs
                  .w-full.truncate \#{{ asset.tokenId }}
                  .w-full.truncate(v-html="asset.name || '&nbsp;'")
</template>

<script>
import SvgChevronDown from '@/components/SvgChevronDown'

export default {
  name: 'NFTSelector',
  components: { SvgChevronDown },
  props: ['address', 'selection'],

  created () {
    this.getCollections()
  },

  data () {
    return {
      status: 'Loading...',
      collections: null
    }
  },

  methods: {
    isSelected (asset) {
      return this.selection?.id === asset.id
    },

    async getCollections () {
      try {
        this.status = 'Loading...'

        // fetch...
        const assets = await this.$store.dispatch('wallet/getAssetsFromOpenSea', { address: this.address })

        // get names
        let collections = assets.map(asset => asset.collectionName)
        // dedupe names
        collections = [...new Set(collections)] // dedupe
        // fill with assets
        collections = collections.map(name => ({
          name,
          assets: assets
            .filter(asset => asset.collectionName === name)
            .map(asset => ({
              id: asset.collectionName + asset.tokenId,
              ...asset
            }))
        }))

        this.collections = collections
      } catch (e) {
        console.error(e)
        this.status = 'Erorr Loading Wallet'
      }
    }
  }
}
</script>

<style scoped lang="postcss">
details[open] summary .transform{
  @apply rotate-180
}
</style>
