import React, { useState, useEffect } from 'react';

export default function App() {
    const [randomDog, setRandomDog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
            setRandomDog(data.message);                
            setLoading(false);
        })
        .catch((error) => {
            console.error('Error fetching random dog:', error);
            setLoading(false);
        });
    },[]);

    return (
        <div>
            {loading ? (
                <p>Loading</p>
            ) : (
                <img src={randomDog} alt='A Random Dog'/>
            )}
        </div>
    );
}



