import { useParams } from 'react-router';
import MovieDetailsHeader from '../../components/movie-details/MovieDetailsHeader';
import MovieDetailsMain from '../../components/movie-details/MovieDetailsMain';
import { useEffect, useState } from 'react';
import { getMongoMovie, getSingleId } from '../../utilities/getData';

export default function movieDetailsPage() {

    const [data, setData] = useState(null);
    const [mongoMovieDetails, setMongoMovieDetails] = useState(null);
    const params = useParams();
    const id = params.id;

    useEffect(() => {

        getSingleId(id)
        .then(data => {
            setData(data);
            //console.log(data);
        })
        getMongoMovie(id)
        .then(data => {
            setMongoMovieDetails(data);
            //console.log(data);
        })
    }, [id]);
    
    return (
        <>
            <MovieDetailsHeader />
            {data && mongoMovieDetails &&
            <MovieDetailsMain data={data} mongoMovieDetails={mongoMovieDetails} />}
        </>
    )
}