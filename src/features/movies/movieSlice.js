import { createSlice } from "@reduxjs/toolkit";

//first initial state
const initialState = {
    movies: []
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
        }
    }

}
);

//export actions
export const {addMovie} = movieSlice.actions;

//export the reducer
export default movieSlice.reducer;

//export the state (state.[reducerName].[initialState])
export const getAllMovie = (state)=>state.movies.movies;

