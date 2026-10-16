import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStoredUsers, setCurrentUser, setStoredUsers } from '../utils/storage'

type SignupProps = {
  onLogin: (role: 'admin' | 'user') => void
}

const Signup: React.FC<SignupProps> = ({ onLogin }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    dob: '',
    gender: '',
    mobile: '',
    email: '',
    password: '',
  })
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const storedUsers = getStoredUsers()

    const userProfile = {
      id: Date.now(),
      name: form.name.trim(),
      dob: form.dob,
      gender: form.gender,
      mobile: form.mobile,
      email: form.email.trim(),
      password: form.password,
    }

    const updatedUsers = [userProfile, ...storedUsers.filter((user) => user.email !== userProfile.email)]
    setStoredUsers(updatedUsers)
    setCurrentUser(null)
    onLogin(null as never)
    setIsSuccess(true)
  }

  return (
    <section className="mx-auto max-w-xl rounded-2xl bg-white p-8 shadow-md">
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Create account</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-800">Sign Up</h2>
      </div>

      {isSuccess ? (
        <div className="mt-6 space-y-4 rounded-lg border border-green-200 bg-green-50 p-5 text-center">
          <p className="text-base font-semibold text-green-700">Account created successfully.</p>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Back to Login
          </button>
        </div>
      ) : (
        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-1 block font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="John Smith"
              required
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                value={form.dob}
                onChange={(e) => setForm({ ...form, dob: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="mb-1 block font-medium text-gray-700">Gender</label>
              <select
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-700"
                required
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1 block font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              placeholder="+1 234 567 890"
              required
            />
          </div>

          <div>
            <label className="mb-1 block font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="mb-1 block font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Create password"
              required
            />
          </div>
          <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Create Account
          </button>
        </form>
      )}
    </section>
  )
}

export default Signup
