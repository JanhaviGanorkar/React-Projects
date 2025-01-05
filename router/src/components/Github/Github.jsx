import React, { useEffect, useState } from 'react';

const Github = () => {
    const [data, setData] = useState(null); // Initialize state at the top level

    useEffect(() => {
        fetch(`https://api.github.com/users/Riyaman`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => console.error('Error fetching data:', error)); // Add error handling
    }, []);

    return (
        <div className='text-center bg-gray-600 text-white text-3xl p-4'>
            Github followers: {data ? data.followers : 'Loading...'}
            <img src={data ? data.avatar_url : "invalid" } alt="dp" width={300} />
        </div>
    );
};

export default Github;
