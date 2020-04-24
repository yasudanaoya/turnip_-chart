export const state = () => ({
  results: []
})

export const mutations = {
  add(state, payload) {
    state.results.push(payload)
  }
}
