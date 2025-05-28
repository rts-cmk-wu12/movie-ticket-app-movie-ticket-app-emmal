import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import '../components/Header.scss';

export default function yourTicketsPage() {

    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
                <h1>Your Tickets</h1>
            </header>
            <main>
                <p>Coming soon</p>
            </main>
        </>
    )
}