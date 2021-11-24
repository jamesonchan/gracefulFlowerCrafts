import {createContext, useContext, useState} from 'react'
const CartContext = createContext()
import client from '../lib/commerce'

export const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState({})
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [order, setOrder] = useState({})
    const [errorMessage, setErrorMessage] = useState('')
   

    const fetchCart = async()=>{
        setCart(await client.cart.retrieve())
    }

    const handleAddToCart = async(productId,quantity,productInStock,cartQuantityById)=>{
        if(cartQuantityById >= productInStock){
            alert('sorry,added items have exceeded our stock limit')
            return
        }
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

    const refreshCart = async ()=>{
        const newCart = await client.cart.refresh()
        setCart(newCart)
    }

    const handleCaptureCheckout = async (checkoutTokenId,newOrder)=>{
        try {
            const incomingOrder = await client.checkout.capture(checkoutTokenId,newOrder)
            setOrder(incomingOrder)
            refreshCart()
        } catch (error) {
            setErrorMessage(error.data.error.message)
        }
    }



    return(
        <CartContext.Provider value={{ 
            cart,
            searchTerm,
            searchResult,
            order,
            errorMessage,
            setOrder,
            setErrorMessage,
            handleCaptureCheckout,
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