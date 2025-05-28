export default function CheckoutForm() {

    return (
        <form>
            <label>Your Email
                <input type="email" />
            </label>
            <label>Cardholder's Name
                <input type="text" />
            </label>
            <label>Card Number
                <input type="number" />
            </label>
            <div>
                <label>Date
                    <input type="date" />
                </label>
                <label>CVV
                    <input type="number" />
                </label>
            </div>
            <button>Pay Now | xxxkr</button>
        </form>
    )
}