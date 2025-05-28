import { useEffect, useState } from "react"
import { getRecommendedMovies } from "../../utilities/getData";
import RecommendedMovieCard from "../cards/RecommendedMovieCard";
import './RecommendedMovies.scss';

export default function RecommendedMovies() {

    const [data, setData] = useState(null);

    useEffect(() => {

        getRecommendedMovies()
        .then(data => {
            setData(data.results);
            //console.log(data.results);
        })
    }, []);

    return (
        <section className="recommended-movies">
            <h2>Recommended</h2>
            <ul className="recommended-movies__list">
                {data && data?.map(movie => {
                    return (
                        <RecommendedMovieCard key={movie.id} id={movie.id} />
                    )
                })}
            </ul>
        </section>
    )
}