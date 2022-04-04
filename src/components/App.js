import './App.css';
import Header from "./Header";
import AddMovie from "./AddMovie";
import MovieList from "./AllMovieList";
import WatchedMovies from './WatchedMovies';
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


 


const App = () => {
  const LOCAL_STORAGE_KEY = "all-movies";

  const LOCAL_STORAGE_KEY_WATCHED = "watched-movies";

  const [watchedmovie , setWatchedMovie] = useState([]);

  const [movies , setMovies] = useState([
    {
      id:1,
			title: 'The Avengers',
			image: 'http://d21lz9b0v8r1zn.cloudfront.net/wp-content/uploads//2012/03/detail.jpg',
			comment: 'New York blows up in this!'
		},
		{
      id:2,
			title: 'Dark City',
			image: 'https://i.chzbgr.com/full/5569379584/hA96709E0/',
			comment: 'This looks mysterious. Cool!'
		},
		{
      id:3,
			title: 'Hot Tub Time Machine',
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG7vNmphIcVhEcybvSvMgbTkV6EE2twHBNanKvgDx3ZS7Ivn6Dtg',
			comment: 'Someone said this was fun. Maybe!'
		},
  ]);

  const addMovieHandler = (movie) =>{    
    const unique_id = uuid();
    setMovies([...movies, {id:unique_id,"title":movie.title,"image":movie.image,"comment":movie.comment, } ]);
  }

  const removeWatchedMovieHandler = (id) =>{ 
    const currentWatchedMovie = watchedmovie.filter((movie) => {
      return movie[0].id !== id;
    });   
    setWatchedMovie([...currentWatchedMovie]);
  }

  const addWatchedMovieHandler = (id) => {

    const currentWatchedMovie = watchedmovie.filter((movie) => {
      return movie[0].id !== id;
    });

    const newWatchedMovie = movies.filter((movie) => {
      return movie.id === id;
    });

   

    setWatchedMovie([...currentWatchedMovie, newWatchedMovie ]);
  };


  useEffect(()=>{
    const retriveMovieList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveMovieList)
    setMovies(retriveMovieList)
      },[]);

      useEffect(()=>{
        const retriveWatchedMovieList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_WATCHED));
        if(retriveWatchedMovieList)
        setWatchedMovie(retriveWatchedMovieList)
          },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(movies));
  },[movies]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY_WATCHED,JSON.stringify(watchedmovie));
  },[watchedmovie]);
  
  return (
   <div>
     <Header></Header>
     <Router>     
     <Routes>
     <Route path='/' exact  element={<><MovieList movies={movies} setWatchedMovieId={addWatchedMovieHandler} /><WatchedMovies watched ={watchedmovie} removeWatchedMovieHandler={removeWatchedMovieHandler}/></>}/>
      <Route path='/addmovie' element={<AddMovie addMovieHandler={addMovieHandler}></AddMovie>}/>
     </Routes>
      </Router>
     
       
   </div>
  );
}

export default App;
