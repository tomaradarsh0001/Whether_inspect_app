import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);

    return (
        <div className='time'>
            {time.toLocaleTimeString()}
        </div>

    );
};

export default Clock;
