import React from 'react'
import { useRouter } from 'next/router'
import client from '../../lib/commerce'
import Header from '../../components/Header'
import BottomHeader from '../../components/BottomHeader'
import {useCartContext} from '../../contexts/CartContextProvider'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"




function Details({products}) {
    
    const router = useRouter()
    const {id} = router.query

    const product = products.filter(product=>product.id === id)

    const {handleAddToCart} = useCartContext()

    console.log(product)

   const {id:productId,media:{source},name,price:{formatted_with_symbol},inventory:{available},description,assets} = product[0]
    return (
        < >
            <Header />
            <BottomHeader />
            <div className='lg:flex mt-5 max-w-7xl mx-auto'>
                {/* image box */}
                <div className='p-5'>
                    <Carousel
                        showStatus={false}
                        showIndicators={true}
                    >
                       
                        {assets.map(asset=>(
                            <div className='rounded-lg'>
                                <img  className='object-cover rounded-xl' src={asset.url} alt="" />
                            </div>
                        ))}
                       
                    </Carousel>
                </div>
                {/* description and addtocart */}
                <div className='p-5'>
                    <h1 className='text-2xl line-clamp-3'>{name}</h1>
                    <p className='mt-2 line-clamp-3 text-lg text-gray-600' dangerouslySetInnerHTML={{__html:description}}></p>
                    <div className='mt-5 flex items-center justify-between'>
                        <p className='text-2xl font-bold'>{formatted_with_symbol}</p>
                        <p className='text-sm font-semibold'>{ available > 0 ? `${available} in stock` : 'currently out of stock'}</p>
                    </div>
                    <div onClick={()=>handleAddToCart(productId,1)} className='bg-gray-700 text-center p-2 mt-8 rounded-full cursor-pointer active:scale-x-100 hover:scale-105 transition duration-200 hover:opacity-90'>
                        <button className='text-white font-semibold text-lg'>Add to basket</button>
                    </div>
                </div>
            </div>
          
        </>
    )
}

export default Details

export async function getStaticPaths(){
    const {data:products} = await client.products.list()
    
    const paths = products.map(product=>({
        params:{id:product.id}
    }))
    
    return{
        paths,
        fallback:false
    }

    
}

export async function getStaticProps(){
    const {data:products} = await client.products.list()
    return{
      props:{
        products
      }
    }
  }


