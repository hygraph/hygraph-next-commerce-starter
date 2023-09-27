# Hygraph + BigCommerce storefront

This project is a federated content demo for Hygraph. It combines content from BigCommerce, Hygraph, and FaunaDB.

## Running the project

```sh
git clone git@github.com:brob/hygraph-storefront.git

npm install && npm run dev
```

The project needs a Hygraph content API endpoint with matching content and schema. Add the endpoint to `.env.local` as `HYGRAPH_ENDPOINT`