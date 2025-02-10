import { useProducts } from './hooks/useProducts'
import { Products } from './components/Products'

function App() {

  const { products } = useProducts();

  return (
    <div>
      <Products products={products} />
    </div>
  )
}

export default App
