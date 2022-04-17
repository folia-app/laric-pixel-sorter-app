<template lang="pug">
  details
    summary.h-24.flex.items-center.justify-center.relative.cursor-pointer
      | {{ collection.name }} <sup class="ml-1">{{ collection.assets.length }}</sup>
      .absolute.top-0.right-0.h-full.flex.items-center.text-xs
        .mr-5.opacity-50 {{ editionsLeft }}/88
        svg-chevron-down.mr-8.h-8.w-8.transform(strokeWidth="1")

    //- div.text-center {{ collection.address }}

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
