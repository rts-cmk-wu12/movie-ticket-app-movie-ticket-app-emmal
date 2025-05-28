import TicketCard from '../cards/TicketCard';
import './ETicketMain.scss';
import '../Button.scss';
import { FaFileDownload } from "react-icons/fa";
import { useNavigate } from 'react-router';
import { BsDisplay } from 'react-icons/bs';
import { useEffect, useState } from 'react';

export default function ETicketMain() {

    const navigate = useNavigate();
    const [display, setDisplay] = useState('none');
    const [gradient, setGradient] = useState('none');

    useEffect(() => {
        setDisplay('none');
        setGradient('none');
    }, []);

    const style = {
        main: {
            // some gradient code on background
        },
        div: {
            display: display
        }
    }

    function clickHandler() {
        setDisplay('block');
    }

    return (
        <main style={style.main}>
            <section className="e-ticket__text">
                <h2>Instruction</h2>
                <p>Come to the cinema, show and scan the barcode to the space provided. Continue to comply with health protocols</p>
            </section>
            <TicketCard />
            <button className='button' onClick={clickHandler}>Download E-Ticket</button>
            <div style={style.div} className='e-ticket__download-wrapper'>
                <div className='e-ticket__download'>
                    <div className='e-ticket__icon-container'>
                        <FaFileDownload className='e-ticket__icon' />
                    </div>
                    <h2>Your ticket has been downloaded</h2>
                    <p className='e-ticket__download-text'>Adele is a Scottish heiress whose extremely wealthy family owns estates and grounds. When she was a teenager. Read More</p>
                    <button className='button-dark' onClick={() => navigate('/')}>Back to Homepage</button>
                </div>
            </div>
        </main>
    )
}