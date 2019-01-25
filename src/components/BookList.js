import React, { Component } from 'react'
import Book from './Book'
import Spinner from './Spinner'

class BookList extends Component {
    render () {
            const mappedBooks = this.props.books.map(book => {
                return <Book book={book} key={book.id}/>
            })

        
        
        return (
            <div>
                <h2>Books</h2>
                {this.props.books ? mappedBooks : <Spinner />}
            </div>
        )
    }
}

export default BookList