import { useParams } from "react-router-dom"

export default function DetailProduk () {
	const params = useParams()

	return <>
		<h2>Detail Produk</h2>

		<p>{params.namaproduk}</p>
	</>
}