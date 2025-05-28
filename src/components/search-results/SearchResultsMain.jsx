import MovieCard from '../cards/MovieCard';
import './SearchResultsMain.scss';

export default function SearchResultsMain({ data, searchInput }) {

    return (
        <main className="search-results">
{/*             {data?.length &&
            <p>Just a moment</p>
            } */}
            <h2>Search results for <span className="search-results__input-value">"{searchInput}"</span>:</h2>
            <ul className="search-results__list">
                {data && data?.map(element => {

                    return (
                        <MovieCard key={element.id} id={element.id} />  
                    )
                })}
            </ul>
            {(data?.results?.length === 0) &&
            <p className="search-results__error-message">Sorry we couldn't find that. Try something else...</p>
            }
        </main>
    )
}