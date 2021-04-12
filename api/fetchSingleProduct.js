import Prismic from '@prismicio/client';
const apiEndpoint = 'https://edt-projects.cdn.prismic.io/api/v2';

function transformProducts(presentations = []) {
  return presentations.map(({ presentation, url }) => ({
    presentation,
    url: url.url,
  }));
}

function transformDescription(description = []) {
  return description.reduce((acumulator, { text }) => acumulator + text, '');
}

export async function fetchSingleProduct(brand) {
  try {
    const client = Prismic.client(apiEndpoint);
    const { results } = await client.query([
      Prismic.Predicates.at('my.productos.uid', brand),
    ]);
    const [product] = results;
    const { data } = product;
    return {
      name: data.name,
      logo: data.logo.url,
      description: transformDescription(data.description),
      products: transformProducts(data.presentations),
    };
  } catch (err) {
    console.error('FetchSingleProduct: ', err);
  }
}
