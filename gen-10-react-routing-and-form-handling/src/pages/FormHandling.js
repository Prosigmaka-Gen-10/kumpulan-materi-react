import { useState } from "react"

export default function FormHandling () {
	const [nama, setNama] = useState('')

	return <>
		<label>
			Nama Anda: <br />
			<input type="text" onChange={(event) => setNama(event.target.value)}/>
		</label>

		<br />
		<br />

		{nama}
	</>
}