import Head from 'next/head'
import Image from 'next/image'
import {FullHero} from '../components/Hero'
import Main from '../components/Main'
import ProductGrid from '../components/ProductGrid'
import {allProducts, getSomeProducts} from '../utils/getProducts'




export default async function Home(props) {

    const products = await getSomeProducts(4)


  return (
    <>
      <Head>
        <title>Welcome to the Hygraph Shop</title>
      </Head>
      <FullHero 
        title="The best bikes in multiple styles" 
        description='Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
        button={{text: 'Shop Now', link: '/shop'}}
        image='/test-photo.jpg'
        large

        />

      {products && <ProductGrid title="Featured Products" products={products} />}
    </>
  )
}

