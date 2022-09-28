import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Time from '../Time/Time';
import './Routine.css'

const Routine = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('readingBook.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className='routine-container'>
            <div>
                <h1 className='title'>Book Reading Routine</h1>
                <h3 className='title'>Select Today's Book</h3>
                <div className='books-container'>

                    {
                        books.map(book => <Book
                            key={book.id}
                            book={book}
                        ></Book>)
                    }
                </div>
            </div>
            <div className='time-container'>
                <Time></Time>
            </div>
        </div>
    );
};

export default Routine;