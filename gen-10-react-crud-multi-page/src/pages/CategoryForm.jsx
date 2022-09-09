import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function CategoryForm () {
	const navigate = useNavigate()
	const params = useParams()

	const [formInput, setFormInput] = useState({
		category_name: ''
	})

	const isEditing = params.categoryId

	function handleInput (evt, propName) {
		const copyFormInput = {...formInput}
		copyFormInput[propName] = evt.target.value
		setFormInput(copyFormInput)
	}

	async function handleSubmit (evt) {
		evt.preventDefault()

		if (isEditing) {
			await axios.put('http://localhost:3000/categories/' + params.categoryId, formInput)
		}
		else {
			await axios.post('http://localhost:3000/categories', formInput)
		}

		navigate('/categories')
	}

	async function getCategoryDetail () {
		const res = await axios.get('http://localhost:3000/categories/' + params.categoryId)
		setFormInput(res.data)
	}

	useEffect(() => {
		getCategoryDetail()
	}, [])

	return <>
		<h1>Form Kategori</h1>

		<Link to="/categories">
			Kembali Ke Daftar Kategori
		</Link>

		<br /><br /><br />

		<form onSubmit={evt => handleSubmit(evt)}>
			<label>
				Nama Kategori <br />
				<input
					type="text"
					value={formInput.category_name}
					onChange={evt => handleInput(evt, 'category_name')} />
			</label>

			<br /><br />

			<button>
				Submit
			</button>
		</form>

	</>
}