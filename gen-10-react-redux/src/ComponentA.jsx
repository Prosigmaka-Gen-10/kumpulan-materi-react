import store from "./store"
import { useSelector } from "react-redux"

export default function ComponentA () {
	const namaSaya = useSelector(state => state.orang.nama)

	function handleUbahUmur () {
		store.dispatch({
			type: 'ubahUmur',
			value: 22
		})
	}

	return <>
		saya component A <br />
		nama saya: {namaSaya}
		<br />
		<br />
		<button onClick={handleUbahUmur}>ubah umur saya</button>
	</>
}