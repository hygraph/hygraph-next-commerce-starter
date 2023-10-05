import hygraphClient, { gql } from './hygraph-client.js'
import { ProductGridFragment } from './fragments/productGrid.js'

export async function allCategories() {
    const query = gql`query MyQuery {
      productCategories{
        slug
        categoryName
        description
        ${ProductGridFragment}
      }
    }
    
      `
      try {
        const {bikeCategories} = await hygraphClient.request(query)
        return bikeCategories
      } catch (error) {
        console.log(error)
      }
   
}

export async function getCategoryBySlug(slug) {
  const query = `
    query getCategoryBySlug($slug: String) {
      productCategory(where: {slug: $slug}) {
        slug
        categoryName
        description {
          raw
        }
        ${ProductGridFragment}
      }
    }
    
      `

      try {
        let {productCategory} = await hygraphClient.request(query, {slug})
        
        return productCategory
      } catch (error) {
        console.log(error)
      }
}