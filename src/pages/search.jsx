import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import '../components/Header.scss';
import HomeSearch from "../components/home/HomeSearch";

export default function searchPage() {

    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
                <h1>Search Movies</h1>
            </header>
            <main>
                <HomeSearch />
            </main>
        </>
    )
}