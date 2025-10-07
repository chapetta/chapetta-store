
export async function getProducts () {
  const URL_base = 'https://fakestoreapi.com/products'

  const response = await fetch(URL_base)
  const data = await response.json()

  return data
}

export async function getCategories() {
  const URL_BASE = 'https://fakestoreapi.com/products/categories'

  const response = await fetch(URL_BASE)
  const data = await response.json()

  return data;

}

export async function getProductsFromQuery(query: string) {
  const URL = `http://localhost:3001/api/search?q=${query}`;

  try {

    const response = await fetch(URL);

    if (!response.ok) {
      console.error("Erro HTTP:", response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    return data || [];
    
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}

export async function getProductsFromCategoryAndQuery(categoryId: number, query: string) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`

  const response = await fetch(URL)
  const data = response.json()

  return data
}