import React,{useEffect} from 'react'
import {useCartContext} from '../contexts/CartContextProvider'
import CartItem from '../components/CartItem'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'
import { useRouter } from 'next/router'


function cart() {
    const {cart,handleEmptyCart,fetchCart} = useCartContext()

    useEffect(() => {
       fetchCart()
    }, [])

    const router = useRouter()

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

               <section className='bg-white shadow-lg rounded-2xl sm:ml-5 col-span-1 mt-5'>
                    <h1 className='px-2 font-semibold text-gray-700 text-2xl mb-5'>Checkout</h1>
                    {/* items total box */}
                    <div className='bg-yellow-300 flex justify-between px-2 rounded-md'>
                        <p className='text-md'>Item(s) Total</p>
                        <span className='text-md'>{cart.subtotal?.formatted_with_symbol}</span>
                    </div>
                    {/* checkout button */}
                    <div className='bg-gray-700 text-center mt-10 p-2 rounded-md cursor-pointer active:bg-yellow-300 transition active:scale-105 duration-200'>
                        <button className='text-white font-semibold'>Proceed to checkout</button>
                    </div>
                    <p onClick={()=>router.push('/')} className='text-sm mt-2 font-semibold hover:underline hover:text-red-300 text-right px-2 cursor-pointer'>Keep shopping</p>
                    
               </section>

            </main>
        </div>
    )
}

export default cart
