import Head from 'next/head'
import Image from 'next/image'
import Hero, {FullHero} from '../../../../components/Hero'
import Main from '../../../../components/Main'
import ProductGrid from '../../../../components/ProductGrid'
import {allProducts, getSomeProducts} from '../../../../utils/getProducts'

import { getPageBySlug } from '../../../../utils/getPages'


export default async function Page({params}) {
    const {stripes} = await getPageBySlug(params.slug, params.lang)


  return (
    <>
      <Head>
        <title>Welcome to the Hygraph Shop</title>
      </Head>

      { stripes && stripes.map(stripe => {
        if (stripe.__typename === 'CallToAction') {
          return <Hero
            key={stripe.id}
            title={stripe.heading}
            description={stripe?.body?.raw}
            button={{text: stripe?.button?.text, url: stripe?.button?.url}}
            />
        }
        if (stripe.__typename === 'ProductGrid') {
          return <ProductGrid key={stripe.id} title={stripe.headline} products={stripe.products} />
        }
      })}
    </>
  )
}

