import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetail"
import Spinner from 'react-bootstrap/Spinner'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [DetalleProduct, setDetalleProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { productId } = useParams()
    
    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'productos', productId)
        getDoc(queryDoc)
        .then(resp => setDetalleProduct({ id: resp.id, ...resp.data()}))
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