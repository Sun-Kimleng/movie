import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getAllMovie } from '../../features/movies/movieSlice';
import './movieListing.css';

const MovieListing = () => {

    //use useSelector to retrieve the value of state
    const movies = useSelector(getAllMovie);

    return ( 
        <div className="movie-listing">
            {
                movies.map((movie, index)=>(
                    <div className="key" key={index}>
                        <div className="movie-card">
                            <Link to=" " className="poster">
                                <img className="poster-image" src={movie.Poster} />
                                <div className="titlle">{movie.Title}</div>
                                <div className="year">{movie.Year}</div>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default MovieListing;