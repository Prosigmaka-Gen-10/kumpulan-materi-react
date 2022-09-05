import React, { Component } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

export default class Home extends Component {
	render () {
		return <>
			<p>Ini Home</p>
			<Link to="/about">
				Pindah ke halaman about
			</Link>
		</>
	}
}