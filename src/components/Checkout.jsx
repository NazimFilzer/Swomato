import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import { useContext } from "react";
import currencyFormatter from "../util/formatter";
import Input from "../UI/Input";
import UserProgressContext from "../store/UserProgessContext";
import Button from "../UI/Button";
import axios from "axios";

const Checkout = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0);

    function handleClose() {
        userProgressCtx.hideCheckout();
    }

    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target); // Establishing a new form data object
        const customerData = Object.fromEntries(fd.entries()); //getting the form data as an object

        axios.post('http://localhost:3000/orders', {
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });

        handleClose();
    }


    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
            <form onSubmit={handleSubmit} >
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

                <Input label="Full Name" type="text" id="name" />
                <Input label="E-Mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code" />
                    <Input label="City" type="text" id="city" />
                </div>

                <p className="modal-actions">
                    <Button type="button" textOnly onClose={handleClose} onClick={handleClose} >Close</Button>
                    <Button >Submit Order</Button>
                </p>
            </form>
        </Modal>
    );
}

export default Checkout;