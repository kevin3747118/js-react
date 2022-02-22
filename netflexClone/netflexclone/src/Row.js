import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [moveis, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // if [], run once when the row loads, and dont run again.
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    // console.log(moveis)

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            // console.log(movie)
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    const videoId = urlParams.get("v")
                    // console.log(url, videoId)
                    if (videoId) {
                        setTrailerUrl(videoId);
                    }
                }).catch(error => console.log(error));
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className={`row__posters`}>
                {/* several row_posters */}
                {moveis.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
