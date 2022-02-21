import React, { useEffect, useState } from 'react'
import axios from './axios';
import request from './request';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(request.fetchNetflexOriginals)
            const randomIndex = Math.floor(Math.random() * response.data.results.length - 1)
            const targetMovie = response.data.results[randomIndex]
            setMovie(
                targetMovie
            );
        }
        fetchData();
    }, []);

    // console.log(movie)

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    }

    return (
        <header className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className='banner__contents'>
                <h1 className='banner__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
            </div>
            <div className='banner--fadeBottom'></div>
        </header>
    )
}

export default Banner