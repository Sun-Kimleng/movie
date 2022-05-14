import { createSlice } from "@reduxjs/toolkit";

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

