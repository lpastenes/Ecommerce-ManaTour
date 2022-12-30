import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import ItemList from "../ItemList/ItemList"
import Spinner from 'react-bootstrap/Spinner'
import './ItemListContainer.css'

const ItemListContainer = (greeting) => {
  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)
  const { idCategoria } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'productos')

    if (idCategoria) {
      const queryFiltrada = query(queryCollection, where('categoria', '==', idCategoria))
      getDocs(queryFiltrada)
        .then(resp => setProduct(resp.docs.map(products => ({ id: products.id, ...products.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      getDocs(queryCollection)
        .then(resp => setProduct(resp.docs.map(products => ({ id: products.id, ...products.data() }))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }

  }, [idCategoria])
  
  return (
    <section >
      <div >
        <h2 className="display-6">{greeting.titulo}</h2>
      </div>
      <div className='containerCard'>
        {loading ?
          <Spinner animation="border" />
          :
          <ItemList products={products} />
        }
      </div>
    </section>
  )
}

export default ItemListContainer