import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDebounce } from 'use-debounce'

export default function ArticleList () {
	const [articles, setArticles] = useState([])
	const [searchKeyword, setSearchKeyword] = useState('')
	const [searchKeywordDebounced] = useDebounce(searchKeyword, 500)

	async function getArticles () {
		const keyword = searchKeyword.length > 0
			? '&q=' + searchKeyword
			: ''
		const res = await fetch('http://localhost:3000/articles?_expand=category' + keyword)
		const data = await res.json()
		setArticles(data)
	}

	async function deleteArticle (articleId) {
		await fetch('http://localhost:3000/articles/' + articleId, {
			method: 'DELETE'
		})

		getArticles()
	}

	useEffect(() => {
		getArticles()
	}, [searchKeywordDebounced])

	return <>
		<h1>Daftar Artikel</h1>

		<Link to="/articles/form">
			Buat Artikel
		</Link>

		<br /><br />

		<input
			type="text"
			placeholder="cari artikel"
			value={searchKeyword}
			onChange={evt => setSearchKeyword(evt.target.value)} />

		<br /><br />

		<table width="100%" border="1">
			<thead>
				<tr>
					<th>Judul</th>
					<th>Kategori</th>
					<th>Tanggal Publish</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{articles.map(article =>
					<tr>
						<td>{article.article_title}</td>
						<td>{article.category.category_name}</td>
						<td>{article.article_publish_date}</td>
						<td>
							<Link to={"/articles/form/" + article.id}>
								<button>Edit</button>
							</Link>
							&nbsp;
							<button onClick={() => deleteArticle(article.id)}>Hapus</button>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	</>
}