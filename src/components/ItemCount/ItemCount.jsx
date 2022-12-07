import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = ({ stock, inicio, onAdd }) => {

    const [count, setCount] = useState(inicio)

    const sumar = () => {
        if (stock > count) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const AumentarCantidad = () => {
        onAdd(count)
    }

    return (
        <>
        <div className="containerButton">
            <Button variant="warning" className="Btn1" onClick={restar}>-</Button>
            <label>Pasajeros<br/>{count}</label>
            <Button variant="warning" className="Btn1" onClick={sumar}>+</Button>
        </div>
        <Button variant="secondary" className="Agregar" onClick={AumentarCantidad}>Agregar al Carro</Button>
        </>
    )
}

export default ItemCount