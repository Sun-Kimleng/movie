import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {ApiKey} from '../../common/apis/movieApiKey';
import { useDispatch } from "react-redux";


   
//create asyncthunk to allow function to access everywher
//naming ([indentifier-state/function-name])


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsynceMovie', async()=>{
    const searchText = 'the rock';
    const response = await movieApi.get(`?apikey=${ApiKey}&s=${searchText}&type=movie`);
            return response.data.Search;
})

//first initial state
const initialState = {
    movies: [],
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
        setIsPending: (state)=>{
            state.isPending = false;
        }
    },
    //for creating function not state
    extraReducers: {
        //function name
        [fetchAsyncMovies.pending]: ()=>{
            console.log('it is pending');
           
        },

        [fetchAsyncMovies.fulfilled]: (state, {payload})=>{
            console.log('succesfully');
            console.log(payload);
            //it the same as state.movies=payload
            return {...state, movies: payload };
        },

        [fetchAsyncMovies.rejected]: ()=>{
            console.log('rejected');
        }
    }
}
);

//export actions
export const {setIsPending, addMovie} = movieSlice.actions;

//export the reducer
export default movieSlice.reducer;

//export the state (state.[reducerName].[initialState])
export const getAllMovie = (state)=>state.movies.movies;
export const isPending = (state)=>state.movies.isPending;

