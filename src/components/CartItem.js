import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem, Badge } from 'reactstrap';

class CartItem extends Component {
    render () {
        return (
            <div>
               <ListGroupItem className="justify-content-between">{this.props.cartItem.title} <Badge pill>1</Badge></ListGroupItem>
            </div>
        )
    }
}

export default CartItem