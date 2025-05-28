import fallbackProfileImage from '../../assets/Rectangle432.png';
import { IoIosArrowForward } from "react-icons/io";
import { TbGraphFilled } from "react-icons/tb";
import { TiUserAdd } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { HiMiniTicket } from "react-icons/hi2";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router';
import './SettingsMain.scss';

export default function SettingsMain() {

    return (
        <main>
            <Link to={'/personal-data'} className='settings__flex-container-row-long'>
                <div className='settings__flex-container-row-short'>
                    <img className='settings__image' src={fallbackProfileImage} alt="placeholder image profile" />
                    <div className='settings__flex-container-column'>
                        <h3>Miles Morales</h3>
                        <p className='settings__text'>Film Hunter</p>
                    </div>
                </div>
                <IoIosArrowForward className='settings__arrow-icon' />
            </Link>
            <section className='settings__section'>
                <h2>Account</h2>
                <ul>
                    <li>
                        <Link to={'/personal-data'} className='settings__flex-container-row-long'>
                            <div className='settings__flex-container-row-short'>
                                <div className='settings__icon-container color-blue'>
                                    <TbGraphFilled className='settings__icon' />
                                </div>
                                <h3>Personal Data</h3>
                            </div>
                                <IoIosArrowForward className='settings__arrow-icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/payment'} className='settings__flex-container-row-long'>
                            <div className='settings__flex-container-row-short'>
                                <div className='settings__icon-container color-accent'>
                                    <TiUserAdd className='settings__icon' />
                                </div>
                                <h3>Payment</h3>
                            </div>
                            <IoIosArrowForward className='settings__arrow-icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/deactivate-account'} className='settings__flex-container-row-long'>
                            <div className='settings__flex-container-row-short'>
                                <div className='settings__icon-container color-red'>
                                    <FaTrash className='settings__icon' />
                                </div>
                                <h3>Deactivate Account</h3>
                            </div>
                            <IoIosArrowForward className='settings__arrow-icon' />
                        </Link>
                    </li>
                </ul>
            </section>
            <section className='settings__section'>
                <h2>Privacy & Policy</h2>
                <ul>
                    <li>
                        <Link to={'/notifications'} className='settings__flex-container-row-long'>
                            <div className='settings__flex-container-row-short'>
                                <div className='settings__icon-container color-blue'>
                                    <FaBell className='settings__icon' />
                                </div>
                                <h3>Notifications</h3>
                            </div>
                            <IoIosArrowForward className='settings__arrow-icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/your-tickets'} className='settings__flex-container-row-long'>
                            <div className='settings__flex-container-row-short'>
                                <div className='settings__icon-container color-accent'>
                                    <HiMiniTicket className='settings__icon' />
                                </div>
                                <h3>Your Tickets</h3>
                            </div>
                            <IoIosArrowForward className='settings__arrow-icon' />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/logout'} className='settings__flex-container-row-long'>
                            <div className='settings__flex-container-row-short'>
                                <div className='settings__icon-container color-red'>
                                    <IoLogOut className='settings__icon' />
                                </div>
                                <h3>Logout</h3>
                            </div>
                            <IoIosArrowForward className='settings__arrow-icon' />
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    )
}