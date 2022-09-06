import { useEffect, useState } from 'react';
import './App.css';

const productsFromDatabase = [
  {
    id: 1,
    name: 'Sikat Gigi',
    price: 8000
  },
  {
    id: 2,
    name: 'Sabun Cuci Piring',
    price: 5000
  },
  {
    id: 3,
    name: 'Shampo Pantene',
    price: 9000
  },
]

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productsFromDatabase)
  })

  return (
    <div className="App">
      <h2>Daftar Produk:</h2>

      <ul>
        {products.map(product =>
          <li key={product.id}>
            {product.name} | Rp. {product.price}
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
