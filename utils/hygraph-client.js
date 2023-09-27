import { gql, GraphQLClient } from 'graphql-request'

export default new GraphQLClient(process.env.HYGRAPH_ENDPOINT)

export { gql }