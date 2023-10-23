# Hygraph E-commerce starter 
This project is a federated content demo for Hygraph. It combines content from a Demo API and Hygraph

## Installation methods

Option 1: One-click Deployment 

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/hygraph/hygraph-next-commerce-starter)

Option 2: Manual clone

1. Clone this repo: ```git clone https://github.com/hygraph/hygraph-next-commerce-starter```
2. Navigate to the directory and run ```npm install```
3. Run ```npm run dev```
4. Manually connect Netlify(using the netlify.toml template) when ready to deploy

## Running the project

The project needs a Hygraph content API endpoint with matching content and schema. Add the endpoint to `.env.local` as `HYGRAPH_ENDPOINT`
1. Copy the `.env.sample` file, add your endpoint and save as `.env.local` in the main project directory
2. Run ```npm run dev```