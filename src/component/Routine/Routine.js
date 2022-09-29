import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Time from '../Time/Time';
import './Routine.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const Routine = () => {

    const [books, setBooks] = useState([]);

    const [time, setTime] = useState([]);



    useEffect(() => {
        fetch('readingBook.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])


    // const previousTime = 0;

    const timeAddToList = (book) => {

        // console.log(book);

        const newTime = [...time, book];
        setTime(newTime);

        // console.log(setTime)

    };

    return (
        <div className='routine-container'>
            <div>
                <h1 className='title'><FontAwesomeIcon icon={faBook}></FontAwesomeIcon> Book Reading Routine</h1>
                <h3 className='select'>Select Today's Book</h3>
                <div className='books-container'>

                    {
                        books.map(book => <Book
                            key={book.id}
                            book={book}
                            timeAddToList={timeAddToList}
                        ></Book>)
                    }
                </div>
            </div>
            <div className='time-container'>
                <Time time={time}></Time>
            </div>
        </div>
    );
};

export default Routine;