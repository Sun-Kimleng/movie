import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieDetail, getDetail } from '../../features/movies/movieSlice';
import './movieDetail.css'

const MovieDetail = () => {

    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const detail = useSelector(getDetail);

    useEffect(
        ()=>{
            dispatch(fetchAsyncMovieDetail(imdbID));
        }, [dispatch, imdbID]
    );
  
    return ( 
        <div className="movie-detail">
            <div className="detail-container">
                <div className="movie-detail">
                    <div className="title">title</div>
                    <div className="rating">
                        <div className="rated"></div>
                        <div className="votes"></div>
                        <div className="run-time"></div>
                        <div className="year"></div>
                    </div>
                    <div className="director"></div>
                    <div className="stars"></div>
                    <div className="generes"></div>
                    <div className="languages"></div>
                    <div className="award"></div>
                    
                </div>
                <div className="poster-detail"></div>
            </div>
        </div>
     );
}
 
export default MovieDetail;