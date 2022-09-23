import { Outlet } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";

export default function App () {
  return <AuthProvider>
    <Outlet />
  </AuthProvider>
}