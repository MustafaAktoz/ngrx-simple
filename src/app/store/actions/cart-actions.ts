import { Product } from '../../models/product';
import { Action } from "@ngrx/store";

export const enum ActionTypes{
    ADD_TO_CART = "ADD_TO_CART",
    REMOVE_FROM_CART = "REMOVE_FROM_CART"
}

export class AddToCart implements Action{
    type: string = ActionTypes.ADD_TO_CART;
    constructor(public payload:Product){}
}

export class RemoveFromCart implements Action{
    type: string = ActionTypes.REMOVE_FROM_CART;
    constructor(public payload:Product){}
}

export type CartActions = AddToCart | RemoveFromCart