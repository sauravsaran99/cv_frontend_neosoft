import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Auth/Dashboard'
import LayoutsPage from './pages/Layouts'
import EditorPage from './pages/Editor'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Dashboard />} />
      <Route path='/layout' element={<LayoutsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/editor" element={<EditorPage />} />
      <Route path="/editor/:id" element={<EditorPage />} />
    </Routes>
  )
}

export default App
