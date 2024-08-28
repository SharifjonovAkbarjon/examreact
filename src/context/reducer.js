export const initialState = JSON.parse(localStorage.getItem("store")) || {
    son: 54,
    wishlist: [],
    cart: [],
    token: null
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "INC":
            return { ...state, son: state.son + action.payload };
        case "ADD_TO_WISHLIST":
            let index = state.wishlist.findIndex(item => item.id === action.payload.id)
            let wishlishMemory = {}
            if (index < 0) {
                wishlishMemory = { ...state, wishlist: [...state.wishlist, action.payload] }
                localStorage.setItem("store", JSON.stringify(wishlishMemory))
                return wishlishMemory
            } else {
                wishlishMemory = { ...state, wishlist: state.wishlist.filter(item => item.id !== action.payload.id) }
                localStorage.setItem("store", JSON.stringify(wishlishMemory))
                return wishlishMemory
            }
        case "ADD_CART":
            let cardIndex = state.cart.findIndex(item => item.id === action.payload.id)
            if (cardIndex < 0) {
                return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] }
            }else{
                return {...state, cart: state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item)}
            }
        case "INC_CART":
            return state
        case "DEC_CART":
            return state
        case "REMOVE_CART":
            return state
        case "RESET_CART":
            return { ...state, cart: [] }
        case "SET_LOGIN" :
            return {...state, token: action.payload}
        case "LOGOUT":
            return {...state, token: null}

        default:
            return state;
    }
};