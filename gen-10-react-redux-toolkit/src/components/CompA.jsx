import { useSelector } from "react-redux"

export default function CompA () {
	// const nama = useSelector(state => state.orang.nama)
	// const umur = useSelector(state => state.orang.umur)
	const { nama, umur } = useSelector(state => state.orang)

	return <>
		I'm CompA <br />
		nama: {nama} <br />
		umur: {umur} <br />
	</>
}

const orang = {
	nama: 'abid',
	umur: 18
}

// const nama = orang.nama
// const umur = orang.umur

// const { nama, umur } = orang