import Prismic from '@prismicio/client';
const apiEndpoint = 'https://edt-projects.cdn.prismic.io/api/v2';

export async function fetchProducts(type) {
  try {
    const client = Prismic.client(apiEndpoint);
    const { results } = await client.query([
      Prismic.Predicates.at('document.type', 'productos'),
      Prismic.Predicates.at('my.productos.type', type),
    ]);
    return results.map(({ uid, data }) => ({
      brand: uid,
      name: data.name,
      url: data.logo?.url,
      type: data.type,
    }));
  } catch (err) {
    console.error('FetchProducts: ', err);
  }
}
