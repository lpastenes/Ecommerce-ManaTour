//import ItemCount from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ product }) => {
    return (
            <div key={product.id} className="col justify-content-around">
                <div className="col-med-4">
                    <div className="card shadow">
                        <div className="inner">
                            <img src={product.imagen} className="card-img-top" alt="" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{product.id}. {product.nombre}</h5>
                            <p className="card-text">desde: $ {product.precio}</p>
                            <p className="card-text">categoria: {product.categoria}</p>
                            <Link to={`/item/${product.id}`}>
                                <button type="button" className="btn btn-secondary">
                                    Ver detalle
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Item