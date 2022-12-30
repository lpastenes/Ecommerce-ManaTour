import Badge from 'react-bootstrap/Badge';
import { useCartContex } from '../../context/cartContext';

const CartWidget = () => {
    const { cantidadTotal, cartList } = useCartContex()
    return (
        <>
        {cartList.length !== 0 ?
            <div id="carroCompra" className="carro">
                <button className="btn btn-ligth">                    
                    <Badge bg="dark">{ cantidadTotal() }</Badge>
                    <i className="fa-solid fa-cart-shopping text-dark" />
                </button>
            </div>
        :
        <div id="carroCompra" className="carro">
                <button className="btn btn-ligth">                   
                    <i className="fa-solid fa-cart-shopping text-dark" />
                </button>
            </div>
        }
        </>
    )
}

export default CartWidget