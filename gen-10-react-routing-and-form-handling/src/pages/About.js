import React from 'react'
import { Link } from 'react-router-dom'

export default function About () {
	return <>
		<p>Ini About</p>

		<Link to="/">
			Kembali ke halaman home
		</Link>
	</>
}