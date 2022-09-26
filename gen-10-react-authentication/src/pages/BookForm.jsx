import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../contexts/LoginProvider"

export default function BookForm () {
	const { udahLogin, setUdahLogin } = useContext(LoginContext)

	return <>
		{/* <Link to="/dashboard/book-list">ke book list</Link> */}
		<p>Ini Halaman BookForm</p>

		<p>{udahLogin}</p>

		<button onClick={() => setUdahLogin('blum login om')}>
			Ubah Status Login
		</button>
	</>
}