import { Outlet } from "react-router-dom";

export default function Dashboard () {
	return <>
		<p>Ini Halaman Dashboard</p>
		<Outlet />
	</>
}