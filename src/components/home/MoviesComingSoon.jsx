import LargeMovieCard from "../cards/LargeMovieCard";
import './MoviesComingSoon.scss';

export default function MoviesComingSoon({ data }) {

    return (
        <section className="movies-coming-soon">
            <h2 className="movies-coming-soon__heading">Coming Soon</h2>
            <ul className="movies-coming-soon__list">
                {data && data?.map(largeMovieCard => {
                    return (
                        <LargeMovieCard key={largeMovieCard?.id} data={largeMovieCard} />
                    )
                })}
            </ul>
        </section>
    )
}