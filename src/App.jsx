import React from 'react';
import './App.css';
import MoviesList from './modules/molecules/MoviesList';
import H1 from './modules/elements/H1';
import Footer from './modules/layout/Footer';

const App = () => {
  return (
    <div className="App">
      <H1 />
      <MoviesList />
      <Footer />
    </div>
  );
};

export default App;
