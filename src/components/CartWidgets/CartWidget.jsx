import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
        <div id="carroCompra" className="carro">
            <Badge bg="dark">0</Badge>
            <a type="button" data-toggle="modal" data-target="#exampleModal">        
                <i className="fa-solid fa-cart-shopping text-dark"/>                                                       
            </a>                        
        </div>
    )
}

export default CartWidget