import store from "./store"
import { useSelector } from 'react-redux'

export default function ComponentB () {
	const umurSaya = useSelector(state => state.orang.umur)

	return <>
		saya component B
		umur saya: {umurSaya}
	</>
}