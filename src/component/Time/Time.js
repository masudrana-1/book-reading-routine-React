import React from 'react';
import './Time.css'

const Time = (props) => {

    const { time } = props;

    // const totalTime = time.map(t => console.log(t));

    // for (const t in time) {
    //     const previousTime = 0;

    //     previousTime = previousTime + t.total_time;

    //     console.log(previousTime)
    // }


    return (
        <div className='time-cart'>
            <div className='profile-container'>
                <div className='profile'>
                    <img src="../../profile-img/ZEZiR2FYeg.jpg" alt="" />
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
                    <p>5m</p>
                    <p>10m</p>
                    <p>15m</p>
                    <p>20m</p>
                </div>
            </div>
            <div className='reading-details'>
                <h2>Reading Details</h2>
                <div>
                    <p className='total-time'>Reading Time: { }</p>
                    <p className='total-time'>Break Time: </p>
                </div>
            </div>
            <button className='activity-btn'>Activity Completed</button>
        </div>
    );
};

export default Time;