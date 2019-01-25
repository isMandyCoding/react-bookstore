import React, { Component } from 'react'
import Book from './Book'

class BookList extends Component {
    render () {
        // const mappedBooks = this.props.books.map(book => {
        //     return <Book book={book}/>
        // })
        return (
            <div>
                BookList
                {/* {mappedBooks} */}
            </div>
        )
    }
}

export default BookList