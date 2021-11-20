import React,{useState} from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter'
import {useCartContext} from '../contexts/CartContextProvider'
import {useRouter} from 'next/router'


function Item ({id,title,price,description,category,image,name}){

    const [hasFreeShipping] = useState(Math.random() < 0.5)
    
    const {handleAddToCart} = useCartContext()

    const router = useRouter()
  
    return (
        
          <div>
            {/* iamge tag */}
            <div className='group relative flex flex-col m-5 transition hover:shadow-md duration-150 cursor-pointer '>
                    <Image
                        onClick={()=>router.push(`/product/${id}`)} 
                        src={image.url}
                        height={200}
                        width={200}
                        objectFit='cover'
                    />    
                <div className='opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 absolute bg-yellow-400 rounded-md top-2 right-2 cursor-pointer'>
                    <button onClick={()=>handleAddToCart(id,1)} className='text-xs font-bold text-white px-2'>Add to Basket</button>
                </div>   
            </div>
            {/* price tag */}
            <div className='-mt-3 flex flex-col m-5'>
                <h4 className='text-xs truncate'>{name}</h4>
                <p dangerouslySetInnerHTML={{__html:description}} className='text-xs text-gray-400'></p>
                <div className='text-sm font-bold text-gray-700 flex'>
                    <Currency 
                        quantity={price.raw}
                        currency='USD'
                    />
                    {hasFreeShipping && (
                        <div className='flex items-center ml-2 bg-red-300 rounded-full px-1'>
                            <p className='text-xs'>Free shipping</p>
                        </div>
                    )}
                </div>
               
            </div>
            
          </div>
      
    )
}

export default Item

// test for git
