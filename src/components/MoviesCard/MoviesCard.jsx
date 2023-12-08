import { useLocation } from "react-router-dom";
import './movies-card.css';

function DurationConverter({ minutes }) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return <p className='card__time'>{hours}ч {remainingMinutes}м</p>;
}

const MoviesCard = ({ title, duration, poster, id, savedMovies }) => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <main>
            <article className='movies-card card'>
                <ul className="movies-cards__container">
                    <header className="card__heading">
                        <h2 className="card__title">{title}</h2>
                        <DurationConverter minutes={duration} />
                    </header>

                    <img src={poster} alt="Movie Image" className="card__img flip-in-diag-1-tr" />

                    {pathname === '/movies' && savedMovies ?
                        <button className='button button_type_add' type='button'>✓</button> :
                        pathname !== '/saved-movies' &&
                        <button className='button button_type_text' type='button'>Сохранить</button>
                    }

                    {pathname === '/saved-movies' && <button className='button button_type_remove' type='button'>✖</button>}
                </ul>
            </article>
        </main>
    );
};

export default MoviesCard;

