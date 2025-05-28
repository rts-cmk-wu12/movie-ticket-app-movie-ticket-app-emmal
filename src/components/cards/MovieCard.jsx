import { useEffect, useState } from "react"
import { getSingleId } from "../../utilities/getData";
import roundNumber from "../../utilities/roundNumber";
import minutesToHours from "../../utilities/minutesToHours";
import { Link } from "react-router";
import { IoStar } from "react-icons/io5";
import './MovieCard.scss';
import placeholderImage from '../../assets/placeholder-no-image.jpg';

export default function MovieCard({ id }) {
    
    const [data, setData] = useState(null);
    const API_URL_IMAGE = 'https://image.tmdb.org/t/p/';
    const IMAGE_WITDH = 'w300';

    useEffect(() => {

        getSingleId(id)
        .then(data => {
            setData(data);
            //console.log(data);
        })
    }, []);

    return (
        <li className="movie-card">
            <Link to={`/movie/${id}`} className="movie-card__link">
                {(data?.poster_path?.length > 0) ?
                    <img className="movie-card__image" src={`${API_URL_IMAGE}${IMAGE_WITDH}${data?.poster_path}`} alt={`Poster for ${data?.title}`} />   
                    :   
                    <img className="movie-card__image placeholder-image" src={placeholderImage} alt={`Placeholder image for ${data?.title}`} />
                }
                <div className="movie-card__text-container">
                    <h3 className="movie-card__heading">{data?.title}</h3>
                    <p className="movie-card__rating">
                        <IoStar className="movie-card__star"/>
                        {roundNumber(data?.vote_average)}/10
                    </p>
                    <ul className="movie-card__list">
                        {data && data?.genres.map(genre => {
                            return (
                                <li key={genre.id} className="movie-card__item">{genre?.name}</li>
                            )
                        })}
                        {data?.runtime != 0 && 
                        <li className="movie-card__item">{minutesToHours(data?.runtime)}</li>}
                    </ul>
                </div>
            </Link>
        </li>
    )
}