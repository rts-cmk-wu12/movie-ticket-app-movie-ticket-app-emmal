import { Link } from 'react-router';
import './HomeHeader.scss';

export default function HomeHeader() {

    return (
        <header className='home-header'>
            <Link to={'/'}>
                <h1 className='home-header__heading'>Movie Ticket App</h1>
            </Link>
        </header>
    )
}