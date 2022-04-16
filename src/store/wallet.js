// import { exception } from 'vue-gtag'

export default {
  namespaced: true,
  state: {
    assets: []
  },

  getters: {
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

        // fetch...
        const json = await fetchFromOpenSea(`${getters.openSeaAPIDomain}/api/v1/assets?owner=${address}${limit}${cursor}`)

        // format
        const assets = json.assets.map(asset => ({
          collectionName: asset.asset_contract.name,
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
