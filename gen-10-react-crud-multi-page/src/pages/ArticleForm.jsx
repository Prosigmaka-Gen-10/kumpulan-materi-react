import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function ArticleForm () {
	const navigate = useNavigate()
	const params = useParams()

	const isEditing = params.articleId

	const [categories, setCategories] = useState([])
	const [formInput, setFormInput] = useState({
		article_title: '',
		article_content: '',
		article_publish_date: '',
	})

	function handleInput (event, inputName) {
		const copyFormInput = {...formInput}
		copyFormInput[inputName] = event.target.value
		setFormInput(copyFormInput)
	}

	async function handleSubmit (event) {
		event.preventDefault()

		const payload = JSON.stringify({
			...formInput,
			categoryId: parseInt(formInput.categoryId)
		})

		const targetUrl = isEditing
			? 'http://localhost:3000/articles/' + params.articleId
			: 'http://localhost:3000/articles'

		const method = isEditing ? 'PUT' : 'POST'

		await fetch(targetUrl, {
			method: method,
			body: payload,
			headers: {
				'Content-Type': 'application/json'
			}
		})

		navigate('/articles')
	}

	async function getArticleDetail () {
		const res = await fetch('http://localhost:3000/articles/' + params.articleId)
		const data = await res.json()
		setFormInput(data)
	}

	async function getCategories () {
		const res = await axios.get('http://localhost:3000/categories')
		setCategories(res.data)
	}

	useEffect(() => {
		if (isEditing) {
			getArticleDetail()
		}

		getCategories()
	}, [])

	return <>
		<h1>Form Artikel</h1>

		<Link to="/articles">
			Kembali Ke Daftar Artikel
		</Link>

		<br /><br /><br />

		<form onSubmit={event => handleSubmit(event)}>
			<label>
				Judul Artikel <br />
				<input
					type="text"
					value={formInput.article_title}
					onChange={event => handleInput(event, 'article_title')} />
			</label>

			<br /><br />

			<label>
				Kategori <br />
				<select
					value={formInput.categoryId}
					onChange={event => handleInput(event, 'categoryId')}>
					{categories.map(category =>
						<option
							key={category.id}
							value={category.id}>
							{category.category_name}
						</option>
					)}
				</select>
			</label>

			<br /><br />

			<label>
				Tanggal Publish <br />
				<input
					type="date"
					value={formInput.article_publish_date}
					onChange={event => handleInput(event, 'article_publish_date')} />
			</label>

			<br /><br />

			<label>
				Konten <br />
				<textarea
					value={formInput.article_content}
					onChange={event => handleInput(event, 'article_content')}
				></textarea>
			</label>

			<br /><br />

			<button>
				Submit
			</button>
		</form>

	</>
}