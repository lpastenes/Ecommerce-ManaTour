import { useContext, createContext, useState } from "react";

const CartContext = createContext([])

export const useCartContex = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const agregarCarrito = (product) => {

        const idx = cartList.findIndex(prod => prod.id === product.id) 

        if (idx !== -1) {
            cartList[idx].cantidad += product.cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, product])
        } 
    }    
    
    const precioTotal = () => cartList.reduce((contador, producto) => contador += (producto.precio * producto.cantidad), 0)

    const cantidadTotal = () => {        
        return cartList.reduce((contador, producto) => contador + producto.cantidad, 0)
    }
    
    const vaciarCarrito = () => {setCartList([])}

    const eliminarItem = (id) => { setCartList(cartList.filter(prod => prod.id !== id)) }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            precioTotal,
            cantidadTotal,
            vaciarCarrito,
            eliminarItem
        }}>
            {children}
        </CartContext.Provider>
    )
}