import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { gFetch } from '../../helpers/gFetch'
import ItemList from "../ItemList/ItemList"
import Spinner from 'react-bootstrap/Spinner'
import './ItemListContainer.css'

const ItemListContainer = (greeting) => {

  const [products, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  const { idCategoria } = useParams()

  useEffect(() => {
    if (idCategoria) {
      gFetch()// simular consulta a un api 
        .then(data => setProduct(data.filter(prod => prod.categoria === idCategoria)))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    } else {
      gFetch()// simular consulta a un api 
        .then(data => setProduct(data))
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
          <Spinner animation="border"/>
          :
          <ItemList products={products} />
        }
      </div>
    </section>
  )
}

export default ItemListContainer