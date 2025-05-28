import { IoIosArrowBack } from "react-icons/io";
import '../Header.scss';
import { useNavigate } from "react-router";

export default function SettingsHeader() {

    const navigate = useNavigate();

    return (
        <header className="header">
            <button className="header__button" onClick={() => navigate(-1)}><IoIosArrowBack /></button>
            <h1>Settings</h1>
        </header>
    )
}