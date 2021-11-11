import {createContext, useContext, useState} from 'react'
const CartContext = createContext()
import client from '../lib/commerce'

export const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState({})
    console.log(cart)

    const fetchCart = async()=>{
        setCart(await client.cart.retrieve())
    }

    const handleAddToCart = async(productId,quantity)=>{
        const {cart} = await client.cart.add(productId,quantity)
        setCart(cart)
    }

    const handleRemoveFromCart = async(productId)=>{
        const {cart}= await client.cart.remove(productId)
        setCart(cart)
    }

    const handleEmptyCart = async()=>{
        const {cart}= await client.cart.empty()
        setCart(cart)
    }


    return(
        <CartContext.Provider value={{ cart , fetchCart ,handleAddToCart,handleRemoveFromCart,handleEmptyCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=>useContext(CartContext)