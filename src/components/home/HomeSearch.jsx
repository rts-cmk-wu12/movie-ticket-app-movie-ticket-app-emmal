import { IoSearchOutline } from "react-icons/io5";
import './HomeSearch.scss';
import HomeSearchInput from "./HomeSearchInput";
import { useRef } from "react";
import { useNavigate } from "react-router";

export default function HomeSearch() {

    const formElement = useRef(null);
    const navigate = useNavigate();

    function submitHandler(event) {
        event.preventDefault();

        const formData = new FormData(formElement.current);
        const inputData = formData.get('search');

        formElement.current.reset();
        
        navigate(`/search-results/${inputData}`);
    }

    return (
        <form ref={formElement} className="search-form" onSubmit={submitHandler}>
            <HomeSearchInput className="search-form__input" type="text" placeholder="Search movies" name="search"/>
            <button className="search-form__button" type="submit"><IoSearchOutline /></button>
        </form>
    )
}