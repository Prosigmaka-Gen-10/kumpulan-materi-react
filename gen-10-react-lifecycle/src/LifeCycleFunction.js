import { useEffect, useState } from 'react'

const productsFromAPi = [
	{
		name: 'Sikat Gigi',
		price: 5000
	},
	{
		name: 'Pasta Gigi',
		price: 10000
	},
	{
		name: 'Sabun Mandi',
		price: 3500
	},
]

export default function LifeCycleFunction () {
	const [products, setProducts] = useState([])
	const [carts, setCarts] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)

	function tambahkanKeKeranjang (produkYangAkanDitambahkan) {
		const keranjangSekarang = [...carts]
		keranjangSekarang.push(produkYangAkanDitambahkan)
		setCarts(keranjangSekarang)
	}

	function hapusKeranjang (indexYgAkanDihapus) {
		const keranjangSekarang = [...carts]
		keranjangSekarang.splice(indexYgAkanDihapus, 1)
		setCarts(keranjangSekarang)
	}

	useEffect(() => {
		setProducts(productsFromAPi)
	}, [])

	useEffect(() => {
		let countTotalPrice = 0

		for (const cart of carts) {
			countTotalPrice = countTotalPrice + cart.price
		}

		setTotalPrice(countTotalPrice)
	}, [carts])

	return <>
		<p>total harga: {totalPrice}</p>

		<h4>Daftar Produk:</h4>
		<ul>
			{products.map((product, productIndex) =>
				<li key={productIndex}>
					{product.name} | Rp. {product.price}

					<button onClick={() => tambahkanKeKeranjang(product)}>
						+ keranjang
					</button>
				</li>
			)}
		</ul>

		<h4>Daftar Keranjang:</h4>
		<ul>
			{carts.map((cart, keyCart) =>
				<li key={keyCart}>
					{keyCart} . {cart.name} | Rp. {cart.price}

					<button onClick={() => hapusKeranjang(keyCart)}>
						- hapus
					</button>
				</li>
			)}
		</ul>
	</>
}