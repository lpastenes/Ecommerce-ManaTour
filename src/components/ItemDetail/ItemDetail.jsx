import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ DetalleProduct }) => {

    const onAdd = (cantidad) => {
        alert(`Se agrego ${cantidad} al carrito`)
    }

    return (
        <div key={DetalleProduct.id} className="col justify-content-around">
            <div className="col-med-4">
                <div className="cardDetalle card shadow">
                    <div className="inner">
                        <img src={DetalleProduct.imagen} className="card-img-top" alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{DetalleProduct.id}. {DetalleProduct.nombre}</h5>
                        <p className="card-text">desde: $ {DetalleProduct.precio}</p>
                        <p className="card-text">Descripción:<br/>{DetalleProduct.detalle}</p>
                        <p className="card-text">Máximo de Pasasjeros: {DetalleProduct.stock}</p>
                        <p className="card-text">categoria: {DetalleProduct.categoria}</p>
                        <ItemCount stock={DetalleProduct.stock} inicio={1} onAdd={onAdd} />
                    </div>                    
                </div>                
            </div>            
        </div>
    )
}

export default ItemDetail