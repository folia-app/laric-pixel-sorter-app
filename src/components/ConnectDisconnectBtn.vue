<template lang="pug">
  //- set height in parent
  .connect-disconnect.flex
    //- (connect btn)
    template(v-if="!$store.state.address")
      button.relative.w-full.mouse_hover_bg-yellow-600(@click="connectWallet")
        | {{ connectLbl }}
        .absolute.top-0.right-0.h-full.flex.items-center.w-24.justify-center.pt-2 ꩜

    //- (disconnect btn)
    template(v-else)
      .relative.w-full.flex.items-center
        .w-full.text-center.pt-1
          addr(:address="$store.state.address")
        button.absolute.top-0.right-0.h-full.flex.items-center.w-24.justify-center.mouse_hover_bg-yellow-600(@click="disconnectWallet", title="Disconnect")
          svg-x.h-5.w-5
</template>

<script>
import Addr from '@/components/Addr'
import SvgX from '@/components/SVG-X'
export default {
  name: 'ConnectDisconnectBtn',
  props: {
    connectLbl: { type: String, default: 'Connect' }
  },
  components: { Addr, SvgX },
  methods: {
    async connectWallet () {
      try {
        await this.$store.dispatch('connect')
      } catch (e) {
        if (e !== 'Modal closed by user') {
          alert('Error connecting wallet!')
        }
      }
    },

    disconnectWallet () {
      this.$store.dispatch('disconnect')
    }
  }
}
</script>

<style>
</style>
