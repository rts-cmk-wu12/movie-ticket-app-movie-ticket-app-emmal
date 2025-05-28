import { useNavigate } from "react-router";
import { IoIosArrowBack } from "react-icons/io";
import '../components/Header.scss';

export default function logoutPage() {

    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
                <h1>Logout</h1>
            </header>
            <main>
                <p>Coming soon</p>
            </main>
        </>
    )
}