import Head from 'next/head'
import Header from '../components/Header'
import BottomHeader from '../components/BottomHeader'
import FlowerItems from '../components/FlowerItems'

export default function Home() {
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
        <FlowerItems />
      </main>
    </div>
  )
}
