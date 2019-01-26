
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
    console.log("addToCart Fired!", 'bookid: ', id)
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
    console.log(this.cartList())
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
          {this.state.fetchingBooks ? 
              <Spinner /> :
              <CartList  cartList={this.cartList()} totalPrice={this.totalPrice()} />
            }
          </Col>

        </Row>        
        
        </Container>
      </div>
    );
  }
}


export default App;
