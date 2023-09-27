export default async function handler(req, res) {
    // Exit the current user from "Preview Mode". This function accepts no args.
    res.clearPreviewData()
    // Get the current URL
    const url = new URL(req.headers.referer)

    // Redirect the user back to the index page.
    res.writeHead(307, { Location: url.pathname })
    res.end()
  }