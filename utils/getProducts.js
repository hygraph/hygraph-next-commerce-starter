import products from '../tmp_data/products.js'
import hygraphClient, { gql } from './hygraph-client.js'

// TODO: get this from hygraph instead
// Average review.rating for a product
function averageRating({data: reviews}) {
  console.log({reviews})
  const total = reviews.reduce((acc, review) => acc + review.rating, 0)
  return Math.floor(total / reviews.length)
}

export async function getSomeProducts(count = 4) {

  const query = gql`
  query GetSomeProducts($count: Int!) {
    products(first: $count) {
    productName
    productSlug
    productImage {
      url
      height
      width
    }
    reviews {
      data {
        id
        name
        rating
        comment
      }
    }
  }
  }
`

try {
  const {products} = await hygraphClient.request(query, {count})
  
  return products
} catch (error) {
  console.log({error})
}

}

export async function allProducts() {
    const query = gql`query GetAllSlugs {
      products
      {
        productName
        id
        productSlug
        
      }
    }
      `

        try {
            const {bikes} = await hygraphClient.request(query)
            
            return bikes
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
