import React,{forwardRef} from 'react'
import {useCartContext} from '../contexts/CartContextProvider'
import Image from 'next/image'
import {Button} from '@material-ui/core'






const CartItem = forwardRef(({media,name,id,line_total:{formatted_with_symbol},quantity},ref) =>{

    const {handleRemoveFromCart,handleUpdateCartQty} = useCartContext()
    

    
    return (
        <div ref={ref} className='bg-white flex py-5 px-2'>
            {/* image */}
            <div className='relative h-[165px] w-[210px] flex-shrink-0 cursor-pointer'>
                <Image 
                    src={media?.source}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                    priority
                />
            </div>

            {/* description */}
            <div className='flex flex-col flex-grow pl-5'>
                <div className=''>
                    <p className='line-clamp-3 hover:underline'>{name}</p>
                    <span className='font-semibold text-sm'>{formatted_with_symbol}</span>
                </div>

                <div className='flex items-center mt-5 space-x-1'>
                    <p className='text-sm'>Quantity</p>
                    <input className='w-8 text-center outline-none' type="number" min={1} value={quantity} onChange={(e)=>handleUpdateCartQty(id,e.target.value)} />
                </div>
                <div className='mt-3 -ml-2'>
                    <Button onClick={()=>handleRemoveFromCart(id)} style={{fontSize:'small',textTransform:'capitalize'}}>Remove</Button>
                </div>
                
            </div>
           
        </div>
    )
})

export default CartItem

