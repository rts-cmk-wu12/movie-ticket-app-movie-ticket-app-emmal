import { Link } from 'react-router';
import './RecommendedMovieCard.scss';
import { useEffect, useState } from 'react';
import { getSingleId } from '../../utilities/getData';
import placeholderImage from '../../assets/placeholder-no-image.jpg';

export default function RecommendedMovieCard({ id }) {

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
        <li className='recommended-movie-card'>
            <Link to={`/movie/${id}`}>
                {(data?.poster_path?.length > 0) ?
                    <img className="recommended-movie-card__image" src={`${API_URL_IMAGE}${IMAGE_WITDH}${data?.poster_path}`} alt={`Poster for ${data?.title}`} />   
                    :   
                    <img className="recommended-movie-card__image placeholder-image" src={placeholderImage} alt={`Placeholder image for ${data?.title}`} />
                }
                <h3 className='recommended-movie-card__heading'>{data?.title}</h3>
            </Link>
        </li>
    )
}