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
  const [formInput, setFormInput] = useState({
    name: '',
    price: ''
  })

  function handleInput (event, propertyName) {
    const currentFormInput = {...formInput}
    currentFormInput[propertyName] = event.target.value
    setFormInput(currentFormInput)
  }

  useEffect(() => {
    setProducts(productsFromDatabase)
  }, [])

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

      <br /><hr /><br />
      {/* ========== form produk ============= */}

      <h2>Form Produk:</h2>

      <form>
        <label>
          Nama Produk: <br />
          <input
            type="text"
            value={formInput.name}
            onChange={(event) => handleInput(event, 'name')} />
        </label>
        {formInput.name}

        <br /><br />

        <label>
          Harga Produk: <br />
          <input
            type="number"
            value={formInput.price}
            onChange={(event) => handleInput(event, 'price')} />
        </label>
        {formInput.price}

        <br /><br />

        <button>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
