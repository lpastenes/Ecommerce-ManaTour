import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../helpers/gFetch'
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from 'react-bootstrap/Spinner'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {

    const [DetalleProduct, setDetalleProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    
    useEffect(() => {
        gFetch()// simula consulta a un api 
            .then(resProd => setDetalleProduct(resProd.find (prod => prod.id === productId)))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className='containerDetalle'>
            {loading ?
                <Spinner animation="border"/>
                :
                <ItemDetail DetalleProduct={DetalleProduct} />
            }
        </div>
    )
}

export default ItemDetailContainer