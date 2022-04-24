// import { exception } from 'vue-gtag'

export default {
  namespaced: true,
  state: {
    assets: []
  },

  getters: {
    contracts (state, getters, rootState) {
      // format to just addresses
      const contracts = rootState.collectionsList?.map(row => row[0].toLowerCase())
      return contracts
    }
  },

  mutations: {
    CLEAR_ASSETS (state) {
      state.assets = []
    },
    SAVE_ASSETS (state, assets) {
      state.assets = state.assets.concat(assets)
    }
  },

  actions: {
    async getAssetsFromOpenSea ({ state, commit, getters, dispatch }, { address, cursor }) {
      try {
        // clear
        if (!cursor) {
          commit('CLEAR_ASSETS')
        }

        // params
        address = address.toLowerCase()
        cursor = cursor ? `&cursor=${cursor}` : ''
        const limit = '&limit=50'
        // filter by our contracts
        if (!getters.contracts) await dispatch('getCollectionsList', null, { root: true })
        const contracts = getters.contracts.map(addr => '&asset_contract_addresses=' + addr.toLowerCase()).join('')

        // fetch...
        const json = await dispatch('fetchFromOpenSea', { path: `/api/v1/assets?owner=${address}${limit}${cursor}${contracts}` }, { root: true })

        // format
        const assets = json.assets.map(asset => ({
          collection: {
            name: asset.asset_contract.name,
            address: asset.asset_contract.address
          },
          tokenId: asset.token_id,
          name: asset.name,
          image: {
            thumb: asset.image_thumbnail_url
          }
        }))

        // save
        commit('SAVE_ASSETS', assets)

        // get next page?
        if (json.next) {
          return dispatch('getAssetsFromOpenSea', { address, cursor: json.next })
        }

        return state.assets
      } catch (e) {
        console.error(e)
      }
    }
  }
}
