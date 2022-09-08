import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function ArticleForm () {
	const navigate = useNavigate()

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

		const payload = JSON.stringify(formInput)

		await fetch('http://localhost:3000/articles', {
			method: 'POST',
			body: payload,
			headers: {
				'Content-Type': 'application/json'
			}
		})

		navigate('/articles')
	}

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