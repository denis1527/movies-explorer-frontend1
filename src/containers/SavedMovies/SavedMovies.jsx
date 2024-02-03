import React, { useEffect, useRef, useState } from 'react';
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MoviesList/MovieList";
import Preloader from "../../components/Preloader/Preloader";
import {
  filteredMoviesFromSearch,
  filterShortMovies
} from "../../utils/utils";

// Styles
import './saved-movies.css';

const SavedMovies = ({ savedMovies, setSavedMovies, removeMovie }) => {
  const searchInputRef = useRef(null);
  const [preloader, setPreloader] = useState(false);
  const [searchMessageError, setSearchMessageError] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [shortMovies, setShortMovies] = useState(false);

  useEffect(() => {
    // Здесь уже нет необходимости делать запрос, так как savedMovies передаются через пропсы
  }, []);

  const handleSearch = async () => {
    setSearchMessageError(false);
    setPreloader(true);

    try {
      const searchTerm = searchInputRef.current.value.trim();
      const movieListFilteredByKeyword = filteredMoviesFromSearch(savedMovies, searchTerm);
      const resultFilteredMovieList = filterShortMovies(movieListFilteredByKeyword, shortMovies);

      if (resultFilteredMovieList.length === 0) {
        setSearchMessageError('Ничего не найдено');
      } else {
        setSavedMovies(resultFilteredMovieList);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setPreloader(false);
    }
  };

  // Обновите логику отображения короткометражек здесь

  return (
      <section className='saved-movies'>
        <SearchForm
            searchInputRef={searchInputRef}
            handleSearch={handleSearch}
            showMessage={showMessage}
            onCheckbox={setShortMovies}
            shortMovies={shortMovies}
        />
        {preloader ? <Preloader /> : (
            <MovieList
                movies={savedMovies}
                removeMovie={removeMovie}
                searchMessageError={searchMessageError}
                showMessage={showMessage}
            />
        )}
      </section>
  );
};

export default SavedMovies;
