import Head from 'next/head'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'
import FlowerItems from '../components/FlowerItems'
import Footer from '../components/Footer'
import commerce from '../lib/commerce'

export default function Home({merchant,products}) {

  console.log(merchant,products)

  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
      {/* header */}
      <Header />
      <BottomHeader />

     
      {/* main section */}
      <main>
        <FlowerItems products={products}/>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

// export async function getServerSideProps(context){
//   const products = await fetch('https://fakestoreapi.com/products').then(
//     res=>res.json()
//   )
//   return {
//     props:{
//       products
//     }
//   }
// }

export async function getStaticProps(){
  const merchant = await commerce.merchants.about()
  const {data:categories} = await commerce.categories.list()
  const {data:products} = await commerce.products.list()

  return{
    props:{
      merchant,
      products
    }
  }
}
