<template lang="pug">
  .chart.sticky.bottom-0.left-0.p-10(v-if="dataset")
    //- mini chart
    div(@click="large = true", style="width:100px")
      .pointer-events-none
        chart-pie-minted(key="0", :dataset="dataset", :mini="true", size="100")

    div(v-if="large", style="width:200px")
      chart-pie-minted(key="1", :dataset="dataset", size="200")
</template>

<script>
import whitelist from '@/whitelist'
import ChartPieMinted from '@/components/ChartPieMinted'
export default {
  name: 'Chart',
  components: { ChartPieMinted },
  data () {
    return {
      large: false
    }
  },
  computed: {
    dataset () {
      let dataset
      const mints = this.$store.state.mints
      if (mints) {
        let mintedContracts = mints.map(mint => mint.contractAddress)
        mintedContracts = [...new Set(mintedContracts)] // de-dupe
        // fill...
        dataset = mintedContracts.map(addr => {
          addr = addr.toLowerCase()
          const contractInfo = whitelist.find(collection => collection[2].toLowerCase() === addr || collection[3]?.toLowerCase() === addr)
          return {
            label: contractInfo ? contractInfo[0] : addr,
            color: '#' + addr.slice(-6),
            count: this.$store.state.mints.filter(mint => mint.contractAddress.toLowerCase() === addr.toLowerCase()).length
          }
        })
      }
      return dataset
    }
  }
}
</script>

<style>
</style>
