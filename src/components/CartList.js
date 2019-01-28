import React, { Component } from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

class CartList extends Component {
    render () {
        const mapperCartItems = this.props.cartList.map(cartItem => {
            return <CartItem cartItem={cartItem} />
        })
        return (
            <div>
                <h2>Cart</h2> 
                <ListGroup>
                {mapperCartItems}
                </ListGroup>               
                <CartTotal totalPrice={this.props.totalPrice} />
            </div>
        )
    }
}

export default CartList