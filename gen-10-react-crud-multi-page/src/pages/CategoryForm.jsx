import { Link } from "react-router-dom"

export default function CategoryForm () {
	return <>
		<h1>Form Kategori</h1>

		<Link to="/categories">
			Kembali Ke Daftar Kategori
		</Link>

		<br /><br /><br />

		<form>
			<label>
				Nama Kategori <br />
				<input type="text" />
			</label>

			<br /><br />

			<button>
				Submit
			</button>
		</form>

	</>
}