import { useParams } from "react-router"
import SelectSeatsHeader from "../../components/select-seats/SelectSeatsHeader";
import SelectSeatsMain from "../../components/select-seats/SelectSeatsMain";
import { useEffect, useState } from "react";
import { getMovieShowings } from "../../utilities/getData";

export default function selectSeatsPage() {

    const [allShowings, setAllShowings] = useState(null);
    const params = useParams();
    const movieId = params.id;

    useEffect(() => {

        getMovieShowings(movieId)
        .then(data => {
            setAllShowings(data);
            console.log(data);
        });
    }, [movieId]);

    return (
        <>
            <SelectSeatsHeader />
            {allShowings &&
            <SelectSeatsMain allShowings={allShowings}/>}
        </>
    )
}