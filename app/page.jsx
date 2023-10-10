import Head from 'next/head'
import Image from 'next/image'
import Hero, {FullHero} from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import {getSomeProducts} from '../utils/getProducts'

import { getPageBySlug } from '../utils/getPages'


export const metadata = {
  title: 'Welcome to the Hygraph Shop',
}

export default async function Page({params}) {
    const {link, stripes,landingPageTitle} = await getPageBySlug('/')
    const products = await getSomeProducts(4)

  return (
    <header>
      { stripes && stripes.map(stripe => {
        if (stripe.__typename === 'CallToAction') {
          return <Hero
            key={stripe.id}
            title={stripe.heading}
            description={stripe.body.raw}
            button={{text: stripe.button.text, url: stripe.button.url}}
          />
        }
        if (stripe.__typename === 'ProductGrid') {
          return <ProductGrid key={stripe.id} title={stripe.headline} products={stripe.products} />
        }
      })}
    </header>
  )
}

