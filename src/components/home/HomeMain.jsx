import CinemasNearYou from "./CinemasNearYou";
import HomeSearch from "./HomeSearch";
import MoviesComingSoon from "./MoviesComingSoon";

export default function HomeMain({ upcomingMoviesData }) {

    return (
        <main className="home-main">
            <HomeSearch />
            <MoviesComingSoon data={upcomingMoviesData}/>
            <CinemasNearYou />
        </main>
    )
}