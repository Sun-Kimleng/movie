import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MovieDetail from './components/movie-detail/movieDetail';
import NotFound from './components/404/notFound';

function App() {
  
  return (
    <div className="App">
    <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
   
    <Footer />
        
    
    </div>
  );
}

export default App;
