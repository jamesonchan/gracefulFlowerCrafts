import React,{useEffect} from 'react'
import {useCartContext} from '../contexts/CartContextProvider'
import CartItem from '../components/CartItem'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'


function cart() {
    const {cart,handleEmptyCart,fetchCart} = useCartContext()

    useEffect(() => {
       fetchCart()
    }, [])

    return (
        <div>
            <Header />
            <BottomHeader />
            <main className=' sm:grid grid-cols-4 max-w-6xl mx-auto'>

                <div className='flex-col col-span-3 mt-5'>
                    <h1 className='px-2 font-semibold text-gray-700 text-2xl mb-5'>{cart.line_items?.length} item(s) in your basket</h1>
                    {cart.line_items?.map(item=>(
                            <CartItem 
                                key={item.id}
                                {...item}
                            />
                        ))}
              
                </div>

               <section className='bg-yellow-300 sm:ml-5 col-span-1'>
                    <h1>Checkout</h1>
               </section>

            </main>
        </div>
    )
}

export default cart
