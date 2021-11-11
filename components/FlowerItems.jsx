import React,{useState,useEffect} from 'react'
import Item from './Item'






function FlowerItems({products}) {
   
    

    return (
        <div className='grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto bg-gray-50 max-w-7xl'>
            {products
            .slice(0,4)
            .map(product=>(
                <Item
                    key={product.id}
                    {...product}
                />
            ))}

        <img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="" />
       
            
            {products
            .slice(4,products.length)
            .map(product=>(
                <Item
                    key={product.id}
                    {...product}
                />
            ))}
        </div>
    )
}

export default FlowerItems
