import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './Time.css';


const Time = (props) => {

    const { time } = props;

    const [breakTime, setBreakTime] = useState(0);

    let totalTime = 0;

    for (const readingTime of time) {

        totalTime = totalTime + parseInt(readingTime.total_time);

        // totalTime = totalTimeInMin / 60;

    }

    useEffect(() => {
        const storeTime = localStorage.getItem("BreakTime");

        if (storeTime) {
            setBreakTime(storeTime);
        }
    }, [])

    // add break time 

    const addBreak = (breakTime) => {
        setBreakTime(breakTime);
        setBreakTimeToDB(breakTime);
        // console.log(b)
    }

    const setBreakTimeToDB = (breakTime) => {
        let localStorages = {};

        localStorages = breakTime;

        localStorage.setItem("BreakTime", JSON.stringify(localStorages));
    }

    // show toast 

    const notify = () => toast("Activity Completed Sucessfylly");



    return (
        <div className='time-cart'>
            <div className='profile-container'>
                <div className='profile'>
                    <img src={require('../../profile-img/masud.jpeg')} alt="" />
                    <div>
                        <h2>Masud Rana</h2>
                        <p><small>Rangpur, Bangladesh</small></p>
                    </div>
                </div>
                <div className='my-info'>
                    <div>
                        <h4>64kg</h4>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h4>5.6"in</h4>
                        <p>Height</p>
                    </div>
                    <div>
                        <h4>25yrs</h4>
                        <p>Age</p>
                    </div>
                </div>
            </div>
            <div className='break-time'>
                <h2>Take a break</h2>
                <div>
                    <button onClick={() => { addBreak(5) }}>5m</button>
                    <button onClick={() => { addBreak(10) }}>10m</button>
                    <button onClick={() => { addBreak(15) }}>15m</button>
                    <button onClick={() => { addBreak(20) }}>20m</button>
                </div>
            </div>
            <div className='reading-details'>
                <h2>Reading Details</h2>
                <div>
                    <p className='total-time'>Reading Time: {totalTime} Min</p>
                    <p className='total-time'>Break Time: {breakTime} Min</p>
                </div>
            </div>
            <button onClick={notify} className='activity-btn'>Activity Completed</button>
        </div >
    );
};

export default Time;