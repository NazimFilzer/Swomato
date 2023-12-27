import { useContext } from 'react';
import Logo from '../assets/logo.jpg'
import Button from '../UI/Button';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgessContext';


const Header = () => {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    }, 0);

    function handleShowCart() {
        userProgressCtx.showCart();
    }

    return (
        <header id='main-header'>
            <div id='title'>
                <img src={Logo} alt="" />
                <h1>Swomato</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart} >Cart({totalItems})</Button>
            </nav>
        </header>
    );
}

export default Header;