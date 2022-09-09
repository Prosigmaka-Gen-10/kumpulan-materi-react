import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function CategoryList () {
	const [categories, setCategories] = useState([])
	const [filteredCategories, setFilteredCategories] = useState([])
	const [searchKeyword, setSearchKeyword] = useState('')

	async function getCategories () {
		const res = await axios.get('http://localhost:3000/categories?_embed=articles')
		console.log(res.data)
		setCategories(res.data)
	}

	async function deleteCategory (categoryId) {
		await axios.delete('http://localhost:3000/categories/' + categoryId)
		getCategories()
	}

	useEffect(() => {
		getCategories()
	}, [])

	useEffect(() => {
		if (searchKeyword.length > 0) {
			const filterResult = categories.filter((category) => {
				return category
					.category_name
					.toLowerCase()
					.includes(searchKeyword.toLowerCase())
			})
			setFilteredCategories(filterResult)
		} else {
			setFilteredCategories(categories)
		}
	}, [searchKeyword, categories])

	return <>
		<h1>Daftar Kategori</h1>

		<Link to="/categories/form">
			Buat Kategori
		</Link>

		<br /><br />

		<input
			type="text"
			placeholder="cari kategori"
			value={searchKeyword}
			onChange={evt => setSearchKeyword(evt.target.value)} />

		<br /><br />

		<table width="100%" border="1">
			<thead>
				<tr>
					<th>Nama</th>
					<th>Jumlah Artikel</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{filteredCategories.map(category =>
					<tr>
						<td>{category.category_name}</td>
						<td>{category.articles.length} Artikel</td>
						<td>
							<Link to={'/categories/form/' + category.id}>
								<button>
									Edit
								</button>
							</Link>
							&nbsp;
							<button onClick={() => deleteCategory(category.id)}>
								Hapus
							</button>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	</>
}