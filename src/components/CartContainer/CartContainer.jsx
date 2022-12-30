import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react";
import { useCartContex } from "../../context/cartContext"
import { Link } from "react-router-dom"
import './CartContainer.css'

const CartContainer = () => {

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [msg, setMsg] = useState ('')

    const [id, setId] = useState('')
    const [dataForm, setFormData] = useState({
        name: '',
        phone: '',
        email1: '',
        email2: ''
    })

    const { cartList, vaciarCarrito, precioTotal, eliminarItem, cantidadTotal } = useCartContex()

    const addOrder = async (e) => {
        e.preventDefault()
        const order = {}
        order.compra = dataForm
        order.precio = precioTotal()
        order.items = cartList.map(({ id, precio, nombre, cantidad }) => ({ id, precio, nombre, cantidad }))

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')

        await addDoc(orderCollection, order)
            .then(resp => setId(resp.id))
            .catch(err => console.log(err))
            .finally(() => console.log('Finalizado'))

        const queryCollection = collection(db, 'productos')
        const actualizarStock = query(
            queryCollection,
            where(documentId(), 'in', cartList.map(it => it.id))
        )

        const batch = writeBatch(db)

        await getDocs(actualizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            })
            ))
            .catch(err => console.log(err))
            .finally(() => {
                setFormData({
                    name: '',
                    phone: '',
                    email1: '',
                    email2: ''
                })
                vaciarCarrito()
            })
        batch.commit()
    }

    const handleOnChange = (e) => {
        setFormData({ ...dataForm, [e.target.name]: e.target.value })
        setEmail(e.target.value)
        if (regex.test(email) === false) {
            setError('Ingrese los datos correctos')
        }else{
            setError('')
            return true
        }                
    }

    const submit = () => {
        if (email !='') {
            setMsg(', el detalle de su compra fue enviada a ' + email)
        }else{
            setError('Ingrese los datos correctos')            
        }
    }        
        
    

    return (
        <section >
            <div >
                <h2 className="display-6">Carrito de compras</h2>
            </div>
            <div className="cart-container">
                {cartList.length !== 0 ?
                    <div>
                        {cartList.map(prod =>
                            <div key={prod.id}>
                                <div className="w-40">
                                    <img src={prod.imagen} alt="" className='w-25' />
                                </div>
                                {prod.nombre} - {prod.categoria} - Precio: {prod.precio} - Pasajeros: {prod.cantidad}
                                <button onClick={() => eliminarItem(prod.id)} className="btn-eliminar btn btn-warning"><i className="fa-regular fa-trash-can text-dark" /></button>
                            </div>
                        )
                        }
                        <h5>Total Pasajeros: {cantidadTotal()} - El precio total es: {precioTotal()} </h5>
                        <button className="btn-vaciar btn btn-warning" onClick={vaciarCarrito} >Vaciar Carrito</button>
                        <div className="card col-md-4 mt-5 m-auto">
                            <form className="formulario" onSubmit={addOrder} >
                                <h4>Resumen de tu compra</h4>
                                <h5>Total Productos: {cartList.length}</h5>
                                <h5>Total Pasajeros: {cantidadTotal()}</h5>
                                <h5>Precio Total a Pagar: {precioTotal()}</h5>
                                <h6>Ingrese sus datos:</h6>
                                <input className="form-control" type="text" onChange={handleOnChange} name='name' value={dataForm.name} placeholder="Ingrese su nombre" /><br />
                                <input className="form-control" type="text" onChange={handleOnChange} name='phone' value={dataForm.phone} placeholder="Ingrese teléfono" /><br />
                                <input className="form-control" type="text" onChange={handleOnChange} name='email1' value={dataForm.email1} placeholder="Ingrese email" /><br />
                                <input className="form-control" type="text" onChange={handleOnChange} name='email2' value={dataForm.email2} placeholder="Reingrese email" /><br />
                                
                                {(regex.test(email) === true) && (dataForm.email1 === dataForm.email2) && (dataForm.name != '') && (dataForm.phone != '') ?
                                    <button type="submit" className="final-compra btn btn-danger" onClick={submit}>Finalizar Compra</button>                                    
                                    :                                    
                                    <h6 className='text-danger validMail'>{error}</h6>
                                }
                                
                            </form>
                        </div>
                    </div>
                    :                    
                    <div>                        
                        <h3>No hay productos en el carro</h3><br />
                        {id !== '' && `El numero de orden de compra es : ${id} ${msg}`}
                        <br />
                        <Link to='/' >
                            <button type="button" className="btn-seguir btn btn-secondary">
                                Seguir Comprando
                            </button>
                        </Link>
                    </div>
                }
            </div>
        </section>
    )
}

export default CartContainer