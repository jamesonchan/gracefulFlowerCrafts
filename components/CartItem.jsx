import React from 'react'
import {useCartContext} from '../contexts/CartContextProvider'
import Image from 'next/image'
import {Button} from '@material-ui/core'





function CartItem({media:{source},name,id,line_total:{formatted_with_symbol}}) {

    const {handleRemoveFromCart} = useCartContext()
    
    return (
        <div className='bg-gray-100 flex py-5 px-2'>
            {/* image */}
            <div className='relative h-[165px] w-[210px] flex-shrink-0'>
                <Image 
                    src={source}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-2xl'
                />
            </div>

            {/* description */}
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p className='line-clamp-3 hover:underline'>{name}</p>
                    <span className='pl-20'>{formatted_with_symbol}</span>
                </div>

                <div className='flex items-center mt-5 space-x-1'>
                    <p className='text-sm'>Quantity</p>
                    <input className='w-8' type="number" min={1}/>
                </div>
                <div className='mt-3 -ml-2'>
                    <Button onClick={()=>handleRemoveFromCart(id)} style={{fontSize:'small',textTransform:'capitalize'}}>Remove</Button>
                </div>
                
            </div>
           
        </div>
    )
}

export default CartItem

