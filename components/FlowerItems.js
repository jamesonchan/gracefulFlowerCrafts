import React,{useState,useEffect} from 'react'
import Item from './Item'




function FlowerItems({products}) {

    


    return (
        <div className=''>
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
