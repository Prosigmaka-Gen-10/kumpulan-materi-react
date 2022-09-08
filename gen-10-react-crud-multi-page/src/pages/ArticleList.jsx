import { Link } from "react-router-dom"

export default function ArticleList () {
	return <>
		<h1>Daftar Artikel</h1>

		<Link to="/articles/form">
			Buat Artikel
		</Link>

		<table width="100%" border="1">
			<thead>
				<tr>
					<th>Judul</th>
					<th>Tanggal Publish</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Presiden Gigit Kuda</td>
					<td>2022-09-08 11:06</td>
					<td>
						<button>Edit</button>
						&nbsp;
						<button>Hapus</button>
					</td>
				</tr>
				<tr>
					<td>Presiden Gigit Formula Sikat</td>
					<td>2022-09-11 11:06</td>
					<td>
						<button>Edit</button>
						&nbsp;
						<button>Hapus</button>
					</td>
				</tr>
			</tbody>
		</table>
	</>
}