// Product detail pages generated from utils/getProducts.js
// Path: /pages/products/[slug].js
import React from 'react';
import { getProductBySlug } from '../../../utils/getProducts'
import Review from '../../../components/Review'
import Stars from '../../../components/Stars'
import ImageGroup from '../../../components/ImageGroup'
import Main from '../../../components/Main'
import { draftMode } from 'next/headers';
import Alert from '../../../components/PreviewAlert';
 



export default async function  Page({params}) {
    const preview = draftMode().isEnabled;
    const product = await getProductBySlug(params.slug, preview)
    const reviews = product?.reviews?.data;

    return (<>
       <Main>
       <div className='grid md:grid-cols-[minmax(200px,1fr)_1fr] my-10 gap-3 divide-x'>
        {product?.productImage && <ImageGroup images={product?.productImage} />}
        <div className='pl-2'>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product?.productName}</h1>

            {/* Options */}
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">${product?.productPrice}</p>
                {/* Reviews */}
                    <h3 className="mt-3 text-2xl font-bold tracking-tight text-gray-900">Reviews</h3>
                    <div className="flex items-center">
                        <Stars rating={product?.averageRating} />
                        <p className="sr-only">{product?.averageRating} out of 5 stars</p>
                        <a href="#reviews" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                            {reviews ? reviews.length : 0} reviews
                        </a>
                    </div>
                <button
                    type="submit"
                    className="flex items-center justify-center w-full px-8 py-3 my-10 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Add to bag
                </button>
                {/* Description and details */}
                    <h3 className="sr-only">Description</h3>
                    <div className="mb-10" dangerouslySetInnerHTML={{__html: product?.productDescription.html}}></div>
                    
                    </div>
            </div>
        <div className="">
            {reviews?.length > 0 && (<>
                <h3 id="reviews" className="text-2xl font-bold tracking-tight text-gray-900">Reviews</h3>
                <div className='grid grid-cols-1 divide-y'>
                    {reviews.map((review) => (
                        <Review key={review.id} review={review} />
                    ))}
                </div>
            </>)}
        </div>
    </Main></>)
}