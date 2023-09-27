import Head from 'next/head'
import Image from 'next/image'
import ProductGrid from '../../components/ProductGrid'
import Hero from '../../components/Hero'

import { allCategories, getCategoryBySlug } from '../../utils/getCategories'

export async function getStaticPaths() {
    const categories = await allCategories()

    const paths = categories.map((category) => ({
        params: { slug: category.slug },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const category = await getCategoryBySlug(params.slug)
    return {
        props: { category },
        revalidate: 60,
    }
}

export default function Page({ category }) {
    return (<>
        <Head>
          <title>{category.name}</title>
        </Head>
        <Hero
            title={category.name}
            description={category.description}
        />

        {category.products && <ProductGrid  products={category.products} />}
    </>)
}