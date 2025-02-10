export const getProducts = async () => {
  try {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products;
  } catch (error) {
    throw new Error('Failed to fetch products');
  }
}