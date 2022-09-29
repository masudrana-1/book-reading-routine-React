import React from 'react';
import Time from '../Time/Time';
import './Book.css'

const Book = (props) => {

    // console.log(props.book)

    const { timeAddToList, book } = props;

    // console.log(timeAddToList);

    const { name, book_img, details, daily_time, total_time
    } = book;

    return (
        <div>
            <div className='book-container'>
                <img src={book_img} alt="" />
                <div className='title-and-time'>
                    <h3>Book Name: {name}</h3>
                    <p>{details}</p>
                    <h5>Daily Time: {daily_time}</h5>
                    <h5>Total time: {total_time} min</h5>
                </div>
                <button onClick={() => timeAddToList(book)}>Add to list</button>
            </div>
        </div>
    );
};

export default Book;