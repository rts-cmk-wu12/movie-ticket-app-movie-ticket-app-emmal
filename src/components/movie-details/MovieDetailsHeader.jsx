import { IoIosArrowBack } from "react-icons/io";
import { CiBookmarkMinus } from "react-icons/ci";
import '../Header.scss';
import { useNavigate } from "react-router";

export default function MovieDetailsHeader() {

    const navigate = useNavigate();

    return (
        <header className="header">
            <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
            <h1>Movie Details</h1>
            <button className="header__button"><CiBookmarkMinus /></button>
        </header>
    )
}