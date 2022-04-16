<template lang="pug">
  aside.shred.w-full.relative

    .flexff.w-full.overflow-hidden
      //- main / left col
      .flex-1.relative.h-screen.overflow-y-scroll.scrollbars-hidden.transition.duration-500
        header
          h2.h-24.flex.w-full.items-center.justify-center.bg-gray-100
            | Mint Decomposed NFT
        p.p-8.leading-relaxed Connect your wallet and select an elligible NFT to decompose and mint into a new NFT. You will not lose your original NFT. The new one will be minted into your wallet.

        ol
          li.bg-gray-200.relative
            //- .absolute.z-10.left-0.top-0.h-24.w-24.flex.items-center.justify-center.bg-gray-300 1
            //- step label
            //- .flex.h-24.relative(v-if="$store.state.address")
              .flex.w-full.items-center.justify-center.bg-gray-100ff
                | Connect Wallet
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>

            .flex.h-24.relative
              connect-disconnect-btn.flex-1.bg-gray-200(connectLbl="Connect Wallet")

          li.bg-gray-300(:class="{'opacity-25': !isConnected}")
            .flex.h-24.relative
              .absolute.z-10.left-0.top-0.h-full.w-24.flex.items-center.justify-center.bg-black-a15 1
              .flex.w-full.items-center.justify-center.bg-gray-100ff Select NFT

            template(v-if="isConnected")
              //- collections...
              template(v-for="(collection, i) in [['Folia', 3], ['Mutant Garden Seeder', 1]]")
                details.bg-gray-50(:class="{'bg-gray-100': i % 2 !== 0}")
                  summary.h-24.flex.items-center.justify-center.relative.cursor-pointer
                    | {{ collection[0] }} <sup class="ml-1">{{ collection [1] }}</sup>
                    .absolute.top-0.right-0.h-full.w-24.flex.items-center.justify-center.transform
                      svg-chevron-down.h-8.w-8(strokeWidth="1")

                  div.bg-gray-100
                    | hellow

          li.bg-gray-300(:class="{'opacity-25': !isConnected || !selection}")
            .flex.h-24.relative
              .absolute.z-10.left-0.top-0.h-full.w-24.flex.items-center.justify-center.bg-black-a15 2
              .flex.w-full.items-center.justify-center.bg-gray-100ff Mint

    //- footer.sticky.bottom-0.left-0.w-full
      .h-24 Mint

</template>

<script>
import ConnectDisconnectBtn from '@/components/ConnectDisconnectBtn'
import SvgChevronDown from '@/components/SvgChevronDown'
export default {
  name: 'MintView',
  components: { ConnectDisconnectBtn, SvgChevronDown },
  computed: {
    isConnected () {
      return this.$store.state.address
    }
  },
  data () {
    return {
      selection: null
    }
  }
}
</script>

<style scoped lang="postcss">
details[open] summary .transform{
  @apply rotate-180
}
</style>
