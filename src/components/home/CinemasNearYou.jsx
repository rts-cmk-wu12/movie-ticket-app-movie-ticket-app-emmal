import { FaLocationDot } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import './CinemasNearYou.scss';

export default function CinemasNearYou() {

    return (
        <section className="cinemas">
            <h2 className="cinemas__heading">Cinemas Near You</h2>
            <ul className="cinemas__list">
                <li className="cinemas__list-item">
                    <article className="cinema-card">
                        <img className="cinema-card__image" src="/images/Rectangle432.png" alt="Cinema logo" />
                        <div className="cinema-card__text-container">
                            <div className="cinema-card__location">
                                <FaLocationDot className="cinema-card__location-icon cinema-card__icon"/>
                                <p className="cinema-card__location-text">5.2 kilometers</p>
                            </div>
                            <h3 className="cinema-card__heading">Viva Cinema</h3>
                            <p className="cinema-card__opening-hours">Closes at 10.00 PM</p>
                        </div>
                        <div className="cinema-card__rating">
                            <IoStar className="cinema-card__rating-icon cinema-card__icon"/>
                            <p className="cinema-card__rating-text">4.9</p>
                        </div>
                    </article>
                </li>
                <li className="cinemas__list-item">
                    <article className="cinema-card">
                        <img className="cinema-card__image" src="/images/Rectangle321.png" alt="Cinema logo" />
                        <div className="cinema-card__text-container">
                            <div className="cinema-card__location">
                                <FaLocationDot className="cinema-card__location-icon cinema-card__icon"/>
                                <p className="cinema-card__location-text">6.5 kilometers</p>
                            </div>
                            <h3 className="cinema-card__heading">EbonyLife Cinema</h3>
                            <p className="cinema-card__opening-hours">Closes at 09.00 PM</p>
                        </div>
                        <div className="cinema-card__rating">
                            <IoStar className="cinema-card__rating-icon cinema-card__icon"/>
                            <p className="cinema-card__rating-text">5.0</p>
                        </div>
                    </article>
                </li>
            </ul>
        </section>
    )
}