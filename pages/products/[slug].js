// Product detail pages generated from utils/getProducts.js
// Path: /pages/products/[slug].js
import Image from 'next/image'
import React from 'react';
import { Lightbox } from "react-modal-image";
import { allProducts, getProductBySlug } from '../../utils/getProducts'
import { StarIcon } from '@heroicons/react/20/solid'
import Head from 'next/head'
import Review from '../../components/Review'
import Stars from '../../components/Stars'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function FeaturedImage({aspectWidth, aspectHeight, src}) {
    // const [open, setOpen] = React.useState(false)
    // const onClose = () => {
    //     setOpen(false)
    //   };
    return (<div className={`flex imageWrap block aspect-w-${aspectWidth} aspect-h-${aspectHeight} overflow-hidden rounded-lg`}>
            <img src={src} className="object-cover object-center" />
        </div>
    )
}

export async function getStaticPaths() {
    const products = await allProducts()

    const paths = products.map((product) => ({
        params: { slug: product?.slug },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params, preview = false }) {

    const product = await getProductBySlug(params.slug, preview)

    const reviews = { href: '#', average: 4, totalCount: 117 }
    return {
        props: { product, reviews, preview },
        revalidate: 60,
    }
}

export default function Page({ product, reviews, preview }) {
    const reversedImages = product?.images.reverse()

    return (<>
        <Head>
            <title>{product?.name}</title>
        </Head>
        {(product?.images.length > 1) && (<div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-4 lg:gap-x-8 lg:px-8">
        <div className="col-span-2 flex"><FeaturedImage aspectWidth={5} aspectHeight={4} src={reversedImages[0].url_zoom} /></div>

            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <FeaturedImage aspectWidth={3} aspectHeight={2} src={reversedImages[1].url_zoom} />
                <FeaturedImage aspectWidth={3} aspectHeight={2} src={reversedImages[2].url_zoom} />
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <FeaturedImage aspectWidth={3} aspectHeight={2} src={reversedImages[3].url_zoom} />
                <FeaturedImage aspectWidth={3} aspectHeight={2} src={reversedImages[4].url_zoom} />
            </div>
        </div>)}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                {(product?.images.length === 1) && (
                    <FeaturedImage aspectWidth={3} aspectHeight={2} src={reversedImages[0].url_zoom} />
                )}
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">${product?.price}</p>
                {/* Reviews */}
                <div className="mt-6">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Reviews</h3>
                    <div className="flex items-center">
                        <Stars rating={product?.averageRating} />
                        <p className="sr-only">{reviews.average} out of 5 stars</p>
                        <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {product?.faunaReviews?.length} reviews
                        </a>
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Add to bag
                </button>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                {/* Description and details */}
                <div>
                    <h3 className="sr-only">Description</h3>
                    <div className="mb-10" dangerouslySetInnerHTML={{__html: product?.description}}></div>
                    { product?.bcBikeData.data.custom_fields && (
                        <>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Details</h3>

                        <table className='min-w-full'>
                            <tbody>
                                {product?.bcBikeData.data.custom_fields.map((field) => (
                                <tr key={field.name} >
                                    <td className='py-2 font-bold text-gray-900'>{field.name}</td>
                                    <td className='py-2 text-gray-900'> {field.value}</td>

                                </tr>
                                ))}
                            </tbody>
                        </table>
                        </>
                    )}
                    
                </div>
            </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product?.faunaReviews?.length > 0 && (<>
                <h3 id="reviews" className="text-2xl font-bold tracking-tight text-gray-900">Reviews</h3>
                <div className='grid grid-cols-1 divide-y'>
                    {product?.faunaReviews?.map((review) => (
                        <Review key={review._id} review={review} />
                    ))}
                </div>
            </>)}
        </div>
    </>)
}