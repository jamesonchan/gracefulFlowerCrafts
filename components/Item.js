import React,{useState} from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter'


function Item({id,title,price,description,category,image}) {

    const [hasFreeShipping] = useState(Math.random() < 0.5)

    return (
        <div className=''>
          <div className=''>
            {/* iamge tag */}
            <div className='group bg-white relative flex flex-col p-10 m-5 transition hover:shadow-md duration-150 '>
                <Image 
                    src={image}
                    height={150}
                    width={150}
                    objectFit='contain'
                />    
                <div className='opacity-0 group-hover:opacity-100 transition ease-in-out duration-300 absolute bg-yellow-400 rounded-md top-2 right-2 cursor-pointer'>
                    <button className='text-xs font-bold text-white px-2'>Add to Basket</button>
                </div>   
            </div>
            {/* price tag */}
            <div className='-mt-3 flex flex-col m-5'>
                <h4 className='text-xs truncate'>{title}</h4>
                <p className='text-xs text-gray-400'>{category}</p>
                <div className='text-sm font-bold text-gray-700 flex'>
                    <Currency 
                        quantity={price}
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
        </div>
    )
}

export default Item
