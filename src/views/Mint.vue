<template lang="pug">
  aside.shred.w-full.relative

    .flex.w-full.overflow-hidden
      //- main / left col
      .flex-1.relative.h-screen.overflow-y-scroll.scrollbars-hidden.transition.duration-500
        header
          h2.h-32.flex.w-full.items-center.justify-center.bg-gray-100
            | Mint Decomposed NFT
        p.p-8.leading-relaxed Connect your wallet and select an elligible NFT to decompose and mint into a new NFT. You will not lose your original NFT. The new one will be minted into your wallet.

        ol
          li
            .flex.h-24
              //- .w-24.flex.items-center.justify-center 1
              connect-disconnect-btn.flex-1.bg-gray-300(connectLbl="Connect Wallet")

          template(v-if="$store.state.address")
            div.h-24.flex.items-center.justify-center.bg-gray-100 &darr;

            li
              .flex.h-24.items-center.justify-center Select an NFT...

              details
                summary.h-24.flex.items-enter.justify-center.relative
                  | Folia (FLA)

                div
                  | hellow

    footer.sticky.bottom-0.left-0.w-full
      .h-24 Mint

</template>

<script>
import ConnectDisconnectBtn from '@/components/ConnectDisconnectBtn'
export default {
  name: 'MintView',
  components: { ConnectDisconnectBtn }
}
</script>

<style>
</style>
