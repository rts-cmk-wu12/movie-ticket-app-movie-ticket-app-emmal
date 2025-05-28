import './TicketCard.scss';
import barcode from '../../assets/Barcode.png'

export default function TicketCard() {
    return (
        <div className='ticket'>
            <h2 className='ticket__heading'>Film: Shang-Chi</h2>
            <p className='ticket__category'>e-ticket</p>
            <p className='ticket__subheading'>Date: <span className='ticket__text line-break'>27/5-2025</span></p>
            <p className='ticket__subheading'>Seats: <span className='ticket__text line-break'>1</span></p>
            <p className='ticket__subheading'>Location: <span className='ticket__text line-break'>Viva Cinema</span></p>
            <p className='ticket__subheading'>Time: <span className='ticket__text line-break'>13:00</span></p>
            <p className='ticket__subheading'>Payment: <span className='ticket__text line-break'>Successful</span></p>
            <p className='ticket__subheading'>Order: <span className='ticket__text line-break'>1234567</span></p>
            <img className='ticket__image' src={barcode} alt="barcode" />
        </div>
    )
}