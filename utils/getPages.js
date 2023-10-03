import hygraphClient, { gql } from './hygraph-client.js'
import { ProductGridFragment } from './fragments/productGrid.js'

export async function getPageBySlug(slug, preview=false) {
  const query = gql`
  query GetSinglePage($slug: String!, $stage: Stage!) {
    landingPage(where: {link: $slug}, stage: $stage) {
      landingPageTitle
    link
    stripes {
      __typename
      ... on CallToAction {
        id
        body {
          html
          raw
        }
        button {
          text
          url
        }
        heading
        image {
          url
          width
          height
        }
      }
      ... on ProductGrid {
        id
        description {
          html
        }
        headline
        ${ProductGridFragment}
      }
    }
  }
}
    `

    try {
        const {landingPage} = await hygraphClient.request(query, {slug, stage: preview ? 'DRAFT' : 'PUBLISHED'})
        console.log({landingPage})
        return landingPage
    } catch (error) {
        console.log(error)
    }


}


export async function getProductBySlug(slug, preview=false) {
  console.log('help!')
    const query = gql`
    query GetSingleProduct($slug: String!, $stage: Stage!) {
  product(where: {productSlug: $slug}, stage: $stage) {
    productName
    productSlug
    productDescription {
      html
    }
    reviews {
      data {
        id
        name
        rating
        comment
      }
    }
    productCategories {
      id
      slug
      categoryName
    }
    productImage {
      altText
      url
    }
  }
}

      `
        try {

            let {product} = await hygraphClient.request(query, {slug, stage: preview ? 'DRAFT' : 'PUBLISHED'})
            console.log({product})
            product.averageRating = averageRating(product.reviews)

            return product
        } catch (error) {
            console.log(error)
        }
}
  

export async function getPreviewProductBySlug(slug) {
  const data = getProductBySlug(slug, true)

  return data
}
