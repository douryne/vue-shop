export const state = () => ({
  items: [
    { title: 'Пылосос', category: 'appliances', price: 4200, id: 1 },
    { title: 'Пылосос', category: 'appliances', price: 4200, id: 2 },
    { title: 'Пылосос', category: 'appliances', price: 4200, id: 3 },
    { title: 'Пылосос', category: 'appliances', price: 4200, id: 4 },
    { title: 'Телефон', category: 'phones', price: 4200, id: 5 },
    { title: 'Телефон', category: 'phones', price: 4200, id: 6 },
    { title: 'Телефон', category: 'phones', price: 4200, id: 7 },
    { title: 'Телефон', category: 'phones', price: 4200, id: 8 },
    { title: 'Монитор', category: 'monitors', price: 4200, id: 9 },
    { title: 'Монитор', category: 'monitors', price: 4200, id: 10 },
    { title: 'Монитор', category: 'monitors', price: 4200, id: 11 },
    { title: 'Монитор', category: 'monitors', price: 4200, id: 12 },
    { title: 'Телевизор', category: 'TV', price: 4200, id: 13 },
    { title: 'Телевизор', category: 'TV', price: 4200, id: 14 },
    { title: 'Телевизор', category: 'TV', price: 4200, id: 15 },
    { title: 'Телевизор', category: 'TV', price: 4200, id: 16 },
    { title: 'Ноут', category: 'laptops', price: 4200, id: 17 },
    { title: 'Ноут', category: 'laptops', price: 4200, id: 18 },
    { title: 'Ноут', category: 'laptops', price: 4200, id: 19 },
    { title: 'Ноут', category: 'laptops', price: 4200, id: 20 }
  ],
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
  }
}
