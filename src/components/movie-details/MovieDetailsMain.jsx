import minutesToHours from '../../utilities/minutesToHours';
import roundNumber from '../../utilities/roundNumber';
import Button from './Button';
import './MovieDetailsMain.scss';
import { IoStar } from "react-icons/io5";

export default function MovieDetailsMain({ data, mongoMovieDetails }) {

    const API_URL_IMAGE = 'https://image.tmdb.org/t/p/';
    const IMAGE_WITDH = 'w500';
    
    return (
        <main className="movie-details">
            {(data?.poster_path?.length > 0) ?
                <img className="movie-details__image" src={`${API_URL_IMAGE}${IMAGE_WITDH}${data?.poster_path}`} alt={`Poster for ${data?.title}`} />   
                :   
                <img className="movie-details__image placeholder-image" src='../../../placeholder-no-image.jpg' alt={`Placeholder image for ${data?.title}`} />
            }
            <section className='movie-details__text'>
                <h2 className='movie-details__heading'>{data?.title}</h2>
                <p>Director: | <IoStar className='movie-details__star' /> {roundNumber(data?.vote_average)}/10</p>
                <ul className="movie-details__list">
                    {data && data?.genres.map(genre => {
                        return (
                            <li key={genre.id} className="movie-details__item">{genre?.name}</li>
                        )
                    })}
                    <li className='movie-details__item'>{minutesToHours(data?.runtime)}</li>
                </ul>
            </section>
            <section className='movie-details__text'>
                <h2 className='movie-details__heading'>Synopsis</h2>
                <p className='movie-details__resume'>{data?.overview}</p>
            </section>
            {mongoMovieDetails &&
            <Button data={mongoMovieDetails} />}
        </main>
    )
}