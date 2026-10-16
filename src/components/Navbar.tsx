import React from 'react'
import { Link } from 'react-router-dom'
import { getCurrentUser, type Role } from '../utils/storage'

type NavbarProps = {
  role: Role | null
  onLogout: () => void
}

const Navbar: React.FC<NavbarProps> = ({ role, onLogout }) => {
  const storedUser = getCurrentUser()

  const patientName = storedUser?.name || 'Sara Johnson'
  const initials = patientName
    .split(' ')
    .map((part) => part[0]?.toUpperCase())
    .join('')
    .slice(0, 2)

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
      <Link to={role === 'admin' ? '/admin' : role === 'user' ? '/user/profile' : '/main'} className="text-xl font-bold text-blue-700 hover:text-blue-800">
        Healthcare Dashboard
      </Link>
      <div className="flex items-center gap-4">
        {role === 'user' ? (
          <div className="flex items-center gap-3 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
              {initials}
            </span>
            <span className="text-sm font-semibold text-blue-700">{patientName}</span>
          </div>
        ) : role === 'admin' ? (
          <span className="text-sm font-medium text-gray-600">Admin</span>
        ) : (
          <span className="text-sm font-medium text-gray-600">Guest</span>
        )}

        {role ? (
          <Link
            to="/login"
            className="rounded-md bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
            onClick={onLogout}
          >
            Logout
          </Link>
        ) : (
          <>
            <Link
              to="/login"
              className="rounded-md bg-green-600 px-4 py-2 text-white transition hover:bg-green-700"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="rounded-md bg-gray-600 px-4 py-2 text-white transition hover:bg-gray-700"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
