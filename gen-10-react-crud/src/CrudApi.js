import axios from "axios"
import { useEffect, useState } from "react"

export default function CrudApi () {
	const originalForm = {
		name: '',
		price: ''
	}

	const [products, setProducts] = useState([])
	const [formInput, setFormInput] = useState({...originalForm})

	function getProductList () {
		axios
			.get('http://localhost:3004/products')
			.then((res) => {
				// console.log(res.data)
				setProducts(res.data)
			})

		// console.log('saya harusnya diakhir jalannya')
	}

	function handleSubmit (event) {
		event.preventDefault()

		if (formInput.id) { // kalau ada id nya pasti mengupdate
			updateProduct()
		}
		else {
			createProduct()
		}

		setFormInput({...originalForm})
	}

	function createProduct () {
		axios
			.post('http://localhost:3004/products', formInput)
			.then(() => {
				getProductList()
			})
	}

	function updateProduct () {
		axios
			.put('http://localhost:3004/products/' + formInput.id, formInput)
			.then(() => {
				getProductList()
			})
	}

	function deleteProduct (productId) {
		axios
			.delete('http://localhost:3004/products/' + productId)
			.then(() => {
				getProductList()
			})
	}

	function handleInput (event, propName) {
		const currentFormInput = {...formInput}
		currentFormInput[propName] = event.target.value
		setFormInput(currentFormInput)
	}

	function prepareUpdate (product) {
		setFormInput({...product})
	}

	useEffect(() => {
		getProductList()
	}, [])

	return <>
		<form onSubmit={event => handleSubmit(event)}>
			<h2>Form Produk:</h2>

			<label>
				Nama Produk:
				<input
					type="text"
					value={formInput.name}
					onChange={event => handleInput(event, 'name')} />
			</label>

			<br /><br />

			<label>
				Harga Produk:
				<input
					type="number"
					value={formInput.price}
					onChange={event => handleInput(event, 'price')} />
			</label>

			<br /><br />

			<button>
				Submit
			</button>
		</form>

		<br /><hr /><br />

		<h2>Daftar Produk:</h2>
		<ul>
			{products.map(product =>
				<li key={product.id}>
					{product.name} | Rp. {product.price}

					&nbsp;&nbsp;
					<button onClick={() => prepareUpdate(product)}>
						Update
					</button>

					&nbsp;&nbsp;
					<button onClick={() => deleteProduct(product.id)}>
						Delete
					</button>
				</li>
			)}
		</ul>
	</>
}