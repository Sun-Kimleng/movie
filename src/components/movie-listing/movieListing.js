import { useSelector } from 'react-redux';
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
                            <div className="poster">
                                <img src={movie.Poster} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
 
export default MovieListing;