import React from 'react'
import { useRouter } from 'next/router'
import client from '../lib/commerce'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'




function Details({products}) {
    
    const router = useRouter()
    const {id} = router.query

    const product = products.filter(product=>product.id === id)

   
    return (
        < >
            <Header />
            <BottomHeader />
            <div className='sm:flex mt-5 bg-red-300'>
                {/* image box */}
                <div className='p-5'>
                    <img className='object-cover w-[700px] h-[600px] rounded-xl' src={product[0].media.source} alt="" />
                </div>
                {/* description and addtocart */}
                <div>
                    <p>I am description</p>
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


