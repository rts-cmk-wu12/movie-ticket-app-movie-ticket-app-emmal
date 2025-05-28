import { useNavigate } from 'react-router';
import '../Button.scss';

export default function Button({ data }) {

    const navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault();
        navigate(`/select-seats/${data._id}`)
    }

    return (
        <button className='button' onClick={handleClick}>Book Ticket</button>
    )
}