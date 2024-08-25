export const initialState =  JSON.parse(localStorage.getItem("store")) || {
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
        default:
            return state;
    }
};