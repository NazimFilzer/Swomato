import currencyFormatter from '../util/formatter'
import Button from '../UI/Button';
import { useContext } from 'react';
import CartContext  from '../store/CartContext';


const MealItem = ({ meal }) => {
    const cartCtx=useContext(CartContext);

    const handleClick = () => {
        cartCtx.addItem(meal);
    }

    
    return <li className="meal-item">
        <article>
            <img src={`http://localhost:3000/${meal.image}`} alt="melas" />
            <div>
                <h3>{meal.name}</h3>
                <p className="meal-item-price">{currencyFormatter.format(meal.price)} </p>
                <p className="meal-item-description">{meal.description} </p>
            </div>
            <p className="meal-item-action">
                <Button onClick={handleClick}>Add to cart</Button>
            </p>
        </article>
    </li>;
}

export default MealItem;