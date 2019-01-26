import React, { Component } from 'react'

class CartTotal extends Component {
    render () {
        return (
            <div>
               CartTotal: {`$${this.props.totalPrice.toFixed(2)}`}
            </div>
        )
    }
}

export default CartTotal