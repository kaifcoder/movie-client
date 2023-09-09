import { useEffect, useState } from 'react';
import './App.css';
import api from './api/axiosConfig';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/Notfound/NotFound';

function App() {
  const [movie, setmovie] = useState();
  const [movieData, setmovieData] = useState();
  const [review, setReview] = useState();
  const getMovies = async () => {

    try {
      const response = await api.get('/api/v1/movies');

      setmovie(response.data)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }


  }

  const getMovieData = async (id) => {
    try {
      const response = await api.get(`/api/v1/movies/${id}`);
      const singleMovie = response.data;
      setmovieData(singleMovie);
      setReview(singleMovie.reviewIds);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/" element={<Home movies={movie} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movieData} reviews={review} setReviews={setReview} />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
