import { getAllShow } from '../../features/movies/movieSlice';
import '../movie-listing/movieListing.css';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


const ShowListing = () => {

    const shows = useSelector(getAllShow);
    console.log(shows);

    if(shows.Response === 'True'){
        return ( 
            <div className="movie-listing">
                {
                    shows.Search.map((show, index)=>(
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