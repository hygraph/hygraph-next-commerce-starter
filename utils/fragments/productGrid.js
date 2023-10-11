
export const ProductGridFragment = `products {
          id
          productName
          productSlug
          productPrice
          productImage {
            url
            width
            height
          }
          localizations(locales: en) {
            productImage{
              url
            }
          }
        }`
        