import { CartItem } from '../../models/cart-item';
import { ActionTypes, CartActions } from '../actions/cart-actions';
import { cartItems } from '../initialStates/cart-items';

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, action: CartActions) {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return addToCart(state, action)
        case ActionTypes.REMOVE_FROM_CART:
            return removeFromCart(state, action)
        default: return state
    }
}

function addToCart(state, action: CartActions) {
    let cartItem = state.cartItems.find(c => c.product.id === action.payload.id);
    if (cartItem) {
        let newCartItem: CartItem = { quantity: cartItem.quantity + 1, product: cartItem.product }
        let newCartItems: CartItem[] = state.cartItems.map(c => c === cartItem ? newCartItem : c)
        return { ...state, cartItems: newCartItems }
    } else {
        cartItem = { quantity: 1, product: action.payload }
        return { ...state, cartItems: [...state.cartItems, cartItem] }
    }
}

function removeFromCart(state, action: CartActions) {
    let newCartItems = state.cartItems.filter(c => c.product.id !== action.payload.id)
    return { ...state, cartItems: newCartItems }
}