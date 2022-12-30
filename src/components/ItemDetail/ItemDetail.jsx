import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContex } from "../../context/cartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ DetalleProduct }) => {
    const [isCant, setIsCant] = useState(false)

    const { agregarCarrito, cartList } = useCartContex()

    const onAdd = (cantidad) => {        
        agregarCarrito({ ...DetalleProduct, cantidad })
        setIsCant(true)        
    }

    return (
        <div key={DetalleProduct.id} className="card mb-3" style={{ width: "auto" }}>
            <div className="row g-0">
                <div className="img-detalle col-md-4 inner">
                    <img src={DetalleProduct.imagen} className="img-fluid rounded-start" style={{ height: "390px" }} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{DetalleProduct.nombre}</h5>
                        <p className="card-text">desde: $ {DetalleProduct.precio}</p>
                        <p className="card-text">Descripción:<br />{DetalleProduct.detalle}</p>
                        <p className="card-text">Máximo de Pasajeros: {DetalleProduct.stock}</p>
                        <p className="card-text">categoria: {DetalleProduct.categoria}</p>
                        {isCant ?
                            <>
                                <Link to="/cart">
                                    <div>
                                        <button className='btn-carrito btn btn-warning'>Ir al carrito</button>
                                    </div>
                                </Link>
                                <Link to="/">
                                    <div>
                                        <button className='btn-seguir btn btn-secondary'>Seguir comprando</button>
                                    </div>
                                </Link>
                            </>
                            :
                                <ItemCount stock={DetalleProduct.stock} inicio={1} onAdd={onAdd} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail