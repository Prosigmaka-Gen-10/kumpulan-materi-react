import { Outlet } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import LoginProvider from "./contexts/LoginProvider";

export default function App () {
  return <LoginProvider>
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  </LoginProvider>
}