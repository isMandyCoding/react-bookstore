import React, { Component } from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

class CartList extends Component {
    render () {
        return (
            <div>
                Cart List
                <CartItem />
                <CartTotal />
            </div>
        )
    }
}

export default CartList