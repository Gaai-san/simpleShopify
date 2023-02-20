// vercelのドキュメントコピペバージョンです。
// https://vercel.com/guides/building-ecommerce-sites-with-next-js-and-shopify

export async function shopifyFetch({ query, variables }) {
  const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": key,
      },
      body: { query, variables } && JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      status: 500,
      error: "Error receiving data",
    };
  }
}

// 以下は動画の講座通りにやった場合です。
// const domain = process.env.SHOPIFY_STORE_DOMAIN;
// const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

// async function ShopifyData(query) {
//   const URL = `https://${domain}/api/2023-01/graphql.json`;

//   const options = {
//     endpoint: URL,
//     method: "POST",
//     headers: {
//       "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ query }),
//   };

//   try {
//     const data = await fetch(URL, options).then((response) => {
//       return response.json();
//     });
//     return data;
//   } catch (error) {
//     throw new Error("Procucts not fetched");
//   }
// }

// export async function getProductsInCollection() {
//   const query = `
//     {
//         collectionByHandle(handle:"frontpage"){
//           id
//           title
//           products(first:25){
//             edges {
//               node {
//                 id
//                 title
//                 handle
//                 images(first:5){
//                   edges {
//                     node {
//                       originalSrc
//                       altText
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }`;

//   const response = await ShopifyData(query);

//   const allProducts = response.data.collectionByHandle.products.edges
//     ? response.data.collectionByHandle.products.edges
//     : [];

//   return allProducts;
// }
