import React, { useEffect, useState } from 'react';

const Fetch = () => {
    const [cleanData, setCleanData] = useState([]);

    useEffect(() => {
        fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.results.map((item, index) => {
                return {
                    movie: item.movie,
                    year: item.year,
                    director: item.director,
                    fullLine: item.full_line,
                    poster: item.poster,
                    audio: item.audio,
                    id: index,  
                };
            });
            setCleanData(cleanData);
        });
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Fetch;
