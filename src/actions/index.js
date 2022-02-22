export const addShop = (shop_name, shop_area, category, DOOpen, DOClosing) => {
    return {
        type: 'INCREMENT',
        shop_name: shop_name,
        shop_area: shop_area,
        category: category,
        DOOpen: DOOpen,
        DOClosing: DOClosing,
    }
}

export const remShop = (shop) => {
    return {
        type: 'DECREMENT',
        shop: shop
    }
}

export const filter = (filter) => {
    return {
        type: 'FILTER',
        filter: filter
    }
}