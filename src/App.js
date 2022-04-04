import React from 'react';
import './App.css';

import { addWatchedMovie, add, removeWatchedMovie, getWatchedMovies, getAllMovies } from './index.js';
//We're utilising an index.js function and exporting the component to index.js, so it's a cyclic process.
//Because index.js is our entry point for calling app.js, it would be better if we created little components and then combined them to create the final component.

/*We have a mix of es6 and es 5, so we need to be consistent with our choices.*/

const getMoviesComponents = (movies) => {
  var components = [];

  //We can create a component that is similar to a card that can be used. 
  movies.forEach(function(movie) {
    //Use the const title, comment, image = movie spread operator.
    components.push(
      <div className="all">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { addWatchedMovie(movie.title, movie.comment, movie.image) }}>//Rather than having the addwatched capability on the link, we should perform it on a different button like add, which is easier for the user to grasp.
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    )
  })

  return components;
}

function getWatchedMoviesComponents(movies) {
  var components = [];

  movies.forEach(function(movie) {
    components.push(movie && (
      <div className="watched">
        <div>
          <img src={movie.image} height="100px" />
        </div>
        <span>
          <a className="movie-watched" href="#" onClick={function() { removeWatchedMovie(movie.title) }}>//We should add an id to the structure that is unique so that it is easier to delete and add.
            {movie.title}
          </a>
        </span>
        <br />
        <span>
          {movie.comment}
        </span>
        <br />
        <br />
      </div>
    ))
  })

  return components;
}

function App(props) {
  /* Divide the following into little components, such as
  
  Header - <h1>Codest Movies!</h1> by default loaded every time 
  
  , AddMovie - <h1>Add movie!</h1>
              <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
              <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
              <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
               <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

               When the user wants to add movie details, this component should be loaded, and then the user should be redirected to the watch list and watch movie component.
  , WatchList - 
  
  ,WatchedMovies -
  
  */ 

  return (
    <div className="App">
      
      <h1>Codest Movies!</h1>
      <h1>Add movie!</h1>//We should use h2 or other headers instead of h1 to maintain the hierarchy.
      <b>TITLE:<br /><input type="text" onChange={function(e) { title = e.target.value; }} /></b><br />
      <b>IMAGE URL:<br /><input type="text" onChange={function(e) { image = e.target.value; }} /></b><br />
      <b>COMMENT:<br /><input type="text" onChange={function(e) { comment = e.target.value; }} /></b><br />
      <input type="button" onClick={function(e) { add(title, image, comment); }} value="ADD MOVIE" />

      <h1>Watchlist:</h1> /*Label Should be Movies*/
      {getMoviesComponents(getAllMovies())}

      <h1>Already watched:</h1> /*Label Should be "My List"*/
      {getWatchedMoviesComponents(getWatchedMovies())}// If the movie being watched is not emtpy, conditional rendering is used.
    </div>
  );
}

var title = '';
var image = '';
var comment = '';

export default App;
