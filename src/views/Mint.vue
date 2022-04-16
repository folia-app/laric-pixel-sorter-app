<template lang="pug">
  aside.shred.w-full.relative

    .flex.w-full.overflow-hidden
      //- main / left col
      .flex-1.h-screen.overflow-y-scroll.scrollbars-hidden.transition.duration-500
        .relative
          header.h-24.z-20.relative.sticky.top-0.left-0.w-full.flex.w-full.items-center.justify-center.bg-gray-100
            router-link.w-24.absolute.top-0.left-0.h-full.flex.items-center.justify-center.mouse_hover_bg-black-a08(to="/") &larr;
            h2 Mint Decomposed NFT

          p.pt-8.px-8.leading-relaxed
            | {{ !isConnected ? 'Connect your wallet to select an elligible NFT' : 'Select an elligible NFT from your wallet' }} to decompose and mint into a new NFT. You will not lose your original NFT. The new one will be minted into your wallet.

          .mt-3.flex.justify-end
            .h-12.bg-gray-100.text-xs.px-6.flex.items-center Minted 0/888

          ol
            li.bg-gray-200.relative
              .absolute.z-10.left-0.top-0.h-24.w-24.flex.items-center.justify-center.bg-black-a15 1
              //- step label
              //- .flex.h-24.relative(v-if="$store.state.address")
                .flex.w-full.items-center.justify-center.bg-gray-100ff
                  | Connect Wallet
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>

              .flex.h-24.relative
                connect-disconnect-btn.flex-1(connectLbl="CONNECT WALLET", :class="{'bg-yellow-500': !isConnected}")

            li
              .flex.h-36.relative.bg-gray-300(:class="{'opacity-50': !isConnected, 'bg-yellow-500': isConnected && !selection}")
                .absolute.z-10.left-0.top-0.h-full.w-36.flex.items-center.justify-center.bg-black-a15 2
                .flex.w-full.items-center.justify-center.bg-gray-100ff.uppercase.tracking-wide Select

              //- (colletions)
              template(v-if="isConnected")
                nft-selector(:address="$store.state.address", :selection="selection", @selected="$event => { selection = $event }", :key="$store.state.address",)

          //- (selection overlay)
          button.absolute.overlay.bg-black-a60(v-if="selection", @click="clearSelection")

          footer.sticky.bottom-0.left-0.w-full.bg-white
            .bg-gray-300(:class="{'opacity-25': !isConnected, 'opacity-75': isConnected && !selection}")
              //- (selection)
              .flex.items-center(v-if="selection")
                //- thumb
                .relative.w-48.h-48
                  img.absolute.overlay.object-cover(:src="selection.image.thumb")
                //- label
                .flex-1.min-w-0.inline.px-8
                  .truncate.opacity-25.text-sm {{ selection.collectionName }}
                  .truncate.font-bold.mt-1
                    .inline {{ selection.name || '#' + selection.tokenId }}

                  div.opacity-25ff.text-sm.mt-1.mb-1 0.08 ETH

                //- remove "X" btn
                button.w-48.h-48.flex.items-center.justify-center.mouse_hover_bg-black-a15(@click="clearSelection")
                  svg-x.h-5.w-5

              //- mint btn
              button.block.w-full.relative(:disabled="!selection", :class="{'bg-yellow-500 mouse_hover_bg-yellow-600': selection}")
                .absolute.z-10.left-0.top-0.h-full.w-48.flex.items-center.justify-center.bg-black-a15 3
                .flex.h-48.w-full.items-center.justify-center.uppercase.tracking-wide.relative
                  | Mint
                  //- .absolute.bottom-0.left-0.w-full.pb-2.text-xxs.text-center.opacity-50(v-if="selection") 0.08 ETH
                //- (icon)
                .absolute.w-48.h-full.top-0.right-0.flex.items-center.justify-center(v-if="selection") ꩜

</template>

<script>
import ConnectDisconnectBtn from '@/components/ConnectDisconnectBtn'
import NftSelector from '@/components/NFTSelector'
import SvgX from '@/components/SVG-X'
export default {
  name: 'MintView',
  components: { ConnectDisconnectBtn, NftSelector, SvgX },
  watch: {
    isConnected (connected) {
      return !connected && this.clearSelection()
    }
  },
  computed: {
    isConnected () {
      return this.$store.state.address
    }
  },
  data () {
    return {
      selection: null
    }
  },
  methods: {
    clearSelection () {
      this.selection = null
    }
  }
}
</script>
