
import React, { Component } from 'react';  
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'
import CartList from './components/CartList'
import Spinner from './components/Spinner'
import { Container, Row, Col } from 'reactstrap';


class App extends Component {
  
  state = {
    books: [],
    fetchingBooks: true,
  }

  async componentDidMount() {
    const response = await fetch("http://localhost:8082/api/books")
    const json = await response.json()
    this.setState({
      ...this.state,
      books: json,
    fetchingBooks: false,
    })
  }

  //data functions
  cartList = () => this.state.books.filter(book => book.inCart);

  totalPrice = () => this.cartList().reduce((acc, item) => {
    return item.price + acc
  }, 0)

  //event functions
  addToCart = id => {
    this.setState(prevState => {
      return {
        books: prevState.books.reduce((acc, book) => {
          if (book.id == id) {
            return [
              ...acc,
              {
                ...book,
                inCart: true
              }
            ];
          }
          return [...acc, book];
        }, [])
      }
    })
    
  } 

  render() {
    return (
      <div className="App">

        <Container >
        <SearchBar />
        <Row>
          <Col sm="8">
            {this.state.fetchingBooks ? 
              <Spinner /> :
              <BookList  books={this.state.books} addToCart={this.addToCart} />
            }
          </Col>
          <Col sm="4">
            <Row className="sticky-cart">
              {this.state.fetchingBooks ? 
                  <Spinner /> :
                  <CartList className="sticky-cart" cartList={this.cartList()} totalPrice={this.totalPrice()} />
                }
            </Row>
          </Col>

        </Row>        
        
        </Container>
      </div>
    );
  }
}


export default App;
