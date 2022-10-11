import { useSelector, useDispatch } from "react-redux"
import { ubahKeduanya, ubahNama, ubahUmur } from "../store/orangSlice"

export default function CompB () {
	const dispatch = useDispatch()

	const { nama, umur } = useSelector(state => state.orang)

	function handleUbahNama () {
		dispatch(ubahNama('bambang'))
	}

	function handleUbahUmur () {
		dispatch(ubahUmur('tujuh belas'))
	}

	function handleUbahKeduanya () {
		dispatch(ubahKeduanya({
			namaBaru: 'rehan baiq',
			umurBaru: 17
		}))
	}

	return <>
		I'm CompB <br />
		nama: {nama} <br />
		umur: {umur} <br />

		<button onClick={handleUbahNama}>
			ubah nama
		</button>

		<button onClick={handleUbahUmur}>
			ubah umur
		</button>

		<button onClick={handleUbahKeduanya}>
			ubah keduanya
		</button>
	</>
}