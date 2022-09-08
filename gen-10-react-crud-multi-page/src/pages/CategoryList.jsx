import { Link } from "react-router-dom"

export default function CategoryList () {
	return <>
		<h1>Daftar Kategori</h1>

		<Link to="/categories/form">
			Buat Kategori
		</Link>

		<table width="100%" border="1">
			<thead>
				<tr>
					<th>Nama</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Kejadian Luar Biasa</td>
					<td>
						<button>Edit</button>
						&nbsp;
						<button>Hapus</button>
					</td>
				</tr>
				<tr>
					<td>Politik</td>
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