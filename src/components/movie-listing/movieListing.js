import { useState } from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getAllMovie } from '../../features/movies/movieSlice';
import React from 'react';
import './movieListing.css';
import { Pagination } from '@mui/material';
import MakePagination from '../makePagination';

const MovieListing = () => {

    //use useSelector to retrieve the value of state
    const movies = useSelector(getAllMovie);
    console.log(movies);

    //create pagination
    
    //page state
    const [currentPage, setCurrentPage]=useState(1);
    const [postPerPage, setPostPerPage]=useState(6);
    
    // create UI for Pagination click
    const totalPost= movies.Search && movies.Search.length;
    const totalPage= Math.ceil(totalPost/postPerPage);

    //calculate
    const indexOfLastPostInCurrentPage = currentPage * postPerPage;
    const indexOfFirstPostInCurrentPage = indexOfLastPostInCurrentPage - postPerPage;
    const currentPost = movies.Search && movies.Search.slice(indexOfFirstPostInCurrentPage, indexOfLastPostInCurrentPage);

    if(movies.Response === 'True'){
    return ( 
        <div>
        <div className="movie-listing">
            {
                currentPost.map((movie, index)=>(
                    <div className="key" key={index}>
                        <div className="movie-card">
                            <Link to={`/movie/${movie.imdbID}`} className="poster">
                                <img className="poster-image" src={movie.Poster} />
                                <div className="titlle">{movie.Title.length < 35? movie.Title: movie.Title.substring(0, 35)+'...'}</div>
                                <div className="year">{movie.Year}</div>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
            <MakePagination  totalPost={totalPost} totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        </div>
     );
    }else{
        return(
            <div className="error">
                <h2>{movies.Error}</h2>
            </div>
        )
    }
}
 
export default MovieListing;