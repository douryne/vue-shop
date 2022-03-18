import firebase from 'firebase'

export const state = () => ({
  items: [
    { title: 'Coffee machine DELONGHI Magnifica ECAM22.110B', category: 'appliances', price: 24840, id: 1, specs: ['Количество групп: 1', 'Используемый кофе: молотый / зерновой', 'Тип управления: механическое', 'Тип нагревателя: термоблок', 'Мощность: 1450 Вт', 'Объем: 1.8 л', 'Максимальное давление: 15 бар', 'Встроенная кофемолка: есть, регулировка степени помола, емкость контейнера для зерен 250 г', 'Количество степеней помола: 13'], src: '/coffe_machine.jpg', slider: false },
    { title: 'Vacuum cleaner Samsung SC4520', category: 'appliances', price: 4990, id: 2, specs: ['Тип уборки: сухая', 'Пылесборник: контейнер 1.30 л', 'Мощность всасывания: 350 Вт', 'Потребляемая мощность: 1600 Вт', 'Уровень шума: 80 дБ', 'Длина сетевого шнура: 6 м', 'Труба всасывания: телескопическая'], src: '/vacuum_cleaner.jpg', slider: false },
    { title: 'Сonditioner Electrolux EACS-12 HG-B2/N3 Air Gate 2', category: 'appliances', price: 31500, id: 3, specs: ['Основные режимы: охлаждение / обогрев', 'Максимальный воздушный поток: 10.83 куб. м/мин', 'Мощность в режиме охлаждения: 3520 Вт', 'Мощность в режиме обогрева: 3660 Вт', 'Потребляемая мощность при обогреве: 1014 Вт', 'Потребляемая мощность при охлаждении: 1125 Вт', 'Дополнительные режимы: режим вентиляции (без охлаждения и обогрева), автоматическое поддержание температуры, самодиагностика неисправностей, ночной режим', 'Режим осушения: есть'], src: '/conditioner.jpg', slider: false },
    { title: 'Haier HW60-1029AN', category: 'appliances', price: 17990, id: 4, specs: ['Тип загрузки: фронтальная', 'Максимальная загрузка белья: 6 кг', 'Сушка: нет', 'Управление: электронное (интеллектуальное)', 'Дисплей: есть цифровой (символьный)', 'Габариты (ШxГxВ): 60x45x85 см', 'Вес: 61 кг', 'Скорость вращения при отжиме: до 1000 об/мин'], src: '/washing_machine.jpg', slider: false },
    { title: 'HUAWEI P30 Pro 256Gb', category: 'phones', price: 54990, id: 5, specs: ['Дисплей: 6.47", OLED', 'Разрешение дисплея: 2340×1080', 'Число пикселей на дюйм: 398PPI', 'Процессор: Kirin 980, 2600МГц, 8-ми ядерный', 'Объем оперативной памяти: 8 Гб', 'Основная камера: 40Мп', 'Емкость стандартного аккумулятора: 4200 мAч'], src: '/huawei.jpg', slider: false },
    { title: 'Apple iPhone 11 Pro 256Gb', category: 'phones', price: 89330, id: 6, specs: ['Дисплей: 5.8", OLED', 'Разрешение дисплея: 2436×1125', 'Число пикселей на дюйм: 458PPI', 'Защитное покрытие экрана: стекло Corning Gorilla Glass 6', 'Процессор: Apple A13 Bionic', 'Объем оперативной памяти: 6 Гб', 'Основная камера: 12Мп', 'Емкость стандартного аккумулятора: 3190 мAч'], srcForSlider: '/iphone.jpg', src: '/iphone_mini.jpg', hot: true },
    { title: 'SAMSUNG Galaxy S20 8/128Gb', category: 'phones', price: 69990, id: 7, specs: ['Дисплей: 6.2", Dynamic AMOLED', 'Разрешение дисплея: 3200x1440', 'Число пикселей на дюйм: 563PPI', 'Защитное покрытие экрана: стекло Corning Gorilla Glass 6', 'Частота обновления: 120 Гц', 'Процессор: Exynos 990, , 8-ми ядерный', 'Объем оперативной памяти: 8 Гб', 'Основная камера: 64Мп', 'Емкость стандартного аккумулятора: 4000 мAч'], src: '/samsung_phone.jpg', slider: false },
    { title: 'XIAOMI Mi Note 10 Pro 256Gb', category: 'phones', price: 44000, id: 8, specs: ['6.47", AMOLED', 'Разрешение дисплея: 2340×1080', 'Число пикселей на дюйм: 398PPI', 'Защитное покрытие экрана: стекло Corning Gorilla Glass 5', 'Процессор: Qualcomm Snapdragon 730G, 2200МГц, 8-ми ядерный', 'Объем оперативной памяти: 8 Гб', 'Основная камера: 108Мп', 'Емкость стандартного аккумулятора: 5260 мAч'], src: '/xiaomi.jpg', slider: false },
    { title: 'LG 29WK600-W 29', category: 'monitors', price: 17790, id: 9, specs: ['Размер экрана: 29', 'Разрешение экрана: 2560×1080', 'Частота обновления: 75', 'Соотношение сторон экрана: 21:9', 'Тип матрицы: IPS', 'Контрастность: 1000:1', 'Яркость экрана: 300 кд/м2', 'Время отклика (GTG): 5 мс', 'Количество разъемов HDMI: 2', 'Версия разъемов HDMI: 2.0', 'Количество разъемов DisplayPort: 1'], src: '/LG_monitor.jpg', slider: false },
    { title: 'MSI Optix MPG27CQ 27', category: 'monitors', price: 44490, id: 10, specs: ['Размер экрана: 27', 'Разрешение экрана: 2560×1440', 'Частота обновления: 144', 'Соотношение сторон экрана: 16:9', 'Тип матрицы: VA', 'Контрастность: 3000:1', 'Яркость экрана: 400 кд/м2', 'Время отклика (GTG): 5 мс', 'Количество разъемов HDMI: 1', 'Версия разъемов HDMI: 1.4', 'Количество разъемов DisplayPort: 1'], src: '/msi_monitor.png', slider: false },
    { title: 'ASUS ROG Strix XG27VQ', category: 'monitors', price: 31154, id: 11, specs: ['Размер экрана: 27', 'Разрешение экрана: 1920×1080', 'Частота обновления: 144', 'Соотношение сторон экрана: 16:9', 'Тип матрицы: VA', 'Контрастность: 3000:1', 'Яркость экрана: 300 кд/м2', 'Время отклика (GTG): 4 мс', 'Количество разъемов HDMI: 2', 'Версия разъемов HDMI: 2.0', 'Количество разъемов DisplayPort: 1'], srcForSlider: '/asus_monitor.jpg', src: '/asus_rog.jpg', hot: true },
    { title: 'DELL S2719DM 27', category: 'monitors', price: 33490, id: 12, specs: ['Размер экрана: 27', 'Разрешение экрана: 2560×1440', 'Частота обновления: 60', 'Соотношение сторон экрана: 16:9', 'Тип матрицы: IPS', 'Контрастность: 1000:1', 'Яркость экрана: 600 кд/м2', 'Время отклика (GTG): 5 мс', 'Количество разъемов HDMI: 2', 'Версия разъемов HDMI: 2.0', 'Количество разъемов DisplayPort: None'], src: '/dell.jpg', slider: false },
    { title: 'SAMSUNG QE65Q60RAUXRU Ultra HD 4K', category: 'TV', price: 110900, id: 13, specs: ['Диагональ: 65', 'Формат экрана: 16:9', 'Разрешение: 3840x2160', 'Разрешение HD: 4K UHD, HDR', 'Формат HDR: HDR10, HDR10+', 'Стереозвук: есть', 'Smart TV: есть'], src: '/samsung_tv.jpg', slider: false },
    { title: 'LG OLED55C9PLA', category: 'TV', price: 129990, id: 14, specs: ['Диагональ: 54.6', 'Формат экрана: 16:9', 'Разрешение: 3840x2160', 'Разрешение HD: 4K UHD, HDR', 'Формат HDR: HDR10, Dolby Vision', 'Стереозвук: есть', 'Smart TV: есть'], src: '/lg_tv.jpg', slider: false },
    { title: 'PANASONIC TX-65GXR900 Ultra HD 4K', category: 'TV', price: 80990, id: 15, specs: ['Диагональ: 65', 'Формат экрана: 16:9', 'Разрешение: 3840x2160', 'Разрешение HD: 4K UHD, HDR', 'Формат HDR: HDR10, HDR10+, Dolby Vision', 'Стереозвук: есть', 'Smart TV: есть'], src: '/panasonic.png', slider: false },
    { title: 'SONY KD65XG7096BR2 Ultra HD 4K', category: 'TV', price: 84490, id: 16, specs: ['Диагональ: 64.5', 'Формат экрана: 16:9', 'Разрешение: 3840x2160', 'Разрешение HD: 4K UHD, HDR', 'Формат HDR: HDR10', 'Стереозвук: есть', 'Smart TV: есть'], src: '/sony.jpg', slider: false },
    { title: 'LENOVO IdeaPad S340-14API', category: 'laptops', price: 34990, id: 17, specs: ['Экран: 14 дюймов, 1920x1080, широкоформатный', 'Видеокарта: AMD Radeon Vega 3', 'Конфигурация накопителей: SSD', 'Процессор: AMD Ryzen 5 3500U, AMD Athlon 300U 2400 МГц', 'Память: 4 ГБ DDR4 2400 МГц'], src: '/lenovo.jpg', slider: false },
    { title: 'ASUS ZenBook Duo UX481FL-BM024TS', category: 'laptops', price: 120990, id: 18, specs: ['Экран: 14 дюймов, 1920x1080, широкоформатный', 'Видеокарта: Intel UHD Graphics, NVIDIA GeForce MX250', 'Конфигурация накопителей: SSD', 'Процессор: Intel Core i5, Intel Core i5 10210U 1600 МГц', 'Память: 16 ГБ LPDDR3 2133 МГц'], src: '/asus_laptop.jpg', slider: false },
    { title: 'MacBook Pro 16', category: 'laptops', price: 199990, id: 19, specs: ['Экран: 16 дюймов, 3072x1920, широкоформатный', 'Видеокарта: AMD Radeon Pro 5500M', 'Конфигурация накопителей: SSD', 'Процессор: Intel Core i9, Intel Core i9 9880H 2300 МГц', 'Память: 16 ГБ DDR4 2666 МГц'], srcForSlider: '/macbook.jpg', src: '/macbook_pro.jpg', hot: true },
    { title: 'MSI Alpha 15 A3DDK-005RU', category: 'laptops', price: 83990, id: 20, specs: ['Экран: 15.6 дюймов, 1600x1200, 1920x1080, широкоформатный', 'Видеокарта: AMD Radeon Pro 5500M, AMD Radeon RX Vega 10', 'Конфигурация накопителей: SSD', 'Процессор: AMD Ryzen 7 3750H 2300 МГц', 'Память: 16 ГБ DDR4 2400 МГц'], src: '/msi_laptop.jpg', slider: false }
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
    if (!state.basket) {
      state.basket = []
      state.basket.push(item)
      return
    }
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
