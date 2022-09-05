import { Link } from "react-router-dom";

export default function ListProduk () {
	return <>
		<h2>Daftar Produk:</h2>

		<ul>
			<li>
				Jam Tangan |
				<Link to="/detail-produk/jam tangan">Lihat Detail</Link>
			</li>
			<li>
				Baju |
				<Link to="/detail-produk/baju">Lihat Detail</Link>
			</li>
			<li>
				Celana |
				<Link to="/detail-produk/celana">Lihat Detail</Link>
			</li>
		</ul>
	</>
}