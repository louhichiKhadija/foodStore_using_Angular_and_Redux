import { FETCH_PRODUCT, ADD_PRODUCT, REMOVE_PRODUCT } from './app.actions';
import { Product } from '../product/product';

export interface InitialState {
    items: Array<Product>;
    cart: Array<Product>;
}

export const initialState: InitialState = {
    items: [],
    cart: []
};


/***** Action implementation */
class ProductImpl{
    constructor(private state: InitialState, private action) {}

    fetch(){
        return Object.assign({}, this.state, {items: this.action.val})
    }

    add(){
        return Object.assign({}, this.state, {cart: [...this.state.cart, this.action.val]})
    }

    remove(){
        const cart=this.state.cart.filter(item => item.name !== this.action.val.name)
        return Object.assign({},this.state,{ cart: cart } )
    }
}



export function ShopReducer(state = initialState, action) {
    const productImpl = new ProductImpl(state, action);
    switch (action.type) {
        case FETCH_PRODUCT:
            return productImpl.fetch()
        case ADD_PRODUCT:
            return productImpl.add()
        case REMOVE_PRODUCT:
            return productImpl.remove()
        default:
            return state;
    }
  }

