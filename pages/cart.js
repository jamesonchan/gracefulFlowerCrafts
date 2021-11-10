import React from 'react'
import {useCartContext} from '../contexts/CartContextProvider'
import CartItem from '../components/CartItem'

function cart() {
    const {cart,handleEmptyCart} = useCartContext()
    return (
        <div>
            {cart.line_items?.map(item=>(
                <CartItem 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}

export default cart
