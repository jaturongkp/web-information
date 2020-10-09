export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    { text: 'Lastname', value: 'lastnamein' },
    { text: 'Username', value: 'usernamein' },
    { text: 'Password', value: 'passwordin' },
    { text: 'Email', value: 'emailin' },
    { text: 'Address', value: 'addressin' },
    { text: 'PhoneNumber', value: 'phonenumberin' }
  ]
})
export const mutations = {
  input (state, { name, lastnamein, usernamein, passwordin, emailin, addressin, phonenumberin }) {
    state.data.push({ name, lastnamein, usernamein, passwordin, emailin, addressin, phonenumberin })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}
