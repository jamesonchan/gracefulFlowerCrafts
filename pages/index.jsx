import Head from 'next/head'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'
import Background from '../components/Background'
import FlowerItems from '../components/FlowerItems'
import Footer from '../components/Footer'
import client from '../lib/commerce'


export default function Home({merchant,products}) {


    

  return (
    <div className=''>
      <Head>
        <title>Graceful-FlowerCrafts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      {/* header */}
      <Header />
      <BottomHeader products={products}/>
      <Background />

     
      {/* main section */}
      <main>
        <FlowerItems products={products}/>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export async function getStaticProps(){
  const merchant = await client.merchants.about()
  const {data:products} = await client.products.list()

  return{
    props:{
      merchant,
      products
    }
  }
}
