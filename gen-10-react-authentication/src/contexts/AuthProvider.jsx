import { useState } from "react"
import { createContext } from "react"

export const AuthContext = createContext()

export default function AuthProvider (props) {
	const [userData, setUserData] = useState({})
	const [nama, setNama] = useState('bambang')
	const isLogin = Object.values(userData).length > 0

	const value = {
		userData,
		setUserData,
		isLogin,
		nama,
		setNama
	}

	return <AuthContext.Provider value={value}>
		{props.children}
	</AuthContext.Provider>
}