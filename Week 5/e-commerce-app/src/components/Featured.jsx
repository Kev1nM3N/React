import React from 'react'
import Book from './ui/Book'
import { books } from '../data'

function Featured() {
    

  return (
    <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className="purple">Books</span>
                </h2>
                <div className="books">
                    { books.filter((element) => element.rating === 5)
                    .splice(0, 4) 
                    .map(book => 
                        <Book key={book.id} book={book}/>
                    )
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured