export const state = () => ({
  results: [
    { dateTime: '日曜日', sunshine: '-', price: '' },
    { dateTime: '月曜日', sunshine: '午前', price: '' },
    { dateTime: '月曜日', sunshine: '午後', price: '' },
    { dateTime: '火曜日', sunshine: '午前', price: '' },
    { dateTime: '火曜日', sunshine: '午後', price: '' },
    { dateTime: '水曜日', sunshine: '午前', price: '' },
    { dateTime: '水曜日', sunshine: '午後', price: '' },
    { dateTime: '木曜日', sunshine: '午前', price: '' },
    { dateTime: '木曜日', sunshine: '午後', price: '' },
    { dateTime: '金曜日', sunshine: '午前', price: '' },
    { dateTime: '金曜日', sunshine: '午後', price: '' },
    { dateTime: '土曜日', sunshine: '午前', price: '' },
    { dateTime: '土曜日', sunshine: '午後', price: '' }
  ]
})

export const mutations = {
  add(state, payload) {
    const targetIndex = state.results.findIndex(
      (element) =>
        element.dateTime === payload.dateTime &&
        element.sunshine === payload.sunshine
    )
    state.results[targetIndex] = payload
  }
}
