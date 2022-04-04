import React from "react";
import WatchedCard from "./WatchedCard";

const WatchedMovies = (props) => {

    const removeWatchedMovie = (id) => {
        props.removeWatchedMovieHandler(id);
    }

    const renderWatchedList = props.watched.map((watchedMovie) => {       
            return (
                <WatchedCard watched={watchedMovie} removeWatched={removeWatchedMovie} key={"watch" + watchedMovie.id}></WatchedCard>
            );       
    });

    if (props.watched.length > 0) {
        return (<div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <h2>My List</h2>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-5 row-cols-lg-6 g-4">
                {renderWatchedList}
            </div>
        </div>);
    }
    return (<></>);
}

export default WatchedMovies;