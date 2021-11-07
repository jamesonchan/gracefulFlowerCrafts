import React from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter'

function Item({id,title,price,description,category,image}) {
    return (
        <div className='bg-white relative flex flex-col p-10 m-5'>
            <p className='absolute top-2'></p>
            <Image 
                src={image}
                height={200}
                width={200}
                objectFit='contain'
            />
            <h4 className='my-3'>{title}</h4>

            <p className='text-xs my-2 line-clamp-3'>{description}</p>

            <div className='mb-5'>
                <Currency 
                    quantity={price}
                    currency='USD'
                />
            </div>
            <div></div>
        </div>
    )
}

export default Item
