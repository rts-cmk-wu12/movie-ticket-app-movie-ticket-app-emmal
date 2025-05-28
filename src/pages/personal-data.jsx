import { IoIosArrowBack } from "react-icons/io";
import '../components/Header.scss';
import { useNavigate } from "react-router";

export default function personalDataPage() {

    const navigate = useNavigate();

    return (
        <>
            <header className="header">
                <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
                <h1>Personal Data</h1>
            </header>
            <main>
                <p>Coming soon</p>
            </main>
        </>
    )
}