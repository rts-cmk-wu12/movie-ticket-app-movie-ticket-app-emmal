import { useNavigate } from "react-router";
import '../Header.scss';
import { IoIosArrowBack } from "react-icons/io";

export default function ETicketHeader () {

    const navigate = useNavigate();

    return (
        <header className="header">
            <button className="header__button" onClick={() => navigate('/')}><IoIosArrowBack /></button>
            <h1>E-Ticket</h1>
        </header>
    )
}