import Visa from '../../assets/Card-Payment-1.png';
import CheckoutForm from './CheckoutForm';

export default function CheckoutMain() {

    return (
        <main>
            <section>
                <h2>Payment Method</h2>
                <img src={Visa} alt="Visa card" />
            </section>
            <section>
                <h2>Payment Details</h2>
                <CheckoutForm />
            </section>
        </main>
    )
}