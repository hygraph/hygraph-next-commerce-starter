import hygraphClient, { gql } from './hygraph-client.js'

export async function allCampaigns() {
    const query = gql`query MyQuery {
        campaigns {
          slug
        }
      }
      `

        try {
            const {campaigns} = await hygraphClient.request(query)
            return campaigns
        } catch (error) {
            console.log(error)
        }
    }

export async function getCampaignBySlug(slug, preview=false) {

  const query = gql`query MyQuery($slug: String, $stage: Stage!) {
      campaign(where: {slug: $slug}, stage: $stage) {
        title
        slug
        description {
          text
        }
        heroImage
        stripes {
          ... on CallToAction {
            __typename
            id
            body {
              text
            }
            heading
            button {
              text
              url
            }
            image {
              url
            }
          }
          ... on Callout {
            __typename
            id
            title
            button {
              text
              url
            }
          }
          ... on ProductGrid {
            __typename
            id
            description {
              text
            }
            headline
            products {
              bikeName
              slug
              id
              bcBikeData {
                data {
                  images {
                    is_thumbnail
                    url_zoom
                  }
                  price
                }
              }
            }
          }
        }
      }
    }
    
      `

        try {
            hygraphClient.setHeader('Authorization', `Bearer ${process.env.HYGRAPH_DEV_AUTH_TOKEN}`)

            const {campaign} = await hygraphClient.request(query, {slug, stage: preview ? 'DRAFT' : 'PUBLISHED'})
            return campaign
        } catch (error) {
            console.log(error)
        }
}

export async function getPreviewCampaignBySlug(slug) {

  const data = await getCampaignBySlug(slug, true)

  return data
}
