import {createContext, useContext, useState} from 'react'
const CartContext = createContext()
import client from '../lib/commerce'

export const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])


    const fetchCart = async()=>{
        setCart(await client.cart.retrieve())
    }

    const handleSearchChange = (e)=>{
        setSearchTerm(e.target.value)
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

    const handleUpdateCartQty = async(productId, quantity)=>{
        const {cart} = await client.cart.update(productId,{quantity})
        setCart(cart)
    }




    return(
        <CartContext.Provider value={{ 
            cart,
            searchTerm,
            searchResult,
            handleSearchChange,
            setSearchTerm,
            setSearchResult,
            fetchCart,
            handleAddToCart,
            handleRemoveFromCart,
            handleEmptyCart,
            handleUpdateCartQty,}}
            >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = ()=>useContext(CartContext)