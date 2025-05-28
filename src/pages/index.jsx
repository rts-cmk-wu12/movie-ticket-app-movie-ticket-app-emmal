import HomeMain from "../components/home/HomeMain";
import Footer from "../components/footer/Footer";
import { useEffect, useState } from "react";
import { getUpcomingMovies } from "../utilities/getData";
import HomeHeader from "../components/home/HomeHeader";

export default function homePage() {

    const [upcomingMoviesData, setUpcomingMoviesData] = useState(null);

    useEffect(() => {

        getUpcomingMovies()
        .then(data => {
            setUpcomingMoviesData(data.results);
            //console.log(data.results);
        });
    }, []);

    return (
        <>
            <HomeHeader />
            <HomeMain upcomingMoviesData={upcomingMoviesData}/>
            <Footer />
        </>
    )
}