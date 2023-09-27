import Layout from '../../components/layouts/Base'
import Head from "next/head"
import Hero, { FullHero } from "../../components/Hero"
import Main from "../../components/Main"
import ProductGrid from "../../components/ProductGrid"
import { allCampaigns, getCampaignBySlug } from "../../utils/getCampaigns"


const CallToAction = ({cta}) => {
  const { body, heading, button, image } = cta
  return ( 
      <Hero description={body?.text} title={heading} button={button} image={image?.url} />
  )
}
const Callout = ({stripe}) => {
  return (
    <Main>
    <div className="relative mt-20 z-0 flex flex-col items-center overflow-hidden rounded-2xl bg-indigo-500 px-6 py-12 md:py-20 md:px-10">
      <svg width="2024" height="670" viewBox="0 0 2024 670" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1/2 z-[-1]"><g opacity=".1"><path d="M0 309h223v349M406 633V125M406 217.399h192V609M883 527h493v118M1376 619.795V426h185v202M1561 435.5V138M1562 247h193v256h237M1061 138v389h207V138M1061 218H598V102M598 609V436h285v198M221 409h185" stroke="#fff" strokeWidth="2"></path><path fill="#fff" d="M394 397h24v24h-24zM394 206h24v24h-24zM586 206h24v24h-24zM1049 206h24v24h-24zM1549 235h24v24h-24zM1549 414h24v24h-24zM1364 414h24v24h-24zM1364 515h24v24h-24zM1256 515h24v24h-24zM1049 515h24v24h-24zM871 515h24v24h-24zM871 424h24v24h-24zM586 424h24v24h-24z"></path></g></svg>
      <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-tight font-bold leading-snug max-w-3xl text-center text-white">
        {stripe?.title}
      </h2>
      { stripe?.button && (<div className="inline-flex flex-col space-x-0 space-y-3 sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0 mt-10">
        <a className="text-cornflower border font-medium inline-block rounded-lg text-center transition-all px-4 py-2 text-sm md:text-base bg-white border-transparent text-brand-500 hover:bg-white hover:text-indigo-600  inline-flex items-center" 
          href="{stripe.button.url}" 
          rel="noopener noreferrer" 
          target="_blank">{stripe?.button?.text}</a>
      </div>)}
    </div>
    </Main>
  )
}



export const getStaticProps = async ({params, preview = false}) => {

  const campaign = await getCampaignBySlug(params.slug, preview)
  return {
    props: {
      preview,
      'page': campaign
    },
    revalidate: 60,
  }
}

export const getStaticPaths = async () => {
  const campaigns = await allCampaigns()
  return {
    paths: campaigns.map(campaign => ({
      params: {
        slug: campaign.slug
      }
    })),
    fallback: false

  }}

  export default function Page({ page, preview }) {

    return (
      <>
        <Head>
          <title>{page.title}</title>
        </Head>

        <FullHero
          title={page.title}
          description={page.description?.text}
          //button={{text: 'Shop Now', url: '/category/hoodies'}}
          image={page.heroImage ? page.heroImage.secure_url : null}
        />


        {page.stripes.map(stripe => {
          if (stripe.__typename === 'CallToAction') {
            return <CallToAction key={stripe.id} cta={stripe} />
          }
          if (stripe.__typename === 'ProductGrid' && stripe.products.length > 0) {
            return <ProductGrid key={stripe.id} title={stripe.headline} products={stripe.products} />
          }
          if (stripe.__typename === 'Callout') {
            return <Callout key={stripe.id} stripe={stripe} />
          }
        })}
      </>
    )
  }