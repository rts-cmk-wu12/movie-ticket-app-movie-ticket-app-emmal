import './SelectSeatsMain.scss';
import screenImg from '../../assets/Screen.png';
import { Fragment, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import '../Button.scss';
import findListOfCinemaNames from '../../utilities/findListOfCinemaNames';
import findDateAndTime from '../../utilities/findDateAndTime';
import findNumberOfSeats from '../../utilities/findNumberOfSeats';

export default function SelectSeatsMain({allShowings}) {

    const selectElementCinema = useRef(null);
    const navigate = useNavigate();
    const listOfCinemaNames = findListOfCinemaNames(allShowings);
    const [datetime, setDatetime] = useState([]);
    const [allSeats, setAllSeats] = useState(0);
    const [bookedSeats, setBookedSeats] = useState([]);
    
    useEffect(() => {
        changeHandler();
        
    }, [selectElementCinema.current]);

    function changeHandler() {
        const currentCinemaName = selectElementCinema?.current?.value;
        const listOfDatesAndTime = findDateAndTime(allShowings, currentCinemaName);
        const numberOfSeats = findNumberOfSeats(allShowings, currentCinemaName);

        setDatetime(listOfDatesAndTime);
        setAllSeats(numberOfSeats);
    }

    function clickHandler(event) {
        event.preventDefault();
        navigate('/checkout');
        //navigate(`checkout/${showingId}`);
    }


    return (
        <main className='select-seats'>
            <div className="select-seats__selects">
                <label className="select-seats__label wide">Cinema
                    {allShowings && 
                    <select ref={selectElementCinema} className="select-seats__select" name="cinema" id="cinema" onChange={changeHandler}>
                        {listOfCinemaNames.map(cinema => {
                            return (
                                <option key={cinema} value={cinema}>{cinema}</option>
                            );
                        })}
                    </select>}
                </label>
                <label className="select-seats__label">Date
                    <select className="select-seats__select" name="date" id="date">
                        {datetime.map(date => {
                            const dateString = new Date(date.datetime).toDateString();
                            return (
                                <option key={date._id} value={dateString}>{dateString}</option>
                            )
                        })}
                    </select>
                </label>
                <label className="select-seats__label">Time
                    <select className="select-seats__select" name="time" id="time">
                        {datetime.map(date => {
                            const timeString = new Date(date.datetime).toTimeString('da-DK');
                            return (
                                <option key={date._id} value={timeString}>{timeString}</option>
                            )
                        })}
                    </select>
                </label>
            </div>
            <div className='select-seats__cinema-layout'>
                <img src={screenImg} alt="screen image" />
                <div className='select-seats__seat-container'>
                    {new Array(allSeats).fill(
                            <label className='select-seats__seat-label'>
                                <input type="checkbox" className='select-seats__seat-input' />
                            </label>
                    ).map((seat, index) => {
                        return (
                            <Fragment key={index}>
                                {seat}
                            </Fragment>
                        )
                    })}
                </div>
            </div>
            <div className='select-seats__color-codes'>
                <div className='select-seats__color-code'>
                    <div className='select-seats__color selected'></div>
                    <p className='select-seats__color-text'>Selected</p>
                </div>
                <div className='select-seats__color-code'>
                    <div className='select-seats__color reserved'></div>
                    <p className='select-seats__color-text'>Reserved</p>
                </div>
                <div className='select-seats__color-code'>
                    <div className='select-seats__color'></div>
                    <p className='select-seats__color-text'>Available</p>
                </div>
            </div>
            <button className='button' onClick={clickHandler}>Checkout</button>
        </main>
    )
}