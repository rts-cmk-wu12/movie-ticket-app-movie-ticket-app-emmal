const BASE_API_URL = 'https://api.themoviedb.org/3/';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        authorization: `Bearer ${import.meta.env.VITE_API_READ_ACCESS_TOKEN}`
    }
}

const BASE_MONGO_URL = import.meta.env.VITE_BASE_MONGO_URL;

// fetch list from api
async function getData( endpoint, searchParams = {}, baseUrl = BASE_API_URL) {
    
    const API_URL = new URL(endpoint, baseUrl);
    Object.keys(searchParams).forEach(key => API_URL.searchParams.append(key, searchParams[key]));
    const response = await fetch(API_URL, options);

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        return false;
    }
}

const getUpcomingMovies = () => getData('movie/upcoming');
const getSearchResults = searchInput => getData('search/movie', {query: searchInput});
const getSingleId = (id) => getData(`movie/${id}`);
const getTopMovies = () => getData('movie/popular');
const getRecommendedMovies = () => getData('movie/top_rated');
const getMongoMovie = (tmdbId) => getData(`/movies/${tmdbId}`, undefined, BASE_MONGO_URL);
const getMovieShowings = (movieId) => getData(`/showings/${movieId}`, undefined, BASE_MONGO_URL);

export { 
    getUpcomingMovies, 
    getSearchResults, 
    getSingleId, 
    getTopMovies, 
    getRecommendedMovies, 
    getMongoMovie,
    getMovieShowings
}