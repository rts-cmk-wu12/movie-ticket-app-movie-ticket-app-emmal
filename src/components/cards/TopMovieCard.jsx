import { useEffect, useState } from 'react';
import './TopMovieCard.scss';
import { getSingleId } from '../../utilities/getData';
import { Link } from 'react-router';
import placeholderImage from '../../assets/placeholder-no-image.jpg';
import { IoStar } from "react-icons/io5";
import roundNumber from '../../utilities/roundNumber';

export default function TopMovieCard({ id }) {

    const [data, setData] = useState(null);
    const API_URL_IMAGE = 'https://image.tmdb.org/t/p/';
    const IMAGE_WITDH = 'w300';

    useEffect(() => {

        getSingleId(id)
        .then(data => {
            setData(data);
        })
    }, [id]);

    return (
        <li>
            <Link to={`/movie/${id}`}>
                {(data?.poster_path?.length > 0) ?
                    <img className="top-movie-card__image" src={`${API_URL_IMAGE}${IMAGE_WITDH}${data?.poster_path}`} alt={`Poster for ${data?.title}`} />   
                    :   
                    <img className="top-movie-card__image placeholder-image" src={placeholderImage} alt={`Placeholder image for ${data?.title}`} />
                }
            </Link>
            <h3>{data?.title}</h3>
            <p className="top-movie-card__rating">
                <IoStar className="top-movie-card__star"/>
                {roundNumber(data?.vote_average)}/10
            </p>
        </li>
    )
}