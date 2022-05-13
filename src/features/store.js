//use to store all reducer and allow to access to all other component
import {configureStore} from '@reduxjs/toolkit';
import movieReducer from './movies/movieSlice'

export const store = configureStore({
    reducer: { 
        movies: movieReducer,
    }
});
