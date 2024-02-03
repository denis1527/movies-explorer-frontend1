import { useEffect, useRef, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MoviesList/MovieList";
import { getMoviesData } from "../../utils/MoviesApi";
import Preloader from "../../components/Preloader/Preloader";
import {
  filteredMoviesFromSearch,
  filterShortMovies,
  handleGetFromLocalStorage,
  handleSaveToLocalStorage
} from "../../utils/utils";
import useResponsiveCardsShowing from "../../hooks/useResponsiveCardsShowing";

// Styles
import './movies.css';
import {INITIAL_NUMBER_OF_CARDS_1280} from "../../utils/constants";

const Movies = ({ likeMovie, removeMovie }) => {
  const searchInputRef = useRef(null);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState(false);
  const [preloader, setPreloader] = useState(false);
  const [searchMessageError, setSearchMessageError] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState(false);
  const [moviesToShow, setMoviesToShow] = useState(INITIAL_NUMBER_OF_CARDS_1280);
  const [screenWidth] = useResponsiveCardsShowing();

  useEffect(() => {
    const searchFilteredFromLocalStorage = handleGetFromLocalStorage('searchFiltered');
    if (searchFilteredFromLocalStorage) {
      setFilteredMovies(searchFilteredFromLocalStorage.resultFilteredMovieList);
      searchInputRef.current.value = searchFilteredFromLocalStorage.searchTerm.trim();
      setShortMovies(searchFilteredFromLocalStorage.shortMovies);
    }
  }, []);

  const handleSearch = async () => {
    // Опустить проверку на пустой поисковой запрос, показать сообщение об ошибке
    setSearchMessageError(false);
    setPreloader(true);

    try {
      let movieListFromServer = handleGetFromLocalStorage('moviesListFromServer');
      if (!movieListFromServer) {
        movieListFromServer = await getMoviesData();
        handleSaveToLocalStorage('moviesListFromServer', movieListFromServer);
      }
      const searchTerm = searchInputRef.current.value.trim();
      const movieListFilteredByKeyword = filteredMoviesFromSearch(movieListFromServer, searchTerm);
      const resultFilteredMovieList = filterShortMovies(movieListFilteredByKeyword, shortMovies);

      if (resultFilteredMovieList.length === 0) {
        setSearchMessageError('Ничего не найдено');
      } else {
        setFilteredMovies(resultFilteredMovieList);
        handleSaveToLocalStorage('searchFiltered', { resultFilteredMovieList, searchTerm, shortMovies });
      }
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setPreloader(false);
    }
  };

  // Обновите логику пагинации и отображения короткометражек здесь

  return (
      <section className='movies'>
        <SearchForm
            searchInputRef={searchInputRef}
            handleSearch={handleSearch}
            showMessage={showMessage}
            onCheckbox={setShortMovies}
            shortMovies={shortMovies}
        />
        {preloader ? <Preloader/> : (
            <MovieList
                movies={filteredMovies}
                likeMovie={likeMovie}
                removeMovie={removeMovie}
                searchMessageError={searchMessageError}
                showMessage={showMessage}
            />
        )}
      </section>
  );
};

export default Movies;
