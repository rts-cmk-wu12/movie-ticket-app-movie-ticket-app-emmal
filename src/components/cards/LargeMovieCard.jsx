import { Link } from "react-router";
import './LargeMovieCard.scss';

export default function LargeMovieCard({ data }) {

    const API_URL_IMAGE = 'https://image.tmdb.org/t/p/';
    const IMAGE_WITDH = 'w300';


    return (
        <li className="large-movie-card">
            <Link to={`/movie/${data?.id}`} className="large-movie-card__link">
                <img className="large-movie-card__image" src={`${API_URL_IMAGE}${IMAGE_WITDH}${data?.backdrop_path}`} alt={`Backdrop for ${data?.title}`} />
                <h3 className="large-movie-card__heading">{data?.title}</h3>
                <p className="large-movie-card__date">{data?.release_date}</p>
            </Link>
        </li>
    )
}