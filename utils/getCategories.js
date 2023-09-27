import hygraphClient, { gql } from './hygraph-client.js'


export async function allCategories() {
    const query = gql`query MyQuery {
      bikeCategories{
        slug
        name
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
      bikeCategory(where: {slug: $slug}) {
        slug
        name
        bcId
        description {
          html
        }
        id
      }
    }
    
      `

      const productsQuery = `
      query GetBikesByCategoryId($bcId: Int!) {
        bikes(where: {categories_contains_some: [$bcId]}) {
          bikeName
          id
          slug
          bcBikeData {
            data {
              name
              price
              availability
              images {
                is_thumbnail
                url_zoom
              }
            }
          }
        }
      }
      `

      try {
        let {bikeCategory} = await hygraphClient.request(query, {slug})
        const products = await hygraphClient.request(productsQuery, {bcId: bikeCategory.bcId})
        const categoryWithProducts = {...bikeCategory, "products": products.bikes}
        
        return categoryWithProducts
      } catch (error) {
        console.log(error)
      }
}