// Product detail pages generated from utils/getProducts.js
// Path: /pages/products/[slug].js
import Image from 'next/image'
import React from 'react';
import { getProductBySlug } from '../../../utils/getProducts'
import Review from '../../../components/Review'
import Stars from '../../../components/Stars'
import ImageGroup from '../../../components/ImageGroup'
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function FeaturedImage({aspectWidth, aspectHeight, src, alt}) {
    // const [open, setOpen] = React.useState(false)
    // const onClose = () => {
    //     setOpen(false)
    //   };
    return (<div className={`flex imageWrap block aspect-w-${aspectWidth} aspect-h-${aspectHeight} overflow-hidden rounded-lg`}>
            <img src={src} className="object-cover object-center" alt={alt} />
        </div>
    )
}

export default async function  Page({params, preview}) {
    const product = await getProductBySlug(params.slug, preview)
    const reviews = product?.reviews?.data;
    const reversedImages = product?.productImage.reverse()

    return (<>
       
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <ImageGroup images={product?.productImage} />
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.productName}</h1>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">${product?.productPrice}</p>
                {/* Reviews */}
                <div className="mt-6">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Reviews</h3>
                    <div className="flex items-center">
                        <Stars rating={product?.averageRating} />
                        <p className="sr-only">{product?.averageRating} out of 5 stars</p>
                        <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {reviews ? reviews.length : 0} reviews
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
                    <div className="mb-10" dangerouslySetInnerHTML={{__html: product?.productDescription.html}}></div>
                    
                    
                </div>
            </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {reviews.length > 0 && (<>
                <h3 id="reviews" className="text-2xl font-bold tracking-tight text-gray-900">Reviews</h3>
                <div className='grid grid-cols-1 divide-y'>
                    {reviews.map((review) => (
                        <Review key={review.id} review={review} />
                    ))}
                </div>
            </>)}
        </div>
    </>)
}