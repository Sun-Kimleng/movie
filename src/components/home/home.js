import { useEffect, useState } from "react";
import {ApiKey} from '../../common/apis/movieApiKey';
import movieApi from "../../common/apis/movieApi";
import { useDispatch, useSelector } from "react-redux";
import MovieListing from "../movie-listing/movieListing";
import { addMovie, fetchAsyncMovies, fetchAsyncShow, isPending } from "../../features/movies/movieSlice";
import './home.css'
import ShowListing from "../show-listing/show-listing";
import { DocTitle } from "../../docTitle";



const Home = () => {
    DocTitle('Home');
    
    //use dispatch to update the state (interactive with actions)
    const dispatch = useDispatch();
  
    useEffect(()=>{ 
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShow())
    },[dispatch]);

   
    return ( 
        
        <div className="home">
            {/* {isPending &&<div className="spinner-parent"><div className="parent"> <div className="spinner"></div></div></div>} */}
            <h2 className="movie"><div className="movie-label">Movies</div></h2>
            <MovieListing />
            <h2 className="show"><div className="movie-label">Shows</div></h2>
            <ShowListing />
        </div>
    );
}
 
export default Home;
