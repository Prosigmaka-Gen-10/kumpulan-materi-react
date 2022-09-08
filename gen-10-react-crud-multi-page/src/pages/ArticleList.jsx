import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function ArticleList () {
	const [articles, setArticles] = useState([])

	function getArticles () {
		fetch('http://localhost:3000/articles')
			.then(res => res.json())
			.then(data => {
				setArticles(data)
			})
	}

	useEffect(getArticles, [])

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
				{articles.map(article =>
					<tr>
						<td>{article.article_title}</td>
						<td>{article.article_publish_date}</td>
						<td>
							<button>Edit</button>
							&nbsp;
							<button>Hapus</button>
						</td>
					</tr>
				)}
			</tbody>
		</table>
	</>
}