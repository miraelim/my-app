import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({year, title, summery, poster}){
    return (
        <div class="movie">
            <img src={poster} alt={title} title={title}/>
            <div class = "movie__data">
                <h3 class = "movie__title">{title}</h3>
                <h4 class = "movie__year">{year}</h4>
                <p class = "movie__summary">{summery}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summery: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;