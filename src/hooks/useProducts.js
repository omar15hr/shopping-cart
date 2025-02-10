import { useState, useEffect } from "react";
import { getProducts } from "../services/products";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const newProducts = await getProducts();
      setProducts(newProducts);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return { products, loading, error };
}
