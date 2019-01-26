import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';

class Book extends Component {

    
    render () {
        const {book} = this.props

        const addButtonHandler = (e) => {
            e.preventDefault();
            

            this.props.addToCart(this.props.bookId)
        }

        return (
            <div>
                
                        <Card>
                        <CardBody>
                            <CardTitle> {book.title} </CardTitle>
                            <CardSubtitle> By {book.author} </CardSubtitle>
                        </CardBody>
                        <img width="45%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardText> Pages: {book.pages} </CardText>
                            <Button onClick={addButtonHandler}> Add to Cart</Button>
                            <Button> Card Button</Button>
                        </CardBody>
                        </Card>

            </div>
        )
    }
}

export default Book