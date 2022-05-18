import { getAllShow } from '../../features/movies/movieSlice';
import '../movie-listing/movieListing.css';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import MakePagination from '../makePagination';
import { useState } from 'react';


const ShowListing = () => {
    const shows = useSelector(getAllShow);

     //page state
     const [currentPage, setCurrentPage]=useState(1);
     const [postPerPage, setPostPerPage]=useState(6);
     
     // create UI for Pagination click
     const totalPost= shows.Search && shows.Search.length;
     const totalPage= Math.ceil(totalPost/postPerPage);
 
     //calculate
     const indexOfLastPostInCurrentPage = currentPage * postPerPage;
     const indexOfFirstPostInCurrentPage = indexOfLastPostInCurrentPage - postPerPage;
     const currentPost = shows.Search && shows.Search.slice(indexOfFirstPostInCurrentPage, indexOfLastPostInCurrentPage);

    
    console.log(shows);

    if(shows.Response === 'True'){
        return ( 
            <div>
            <div className="movie-listing">
                {
                    currentPost.map((show, index)=>(
                        <div className="key" key={index} >
                            <div className="movie-card">
                                <Link to={`/movie/${show.imdbID}`} className="poster">
                                    <img className="poster-image" src={show.Poster} />
                                    <div className="titlle">{show.Title.length < 35? show.Title: show.Title.substring(0, 35)+'...'}</div>
                                    <div className="year">{show.Year}</div>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
                <MakePagination  totalPost={totalPost} totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage}/> <br />
            </div>
         );
        }else{
            return(
                <div className="error">
                    <h2>{shows.Error}</h2>
                </div>
            )
        }
}
 
export default ShowListing;