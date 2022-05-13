import { useEffect, useState } from "react";
import {ApiKey} from '../../common/apis/movieApiKey';
import movieApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import MovieListing from "../movie-listing/movieListing";
import { addMovie } from "../../features/movies/movieSlice";

const Home = () => {

    //use dispatch to update the state (interactive with actions)
    const dispatch = useDispatch();

    const [isPending, setIsPending] = useState(true);
    const searchText = 'Harry';
    useEffect(()=>{
        const fetchMovie = async()=>{
            await movieApi.get(`?apikey=${ApiKey}&s=${searchText}&type=movie`)
            .then(response=>{
                dispatch(addMovie(response.data.Search));
                console.log(response.data.Search)
            })
            .catch(error=>{
                console.log(error);
            });
        };
        fetchMovie();
        setIsPending(false);
    }, []);

    return ( 
        <div className="home">
            {isPending && <p>Loading....</p>}
            <MovieListing />
        </div>
    );
}
 
export default Home;
