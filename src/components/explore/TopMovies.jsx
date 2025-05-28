import { useEffect, useState } from "react"
import { getTopMovies, getUpcomingMovies } from "../../utilities/getData";
import TopMovieCard from "../cards/TopMovieCard";
import './TopMovies.scss';

export default function TopMovies() {

    const [data, setData] = useState(null);

    useEffect(() => {

        getTopMovies()
        .then(data => {
            setData(data.results);
            //console.log(data.results);
        })
    }, []);

    function changeData(event) {

        const selectedButton = event.target;
        if (selectedButton.checked === true) {
            const buttonValue = selectedButton.value;
            if (buttonValue === 'now-showing') {

                getTopMovies()
                .then(data => {
                    setData(data.results);

                })} else {

                    getUpcomingMovies()
                    .then(data => {
                        setData(data.results);

                    })
                }
            }
        }

    return (
        <>
        <div className="top-movies__inputs">
            <label className="top-movies__label">Now Showing
                <input type="radio" defaultChecked className='top-movies__input selected' value="now-showing" name='radio' onChange={changeData} />
            </label>
            <label className="top-movies__label">Upcoming
                <input type="radio" className='top-movies__input' value='upcoming' name='radio' onChange={changeData} />
            </label>
        </div>
        <section className="top-movies">
            <h2 className="top-movies__heading">Top Movies</h2>
            <ul className="top-movies__list">
                {data && data?.map(movie => {
                    return (
                        <TopMovieCard key={movie.id} id={movie.id}/>
                    )
                })}
            </ul>
        </section>
        </>
    )
}

