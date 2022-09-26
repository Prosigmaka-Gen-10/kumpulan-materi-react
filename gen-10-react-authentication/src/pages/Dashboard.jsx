import { Outlet } from "react-router-dom";
import BookForm from "./BookForm";
import BookList from "./BookList";

export default function Dashboard () {
	return <>
		<p>Ini Halaman Dashboard</p>

		<button>Logout</button>

		{/* <Outlet /> */}

		<br /><hr /><br />

		<BookList />

		<br /><hr /><br />

		<BookForm />
	</>
}