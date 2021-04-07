import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({year, title, summery, poster,genres}){
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className = "movie__data">
                <h3 className = "movie__title">{title}</h3>
                <h4 className = "movie__year">{year}</h4>
                <ul className = "genres">{genres.map((genre,index) => 
                <li key = {index} className="genres__genre">
                    {genre}
                    </li>
                    )}
                    </ul>
                <p className = "movie__summary">{summery}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summery: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;