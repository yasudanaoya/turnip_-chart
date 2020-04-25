export const state = () => ({
  results: [
    { dateTime: '日曜日', sunshine: '-', price: '-' },
    { dateTime: '月曜日', sunshine: 'am', price: '-' },
    { dateTime: '月曜日', sunshine: 'pm', price: '-' },
    { dateTime: '火曜日', sunshine: 'am', price: '-' },
    { dateTime: '火曜日', sunshine: 'pm', price: '-' },
    { dateTime: '水曜日', sunshine: 'am', price: '-' },
    { dateTime: '水曜日', sunshine: 'pm', price: '-' },
    { dateTime: '木曜日', sunshine: 'am', price: '-' },
    { dateTime: '木曜日', sunshine: 'pm', price: '-' },
    { dateTime: '金曜日', sunshine: 'am', price: '-' },
    { dateTime: '金曜日', sunshine: 'pm', price: '-' },
    { dateTime: '土曜日', sunshine: 'am', price: '-' },
    { dateTime: '土曜日', sunshine: 'pm', price: '-' }
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
