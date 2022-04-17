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
    },
    openSeaAPIDomain (state, getters, rootState) {
      const prefix = rootState.networkId === 1 ? '' : 'testnets-'
      return `https://${prefix}api.opensea.io`
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
        const json = await fetchFromOpenSea(`${getters.openSeaAPIDomain}/api/v1/assets?owner=${address}${limit}${cursor}${contracts}`)

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

// HELPERS

export async function fetchFromOpenSea (url) {
  try {
    const resp = await fetch(url, {
      // headers: {
      // "X-API-KEY: [YOUR_API_KEY]"
      // }
    })

    if (resp.status === 200) {
      // good!
      const json = await resp.json()
      return json
    } else if (resp.status === 429) {
      // throttled... wait a second
      return new Promise(resolve => setTimeout(() => resolve(fetchFromOpenSea(url)), 1000))
    } else {
      // other error
      const text = await resp.text()
      throw new Error('OpenSea API:' + text)
    }
  } catch (e) {
    console.error(e)
    throw e
  }
}
