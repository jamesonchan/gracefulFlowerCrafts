import React from 'react'
import {useCartContext} from '../contexts/CartContextProvider'

function CartItem({media:{source},name,id}) {

    const {handleRemoveFromCart} = useCartContext()
    
    return (
        <div>
            <img src={source} alt="" />
            <h4>{name}</h4>
           <button onClick={()=>handleRemoveFromCart(id)}>remove</button>
        </div>
    )
}

export default CartItem

