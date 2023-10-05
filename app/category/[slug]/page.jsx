import Head from 'next/head'
import Image from 'next/image'
import ProductGrid from '../../../components/ProductGrid'
import Hero from '../../../components/Hero'

import { getCategoryBySlug } from '../../../utils/getCategories'


export default async function Page({params}) {
    const category = await getCategoryBySlug(params.slug)
    return (<>
        <Head>
          <title>{category.categoryName}</title>
        </Head>
        <Hero
            title={category.categoryName}
            description={category?.description?.raw}
        />

        {category.products && <ProductGrid  products={category.products} />}
    </>)
}