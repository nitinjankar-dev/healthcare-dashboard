import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStoredUsers, setCurrentUser } from '../utils/storage'

type LoginProps = {
  onLogin: (role: 'admin' | 'user') => void
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const adminEmail = 'admin@clinic.com'
    const adminPassword = 'admin123'

    if (form.email === adminEmail && form.password === adminPassword) {
      onLogin('admin')
      setCurrentUser({
        id: 'admin',
        name: 'Clinic Admin',
        dob: '1988-01-01',
        gender: 'Other',
        mobile: '+1 555 000 0000',
        email: adminEmail,
      })
      navigate('/')
      return
    }

    const storedUsers = getStoredUsers()
    const matchingUser = storedUsers.find(
      (user) => user.email.toLowerCase() === form.email.toLowerCase() && user.password === form.password
    )

    if (matchingUser) {
      setCurrentUser(matchingUser)
      onLogin('user')
      navigate('/user/profile')
      return
    }

    alert('Invalid credentials. Please check your email and password or use the admin demo account.')
  }

  return (
    <section className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-md">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Access</p>
      <h2 className="mt-2 text-3xl font-bold text-gray-800">Login</h2>

      <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm text-blue-700">
        Demo: admin@clinic.com / admin123 | user@clinic.com / user123
      </div>

      <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1 block font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="mb-1 block font-medium text-gray-700">Password</label>
          <input
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            placeholder="Enter password"
          />
        </div>
        <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          Login
        </button>
      </form>

      <div className="mt-5 text-center text-sm text-gray-600">
        Need an account?{' '}
        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="ml-1 rounded-md bg-blue-600 px-3 py-2 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign up
        </button>
      </div>
    </section>
  )
}

export default Login
