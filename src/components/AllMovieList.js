import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";


const AllMovieList = (props) => {
    
    const addToWatched = (id) => {
        props.setWatchedMovieId(id);
      };

    const renderMovieList = props.movies.map((movie) => {
        return (
            <MovieCard movie={movie} clickHandler={addToWatched} key={movie.id}></MovieCard>
        );
    });

    
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-8">
                    <h2>Movies
                    </h2>
                </div>
                <div className="col-4">
                    <Link to="/addmovie">
                        <button className='btn btn-primary'>Add Movies</button>
                    </Link>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-5 row-cols-lg-6 g-4">
                {renderMovieList}
            </div>
        </div>
    );
}

export default AllMovieList;

