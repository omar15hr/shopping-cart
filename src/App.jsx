import { useProducts } from "./hooks/useProducts";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import { Footer } from "./components/Footer";

function App() {
  const { products } = useProducts();
  const { setFilters, filterProducts } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header setFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer />
    </>
  );
}

export default App;
