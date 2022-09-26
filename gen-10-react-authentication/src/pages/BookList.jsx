import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../contexts/LoginProvider"

export default function BookList () {
	const [udahLogin, setUdahLogin] = useState('iya udah login')
	const loginCtx = useContext(LoginContext)

	return <>
		{/* <Link to="/dashboard/book-form">ke book form</Link> */}
		<p>Ini Halaman BookList</p>

		<p>{loginCtx.udahLogin}</p>

		<button onClick={() => loginCtx.setUdahLogin('blum login om')}>
			Ubah Status Login
		</button>
	</>
}