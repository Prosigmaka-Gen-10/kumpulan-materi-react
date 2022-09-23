import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App'
import BookForm from './pages/BookForm'
import BookList from './pages/BookList'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" element={<Login />} />

          <Route path="dashboard" element={<Dashboard />}>

            <Route path="book-list" element={<BookList />} />
            <Route path="book-form" element={<BookForm />} />

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
