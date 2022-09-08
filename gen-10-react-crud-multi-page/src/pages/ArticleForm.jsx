import { Link } from "react-router-dom"

export default function ArticleForm () {
	return <>
		<h1>Form Artikel</h1>

		<Link to="/articles">
			Kembali Ke Daftar Artikel
		</Link>

		<br /><br /><br />

		<form>
			<label>
				Judul Artikel <br />
				<input type="text" />
			</label>

			<br /><br />

			<label>
				Tanggal Publish <br />
				<input type="date" />
			</label>

			<br /><br />

			<button>
				Submit
			</button>
		</form>

	</>
}