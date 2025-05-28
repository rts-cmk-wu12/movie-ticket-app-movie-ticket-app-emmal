import { useNavigate } from 'react-router';
import '../Header.scss';
import { IoIosArrowBack } from "react-icons/io";

export default function SelectSeatsHeader() {

    const navigate = useNavigate();

    return (
        <header className="header">
            <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
            <h1>Select Seats</h1>
        </header>
    )
}