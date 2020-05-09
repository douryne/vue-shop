import firebase from 'firebase'

export const state = () => ({
  items: [
    { title: 'Пылосос', category: 'appliances', price: 2000, id: 1, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Пылосос', category: 'appliances', price: 3200, id: 2, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Пылосос', category: 'appliances', price: 4000, id: 3, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Пылосос', category: 'appliances', price: 4200, id: 4, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Huawei Телефон', category: 'phones', price: 10000, id: 5, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Apple Телефон', category: 'phones', price: 100000000, id: 6, specs: 'govno', src: '/iphone.jpg', hot: true },
    { title: 'SAMSUNG Galaxy S20 8/128Gb', category: 'phones', price: 85000, id: 7, specs: 'govno', src: '/samsung_phone.jpg', slider: false },
    { title: 'Xiomi Телефон', category: 'phones', price: 50000, id: 8, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'LG Монитор', category: 'monitors', price: 15000, id: 9, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'MSI Монитор', category: 'monitors', price: 21000, id: 10, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'ASUS Монитор', category: 'monitors', price: 17000, id: 11, specs: 'govno', src: '/asus_monitor.jpg', hot: true },
    { title: 'Dell Монитор', category: 'monitors', price: 8000, id: 12, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Samsung Телевизор', category: 'TV', price: 100000, id: 13, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'LG Телевизор', category: 'TV', price: 80000, id: 14, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'ASUS Телевизор', category: 'TV', price: 110000, id: 15, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Sony Телевизор', category: 'TV', price: 130000, id: 16, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Lenovo', category: 'laptops', price: 40000, id: 17, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Asus', category: 'laptops', price: 70000, id: 18, specs: 'govno', src: '/iphone.jpg', slider: false },
    { title: 'Macbook', category: 'laptops', price: 100000000, id: 19, specs: 'govno', src: '/macbook.jpg', hot: true },
    { title: 'MSI', category: 'laptops', price: 90000, id: 20, specs: 'govno', src: '/iphone.jpg', slider: false }
  ],
  item: {},
  basket: [],
  email: null,
  filterValue: 'Default'
})

export const getters = {
  filteredItems (state) {
    const array = Array.from(state.items)
    switch (state.filterValue) {
      case 'itemsFromHighPrice':
        return category =>
          category ? array.filter(item => item.category === category).sort((item1, item2) => item2.price - item1.price)
            : array.sort((item1, item2) => item2.price - item1.price)
      case 'itemsFromLowPrice':
        return category =>
          category ? array.filter(item => item.category === category).sort((item1, item2) => item1.price - item2.price)
            : array.sort((item1, item2) => item1.price - item2.price)
      case 'Default':
      default:
        return category =>
          category ? state.items.filter(item => item.category === category) : state.items
    }
  },
  getHotItems (state) {
    return state.items.filter(item => item.hot)
  }
}
export const mutations = {
  getItem (state, item) {
    state.item = item
  },
  updateBasket (state, basket) {
    state.basket = basket
  },
  pushToBasket (state, item) {
    if (!state.basket.filter(({ id }) => id === item.id).length) {
      state.basket.push(item)
    }
  },
  emailChanger (state, email) {
    state.email = email
  },
  clearEmail (state) {
    state.email = null
  },
  updateFilterValue (state, filterValue) {
    state.filterValue = filterValue
  }
}

export const actions = {
  async saveItemInTheBasket ({ dispatch, commit, state }, item) {
    const uid = await dispatch('getUid')
    if (state.email === null) {
      commit('pushToBasket', item)
      localStorage.setItem('basket', JSON.stringify(state.basket))
    } else {
      commit('pushToBasket', item)
      await firebase.database().ref().child(`/users/${uid}`).set({
        items: state.basket
      })
    }
  },
  async removeItem ({ dispatch, commit, state }, item) {
    const uid = await dispatch('getUid')
    if (state.email === null) {
      const basket = JSON.parse(localStorage.getItem('basket'))
      basket.forEach(({ id }, i) => {
        if (item.id === id) { basket.splice(i, 1) }
      })
      commit('updateBasket', basket)
      localStorage.setItem('basket', JSON.stringify(state.basket))
    } else {
      const basket = state.basket.slice()
      basket.forEach(({ id }, i) => {
        if (item.id === id) { basket.splice(i, 1) }
      })
      commit('updateBasket', basket)
      await firebase.database().ref().child(`/users/${uid}`).set({
        items: state.basket
      })
    }
  },
  getUid () {
    const user = firebase.auth().currentUser
    return user ? user.uid : null
  },
  async deleteAllItemsInTheBasket ({ dispatch, commit, state }) {
    const uid = await dispatch('getUid')
    if (state.email === null) {
      const basket = []
      commit('updateBasket', basket)
      localStorage.setItem('basket', JSON.stringify(state.basket))
    } else {
      const basket = []
      commit('updateFirebaseBasket', basket)
      await firebase.database().ref(`/users/${uid}`).set({
        items: state.firebaseBasket
      })
    }
  }
}
