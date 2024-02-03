import { useLocation } from "react-router-dom";
import { useState } from "react";

// Styles
import './movies-card.css'

function DurationConverter({ minutes }) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return <p className='card__time'>{hours}ч {remainingMinutes}м</p>
}

const MoviesCard = ({ movie, likeMovie, removeMovie }) => {
  const pathname = useLocation().pathname;
  const [isLikedMovie, setIsLikedMovie] = useState(movie.saved);

  // Обновленный обработчик для сохранения фильма
  const handleSaveMovie = async () => {
    try {
      await likeMovie(movie);
      setIsLikedMovie(true); // Обновляем только после успешного запроса
    } catch (error) {
      console.error("Ошибка при сохранении фильма:", error);
    }
  }

  // Обновленный обработчик для удаления фильма
  const handleDeleteMovies = async () => {
    try {
      await removeMovie(movie);
      setIsLikedMovie(false); // Обновляем только после успешного запроса
    } catch (error) {
      console.error("Ошибка при удалении фильма:", error);
    }
  }

  return (
    <div className='movies-card card'>
      <div className="card__container">
        <div className="card__heading">
          <h3 className="card__title">{movie.nameRU}</h3>
          <DurationConverter minutes={movie.duration} />
        </div>

        <a href={movie.trailerLink} target='_blank' rel="noreferrer">
          <img src={movie.image.url ? `https://api.nomoreparties.co${movie.image.url}` : movie.image} alt="Movie img" className="card__img flip-in-diag-1-tr"/>
        </a>
        {/* Updated buttons to reflect state change after successful API request */}
        {pathname === '/movies' && isLikedMovie ?
          <button className='button button_type_add' type='button' onClick={handleDeleteMovies}>&#10003;</button> :
          pathname !== '/saved-movies' &&
          <button className='button button_type_text' type='button' onClick={handleSaveMovie}>Сохранить</button>
        }
        {pathname === '/saved-movies' && <button className='button button_type_remove' type='button' onClick={handleDeleteMovies}>&#10006;</button>}
      </div>
    </div>
  );
}

export default MoviesCard;
