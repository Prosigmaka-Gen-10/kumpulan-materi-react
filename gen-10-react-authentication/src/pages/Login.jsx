import axios from "axios"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthProvider";

export default function Login () {
	const navigate = useNavigate()
	const authCtx = useContext(AuthContext)

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	async function handleLogin (evt) {
		evt.preventDefault()

		const res = await axios.post('https://be-library-mini-system.herokuapp.com/auth/login', {
			username,
			password,
		})

		console.log(res.data.data)

		navigate('/dashboard/book-list')
	}

	return <>
		<h3>Login Form {authCtx.nama} </h3>
		<button onClick={() => authCtx.setNama('Abid')}>
			ubah nama
		</button>
		<form onSubmit={handleLogin}>
			<label>
				Username: <br />
				<input
					type="text"
					required
					value={username}
					onChange={evt => setUsername(evt.target.value)} />
			</label>

			<br /><br />

			<label>
				Password: <br />
				<input
					type="password"
					required
					value={password}
					onChange={evt => setPassword(evt.target.value)} />
			</label>

			<br /><br />

			<button>
				Login
			</button>
		</form>
	</>
}