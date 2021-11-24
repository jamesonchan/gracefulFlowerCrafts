import React,{useEffect,useState} from 'react'
import {useCartContext} from '../contexts/CartContextProvider'
import CartItem from '../components/CartItem'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'
import { useRouter } from 'next/router'
import {Button} from '@material-ui/core'
import CartFooter from '../components/CartFooter'
import Head from 'next/head'
import FlipMove from 'react-flip-move'









function cart() {
    const {cart,handleEmptyCart,fetchCart} = useCartContext()
    

  

    useEffect(() => {
       fetchCart()
    }, [])



   


    const router = useRouter()

   
    
    return (

        
        
        <div className=''>
            <Head>
            <title>Graceful-FlowerCrafts-cart</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <BottomHeader />
            {cart.line_items?.length > 0 ? (
                <main className=' sm:grid grid-cols-4 max-w-6xl mx-auto min-h-full'>

                    <div className='flex-col col-span-3 mt-5'>
                        <div className='mb-5 justify-between flex'>
                            <h1 className='px-2 font-semibold text-gray-700 text-2xl '>{cart.line_items?.length} item(s) in your basket</h1>
                            <Button onClick={()=>handleEmptyCart()} style={{fontSize:'small',textTransform:'capitalize',font:'semibold',opacity:`${cart.total_items>0 ? '100' : '0'}`}}>Empty basket</Button>
                        </div>
                   
                        <FlipMove>
                            {cart.line_items?.map(item=>(
                                    <CartItem 
                                        key={item.id}
                                        {...item}
                                    />
                                ))}
                        </FlipMove>
                    
                    </div>
                
                {/* checkout section */}
                <section className='sm:ml-5 col-span-1 mt-5'>
                        <h1 className='px-2 font-semibold text-gray-700 text-2xl mb-5'>Checkout</h1>
                        {/* items total box */}
                        <div className='bg-white shadow-lg rounded-2xl'>
                            <div className='bg-yellow-300 flex justify-between px-2 rounded-md'>
                                <p className='text-md'>Item(s) Total</p>
                                <span className='text-md'>{cart.subtotal?.formatted_with_symbol}</span>
                            </div>
                        
                            {/* checkout button */}
                            <div className='bg-gray-700 text-center mt-5 p-2 rounded-md cursor-pointer active:bg-yellow-300 transition active:scale-105 duration-200'>
                                <button onClick={()=>router.push('/checkout')} className='text-white font-semibold'>Proceed to checkout</button>
                            </div>
                            <p onClick={()=>router.push('/')} className='text-sm mt-2 font-semibold hover:underline hover:text-red-300 text-right px-2 cursor-pointer'>Keep shopping</p>
                        </div>

                </section>
                
           
                </main>
            ):(
                <div className='p-20 text-center'>
                    <h1 className='text-3xl'>Your basket is empty.</h1>
                    <p onClick={()=>router.push('/')} className='text-md mt-3 underline hover:opacity-60 cursor-pointer'>♡ Pick some flower crafts to fill it up</p>
                </div>
            )}
            <CartFooter />
        </div>
    )
}

export default cart

