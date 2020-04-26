export const state = () => ({
  items: [
    { title: 'Пылосос', category: 'appliances', price: 4200, id: 1, specs: 'govno' },
    { title: 'Пылосос', category: 'appliances', price: 4200, id: 2, specs: 'govno' },
    { title: 'Пылосос', category: 'appliances', price: 4200, id: 3, specs: 'govno' },
    { title: 'Пылосос', category: 'appliances', price: 4200, id: 4, specs: 'govno' },
    { title: 'Huawei Телефон', category: 'phones', price: 4200, id: 5, specs: 'govno' },
    { title: 'Apple Телефон', category: 'phones', price: 4200, id: 6, specs: 'govno' },
    { title: 'Samsung Телефон', category: 'phones', price: 4200, id: 7, specs: 'govno' },
    { title: 'Xiomi Телефон', category: 'phones', price: 4200, id: 8, specs: 'govno' },
    { title: 'LG Монитор', category: 'monitors', price: 4200, id: 9, specs: 'govno' },
    { title: 'MSI Монитор', category: 'monitors', price: 4200, id: 10, specs: 'govno' },
    { title: 'ASUS Монитор', category: 'monitors', price: 4200, id: 11, specs: 'govno' },
    { title: 'Dell Монитор', category: 'monitors', price: 4200, id: 12, specs: 'govno' },
    { title: 'Samsung Телевизор', category: 'TV', price: 4200, id: 13, specs: 'govno' },
    { title: 'LG Телевизор', category: 'TV', price: 4200, id: 14, specs: 'govno' },
    { title: 'ASUS Телевизор', category: 'TV', price: 4200, id: 15, specs: 'govno' },
    { title: 'Sony Телевизор', category: 'TV', price: 4200, id: 16, specs: 'govno' },
    { title: 'Lenovo', category: 'laptops', price: 4200, id: 17, specs: 'govno' },
    { title: 'Asus', category: 'laptops', price: 4200, id: 18, specs: 'govno' },
    { title: 'Macbook', category: 'laptops', price: 4200, id: 19, specs: 'govno' },
    { title: 'MSI', category: 'laptops', price: 4200, id: 20, specs: 'govno' }
  ],
  item: {},
  basket: []
})

export const getters = {
  getCategoryItems (state) {
    return category =>
      category ? state.items.filter(item => item.category === category) : state.items
  }
}
export const mutations = {
  pushToBasket (state, item) {
    if (!state.basket.filter(({ id }) => id === item.id).length) {
      state.basket.push(item)
    }
  },
  getItem (state, item) {
    state.item = item
  }
}
