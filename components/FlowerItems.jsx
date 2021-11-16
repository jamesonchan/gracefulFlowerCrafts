import React,{useEffect} from 'react'
import Item from './Item'
import {useCartContext} from '../contexts/CartContextProvider'


function FlowerItems({products}) {
    
    const {searchTerm,searchResult,setSearchResult} = useCartContext()

    useEffect(() => {
            
                const results = products.filter(product=>product.name.toLowerCase().includes(searchTerm.substring()))
                setSearchResult(results)
            
            
        
            
        
    }, [searchTerm])
    

    return (
            <div className={`grid grid-flow-row-dense ${searchResult.length === 0 ? 'grid-cols-1 mt-5' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-auto bg-gray-50 max-w-7xl mt-5'} ` }>
           
            {searchResult.length === 0 ? (
                
                    <h1 className='font-semibold text-lg text-center'>Result not founded...</h1>
               
            ):(
               <>
                    {searchResult
                    .map(product=>(
                        <Item
                            key={product.id}
                            {...product}
                        />
                    ))}
               </>
            )}
                
            
            </div>
       
    )
}

export default FlowerItems
