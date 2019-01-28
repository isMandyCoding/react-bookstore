import React, { Component } from 'react'
import Book from './Book'
import Spinner from './Spinner'
import { Badge, Button, Form, FormGroup, Label, Input, FormText, Row, Col} from 'reactstrap'

class BookList extends Component {

    state = {
        type: "title",
        filterPhrase: ""
    }

    handleChange = e => {
        let { name, value } = e.target
        this.setState({
          [name]: value
        })
      }

    render () {
            // const mappedBooks = this.props.books.map(book => {
            //     return <Book book={book} key={book.id} addToCart={this.props.addToCart} bookId={book.id} />
            // })

            let mappedBooks = this.props.books
            .filter(book => book[this.state.type].toLowerCase().includes(this.state.filterPhrase.toLowerCase()))
            .map(book => <Book key={book.id} book={book} addToCart={this.props.addToCart} bookId={book.id} />)

        
        
        return (
            <div>
            {/* Search form */}
            <Form>
                    <Row>
                    <Col>
                        <FormGroup>
                            <Label for="search">Search</Label>
                            <Input
                                value={this.state.filterString}
                                onChange={this.handleChange}
                                type="search"
                                name="filterPhrase"
                                id="search"
                                placeholder="search"
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input onChange={this.handleChange} type="select" name="type" id="select">
                            <option value="title">Title</option>
                            <option value="author"> Author</option>
                        </Input>
                    </FormGroup>

                    </Col>

                    </Row>
                </Form>


                <h2>Books</h2>
                {this.props.books ? mappedBooks : <Spinner />}
            </div>
        )
    }
}

export default BookList