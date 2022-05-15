import { useEffect, useState } from "react";
import {ApiKey} from '../../common/apis/movieApiKey';
import movieApi from "../../common/apis/movieApi";
import { useDispatch } from "react-redux";
import MovieListing from "../movie-listing/movieListing";
import { addMovie, fetchAsyncMovies } from "../../features/movies/movieSlice";
import './home.css'

const Home = () => {

    //use dispatch to update the state (interactive with actions)
    const dispatch = useDispatch();

    const [isPending, setIsPending] = useState(true);
    
    useEffect(()=>{ 
        dispatch(fetchAsyncMovies());
        
    },[]);

    return ( 
        
        <div className="home">
            {/* {isPending &&<div className="spinner-parent"><div className="parent"> <div className="spinner"></div></div></div>} */}

            <MovieListing />
        </div>
    );
}
 
export default Home;
