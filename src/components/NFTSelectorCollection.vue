<template lang="pug">
  details
    summary.h-24.flex.items-center.justify-center.relative.cursor-pointer
      | {{ collectionName }} <sup class="ml-1">{{ assetsFiltered.length }}</sup>
      .absolute.top-0.right-0.h-full.flex.items-center.text-xs
        .mr-5.opacity-50 {{ editionsLeft }}/88
        svg-chevron-down.mr-8.h-8.w-8.transform(strokeWidth="1")

    //- div.text-center {{ collection.address }}

    ul.w-full.overflow-x-scroll.whitespace-no-wrap.scrollbars-hidden
      //- assets...
      template(v-for="asset in assetsFiltered")
        li.inline-block.px-8.py-7(:class="{'bg-yellow-500': isSelected(asset) }")
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
  name: 'NFTSelectorCollection',
  components: { SvgChevronDown },
  props: ['collection'],
  mounted () {
    this.$store.dispatch('getEditionsLeft', this.collection.address)
  },
  data () {
    return {
      editionsLeft: '...'
    }
  },
  computed: {
    collectionName () {
      if (this.collection.name === 'Folia') {
        return 'Emoji Script'
      }
      return this.collection.name
    },
    assetsFiltered () {
      let assets = this.collection.assets || []
      if (this.collection.name === 'Folia') {
        assets = assets.filter(asset => {
          const id = Number(asset.tokenId)
          return id >= 2000000 && id <= 2000500
        })
      }
      return assets
    }
  },
  methods: {
    isSelected (asset) {
      return this.selection?.id === asset.id
    }
  }
}
</script>

<style scoped lang="postcss">
details[open] summary .transform{
  @apply rotate-180
}
</style>
