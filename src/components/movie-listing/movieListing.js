import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { getAllMovie } from '../../features/movies/movieSlice';
import './movieListing.css';

const MovieListing = () => {

    //use useSelector to retrieve the value of state
    const movies = useSelector(getAllMovie);
    console.log(movies);

   

    if(movies.Response === 'True'){
    return ( 
        <div className="movie-listing">
            {
                movies.Search.map((movie, index)=>(
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