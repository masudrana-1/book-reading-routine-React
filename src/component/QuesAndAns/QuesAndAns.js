import React from 'react';
import './QuesAndAns.css'

const QuesAndAns = () => {
    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <div className='first-ques'>
                <h1>1. How does react work?</h1>
                <p>Answer: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='second-ques'>
                <h1>2. What is the difference between props and state in React component?</h1>
                <p>Answer: Simply put, State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div className='third-ques'>
                <h1>3. How do useEffect work?</h1>
                <p>Answer:  By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default QuesAndAns;