import { Rating } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DocTitle } from '../../docTitle';
import { cleanUpMovie, fetchAsyncMovieDetail, getDetail } from '../../features/movies/movieSlice';
import '../home/home.css'
import './movieDetail.css'

const MovieDetail = () => {

    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(getDetail);
    
    DocTitle(detail.Title);
    useEffect(
        ()=>{
            dispatch(fetchAsyncMovieDetail(imdbID));
            //clean up movie array
            return ()=>{
                dispatch(cleanUpMovie());
            };
        }, [dispatch, imdbID]
    );
    

    return ( 
        <div className="movie-detail">
            {Object.keys(detail).length === 0 &&<div className="spinner-parent"><div className="parent"> <div className="spinner"></div></div></div>}
            <div className="detail-container">
                <div className="movie-detail">
                    <div className="tittle">{detail.Title}</div>
                    <div className="desc">{detail.Plot}</div> <br/>
                    <div className="rating">
                        <div className="rating-child rated">Rotten Tomatoes Rating: {detail.Response === 'True'&& detail.Type ==='movie'?detail.Ratings[1].Value:'N/A'}</div>
                        <div className="rating-child votes">Votes: {detail.imdbVotes}</div>
                        <div className="rating-child run-time">Duration-time: {detail.Runtime}</div>
                        <div className="rating-child release">Released: {detail.Released}</div>
                    </div>
                    <div className="more-detail">
                        <div className="more-detail-child director"><div className="detail-label">Director: </div><div className="detail-text"><div>{detail.Director}</div></div></div>
                        <div className="more-detail-child stars"><div className="detail-label">Starings: </div><div className="detail-text"><div>{detail.Actors}</div></div></div>
                        <div className="more-detail-child generes"><div className="detail-label">Generes: </div><div className="detail-text"><div>{detail.Genre}</div></div></div>
                        <div className="more-detail-child languages"><div className="detail-label">Langauge:</div><div className="detail-text"><div>{detail.Language}</div></div></div>
                        <div className="more-detail-child award"><div className="detail-label">Award:</div><div className="detail-text"><div>{detail.Awards}</div></div></div>
                    </div>
                </div>
                <div className="poster-detail"><div><img src={detail.Poster} alt={detail.Title} className="image" /> </div></div>
            </div>
        </div>
     );
}
 
export default MovieDetail;