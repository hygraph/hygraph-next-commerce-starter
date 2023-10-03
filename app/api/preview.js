import { getPreviewCampaignBySlug } from '../../utils/getCampaigns'
import { getPreviewProductBySlug } from '../../utils/getProducts'
export default async function handler(req, res) {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  let data = {}
  if (
    req.query.secret !== process.env.HYGRAPH_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  // Fetch the headless CMS to check if the provided `slug` exists
  if (req.query.model === 'campaign') {
    data = await getPreviewCampaignBySlug(req.query.slug, true)
  }
  if (req.query.model === 'products') {
    data = await getPreviewProductBySlug(req.query.slug)
  }
  // If the slug doesn't exist prevent preview mode from being enabled
  if (!data) {
    return res.status(401).json({ message: 'Invalid slug' })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({})

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  res.writeHead(307, { Location: `/${req.query.model}/${data.slug}` })
  res.end()
}