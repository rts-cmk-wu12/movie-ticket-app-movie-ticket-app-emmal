import { IoIosArrowBack } from "react-icons/io";
import '../Header.scss';
import { useNavigate } from "react-router";

export default function MovieDetailsHeader() {

    const navigate = useNavigate();

    return (
        <header className="header">
            <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
            <h1>Search Results</h1>
        </header>
    )
}