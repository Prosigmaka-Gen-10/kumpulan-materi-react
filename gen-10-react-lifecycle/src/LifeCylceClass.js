import React from 'react';

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

export default class LifeCycleClass extends React.Component {
	constructor () {
		super()

		this.state = {
			totalPrice: 0,
			products: [],
			carts: []
		}
	}

	componentDidMount () {
		this.setState({ products: productsFromAPi })
	}

	componentDidUpdate (prevProps, prevState) {
		console.log(prevProps.iniContohProps) // hai bambang
		console.log(this.props.iniContohProps) // hai samsul

		if (prevState.carts.length !== this.state.carts.length ) {

			let totalHarga = 0;

			for (const cart of this.state.carts) {
				totalHarga = totalHarga + cart.price
			}

			this.setState({ totalPrice: totalHarga })

		}
	}

	tambahkanKeKeranjang (produkYangAkanDitambahkan) {
		const keranjangSekarang = [...this.state.carts] // titik tiga / destructor pada javascript
		keranjangSekarang.push(produkYangAkanDitambahkan)
		this.setState({ carts: keranjangSekarang })
	}

	render () {
		console.log('ini render!')

		return (
			<>
				{this.props.iniContohProps}

				<p>Total Harga: {this.state.totalPrice}</p>

				<p>Daftar Produk:</p>

				<ul>
					{this.state.products.map((product) =>
						<li>
							{product.name} |
							Rp. {product.price} |

							<button onClick={() => this.tambahkanKeKeranjang(product)}>
								+ Keranjang
							</button>
						</li>
					)}
				</ul>

				{/* ======= ini keranjang =========== */}

				<p>Daftar Keranjang:</p>

				<ul>
					{this.state.carts.map((carts) =>
						<li>
							{carts.name} |
							Rp. {carts.price}
						</li>
					)}
				</ul>
			</>
		);
	}
}



// ini dokumen asli superfunction

{/* <ul>
	{this.state.products.map(
		function (product) {
			return (
				<li>{product.name}</li>
			)
		}
	)}
</ul> */}