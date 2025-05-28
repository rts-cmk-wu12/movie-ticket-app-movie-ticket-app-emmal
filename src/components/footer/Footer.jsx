import { NavLink } from "react-router";
import { GoHomeFill } from "react-icons/go";
import { MdExplore } from "react-icons/md";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { TiUser } from "react-icons/ti";
import './Footer.scss';

export default function Footer() {

    return (
        <footer className="footer">
            <nav className="footer__menu">
                <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    <GoHomeFill />
                </NavLink>
                <NavLink to="/explore" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    <MdExplore />
                </NavLink>
                <NavLink to="/saved-plan" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    <BsFillBookmarkDashFill />
                </NavLink>
                <NavLink to="/settings" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>
                    <TiUser />
                </NavLink>
            </nav>
        </footer>
    )
}