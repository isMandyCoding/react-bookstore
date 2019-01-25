import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col, Button } from 'reactstrap';

class Book extends Component {
    render () {
        const {book} = this.props
        return (
            <div>
                <Row>
                    <Col sm="6">
                        <Card>
                        <CardBody>
                            <CardTitle> {book.title} </CardTitle>
                            <CardSubtitle>By {book.author} </CardSubtitle>
                        </CardBody>
                        <img width="45%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardText>Pages: {book.pages} </CardText>
                            <Button href="#">Add to Cart</Button>
                            <Button href="#">Card Button</Button>
                        </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Book