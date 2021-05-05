import React from 'react';
import './VideoCard.css';
import TextTruncate from "react-text-truncate";

const base_url = "https://image.tmbd.org/t/p/original/";

function VideoCard({ movie }) {
    return (
        <div className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt="movie poster"/>
            <TextTruncate line={1} element="p" truncateText="..." text={movie.overview} />
            <p>{movie.release_date || movie.first_air_date}</p>
            <h2>{movie.title || movie.original_name}</h2>
            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard;
