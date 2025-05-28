import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import '../Header.scss';

export default function ExploreHeader() {

    const navigate = useNavigate();

    return (
        <header className="header">
            <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
                <h1>Explore Movies</h1>
            <button className="header__button" onClick={() => navigate('/search')}><IoSearchOutline /></button>
        </header>
    )
}