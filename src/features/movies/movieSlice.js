import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {ApiKey} from '../../common/apis/movieApiKey';
import { movieUrl } from "../../common/apis/movieApi";
import axios from "axios";

   
//create asyncthunk to allow function to access everywher
//naming ([indentifier-state/function-name])

//movie async thunk
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovie', async()=>{
    const searchText = 'spider';
    const response = await axios.get(`${movieUrl}/?apikey=${ApiKey}&s=${searchText}&type=movie`);

    return response.data;
});
//show asyncthunk
export const fetchAsyncShow = createAsyncThunk('movies/fetchAsyncShow',
        async()=>{
            const searchText = 'spider';
            const response = await axios.get(`${movieUrl}/?apikey=${ApiKey}&s=${searchText}&type=series`);
            return response.data;
        }
);

//movie detail async thunk
export const fetchAsyncMovieDetail = createAsyncThunk('movie/fetchAsyncMovieDetail', async(id)=>
        {
            
            const response = await axios.get(`${movieUrl}/?apikey=${ApiKey}&i=${id}&plot=full`);

            return response.data;
        }
);



//first initial state
const initialState = {
    movies: [],
    shows: [],
    detail:[],
    isPending: true,

}

//create reducer with action

const movieSlice = createSlice({
    //reducer name
    name: 'movies',
    //initial state
    initialState,
    //reducer with actions
    reducers: {
        addMovie: (state, {payload})=>{
            //payload is sth gonna change
            state.movies = payload;
        },
        setIsPending: (state, payload)=>{
            state.isPending = payload;
        },

        //clearn up action
        cleanUpMovie: (state)=>{
            state.movies = {};
        }
    },
    //for creating function (usefull for fetching data)
    extraReducers: {
        //movies
        [fetchAsyncMovies.pending]: ()=>{
            console.log('it is pending');
           
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
            console.log('succesfully');
            
            //it the same as state.movies=payload
            return {...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: ()=>{
            console.log('rejected');
        },

        //shows
        [fetchAsyncShow.pending]: ()=>{
            console.log('it is pending');
           
        },
        [fetchAsyncShow.fulfilled]: (state, {payload})=>{
            console.log('succesfully');
            
            //it the same as state.movies=payload
            return {...state, shows: payload };
        },
        [fetchAsyncShow.rejected]: ()=>{
            console.log('rejected');
        },

        //details movie or show
        [fetchAsyncMovieDetail.pending]: ()=>{
            console.log('movie detail is pending');
        },
        [fetchAsyncMovieDetail.fulfilled]: (state, {payload})=>{
            console.log('sucessful');
            return {...state, detail: payload};
        },
        [fetchAsyncMovieDetail.rejected]: ()=>{
            console.log('movie detail is rejected');
        }
    }
}
);

//export actions
export const {setIsPending, addMovie, cleanUpMovie} = movieSlice.actions;

//export the reducer
export default movieSlice.reducer;

//export the state (state.[reducerName].[initialState])
export const getAllMovie = (state)=>state.movies.movies;
export const isPending = (state)=>state.movies.isPending;
export const getAllShow = (state)=>state.movies.shows;
export const getDetail = (state)=> state.movies.detail;

