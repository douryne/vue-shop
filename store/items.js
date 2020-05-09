import firebase from 'firebase'

export const state = () => ({
  items: [
    { title: 'Coffee machine DELONGHI Magnifica ECAM22.110B', category: 'appliances', price: 24840, id: 1, specs: 'govno', src: '/coffe_machine.jpg', slider: false },
    { title: 'Vacuum cleaner Samsung SC4520', category: 'appliances', price: 4990, id: 2, specs: 'govno', src: '/vacuum_cleaner.jpg', slider: false },
    { title: 'Сonditioner Electrolux EACS-12 HG-B2/N3 Air Gate 2', category: 'appliances', price: 31500, id: 3, specs: 'govno', src: '/conditioner.jpg', slider: false },
    { title: 'Haier HW60-1029AN', category: 'appliances', price: 17990, id: 4, specs: 'govno', src: '/washing_machine.jpg', slider: false },
    { title: 'HUAWEI P30 Pro 256Gb', category: 'phones', price: 54990, id: 5, specs: 'govno', src: '/huawei.jpeg', slider: false },
    { title: 'Apple iPhone 11 Pro 256Gb', category: 'phones', price: 89330, id: 6, specs: 'govno', src: '/iphone.jpg', hot: true },
    { title: 'SAMSUNG Galaxy S20 8/128Gb', category: 'phones', price: 69990, id: 7, specs: 'govno', src: '/samsung_phone.jpg', slider: false },
    { title: 'XIAOMI Mi Note 10 Pro 256Gb', category: 'phones', price: 44000, id: 8, specs: 'govno', src: '/xiaomi.jpg', slider: false },
    { title: 'LG 29WK600-W 29', category: 'monitors', price: 17790, id: 9, specs: 'govno', src: '/LG_monitor.jpg', slider: false },
    { title: 'MSI Optix MPG27CQ 27', category: 'monitors', price: 44490, id: 10, specs: 'govno', src: '/msi_monitor.png', slider: false },
    { title: 'ASUS ROG Strix XG27VQ', category: 'monitors', price: 31154, id: 11, specs: 'govno', src: '/asus_monitor.jpg', hot: true },
    { title: 'DELL S2719DM 27', category: 'monitors', price: 33490, id: 12, specs: 'govno', src: '/dell.jpg', slider: false },
    { title: 'SAMSUNG QE65Q60RAUXRU Ultra HD 4K', category: 'TV', price: 110900, id: 13, specs: 'govno', src: '/samsung_tv.jpg', slider: false },
    { title: 'LG OLED55C9PLA', category: 'TV', price: 129990, id: 14, specs: 'govno', src: '/lg_tv.jpg', slider: false },
    { title: 'PANASONIC TX-65GXR900 Ultra HD 4K', category: 'TV', price: 80990, id: 15, specs: 'govno', src: '/panasonic.png', slider: false },
    { title: 'SONY KD65XG7096BR2 Ultra HD 4K', category: 'TV', price: 84490, id: 16, specs: 'govno', src: '/sony.jpg', slider: false },
    { title: 'LENOVO IdeaPad S340-14API', category: 'laptops', price: 34990, id: 17, specs: 'govno', src: '/lenovo.jpg', slider: false },
    { title: 'ASUS ZenBook Duo UX481FL-BM024TS', category: 'laptops', price: 120990, id: 18, specs: 'govno', src: '/asus_laptop.jpg', slider: false },
    { title: 'MacBook Pro 16', category: 'laptops', price: 199990, id: 19, specs: 'govno', src: '/macbook.jpg', hot: true },
    { title: 'MSI Alpha 15 A3DDK-005RU', category: 'laptops', price: 83990, id: 20, specs: 'govno', src: '/msi_laptop.jpg', slider: false }
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
