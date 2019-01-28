import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';

class SearchBar extends Component {

    state = {
        filterType: "",
        filterString: ""
    }

    render () {
        const {filteredBooks} = this.props.filteredBooks

        //event handlers
        const textHandler = (e) => {
            let value = e.target.value
            this.setState({ filterString: value })
            this.props.filteredBooks(this.state.filterType, this.state.filterString)
        }

        const selectHandler = e => {
            this.setState({filterType: e.target.value})    
            this.props.filteredBooks(this.state.filterType, this.state.filterString)        
        }

        return (
            <div>
                <Form>
                    <Row>
                    <Col>
                        <FormGroup>
                            <Label for="search">Search</Label>
                            <Input
                                value={this.state.filterString}
                                onChange={textHandler}
                                type="search"
                                name="filterString"
                                id="search"
                                placeholder="search"
                            />
                        </FormGroup>
                    </Col>

                    <Col>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input onChange={selectHandler} type="select" name="filterType" id="select">
                            <option selected value="" >Search By</option>
                            <option value="title">Title</option>
                            <option value="author"> Author</option>
                        </Input>
                    </FormGroup>

                    </Col>

                    </Row>
                </Form>
            </div>
        )
    }
}

export default SearchBar