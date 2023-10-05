import client from './hygraph-client.js'

export async function getNavigationById(id) {
  const query = `query Navigation($id: String!) {
    navigation(where: {navId: $id}) {
      navId
      navLink {
        id
        page {
          ... on BlogPost {
            id
            slug
          }
          ... on LandingPage {
            id
            link
          }
          ... on Product {
            id
            productSlug
          }
        }
        url: externalUrl
        displayText

      }
    }
  }
  `
  try {
    const {navigation} = await client.request(query, {id})
    return navigation
  } catch (error) {
    console.log(error)
  }
}