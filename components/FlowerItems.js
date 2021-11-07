import React,{useState,useEffect} from 'react'
import Item from './Item'




function FlowerItems({products}) {

    


    return (
        <div className='grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto bg-gray-50 max-w-7xl'>
            {products?.map(product=>(
                <Item 
                    key={product.id}
                    {...product}
                />
            ))}
        </div>
    )
}

export default FlowerItems
