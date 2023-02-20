import { getProductsInCollection, shopifyFetch } from "../lib/shopify";

export default function Home() {
  return <div className="text-3xl">Starter Template</div>;
}

// vercelのドキュメントコピペバージョンです。
// https://vercel.com/guides/building-ecommerce-sites-with-next-js-and-shopify

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
        products(sortKey: TITLE, first: 100) {
          edges{
            node {
              id
              title
              description
            }
          }
        }
      }`,
  });
}

// 以下は動画の講座通りにやった場合です。
// export async function getStaticProps() {
//   const products = await getProductsInCollection();

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
