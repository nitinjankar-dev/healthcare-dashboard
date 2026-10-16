import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { clearSession, getStoredRole, setStoredRole, type Role } from './utils/storage'
import Sidebar from './components/Sidebar'
import Patients from './pages/Patients'
import Appointments from './pages/Appointments'
import Complaints from './pages/Complaints'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminDashboard from './pages/AdminDashboard'
import AdminPatients from './pages/AdminPatients'
import PatientDetail from './pages/PatientDetail'
import UserProfile from './pages/UserProfile'
import Insurance from './pages/Insurance'

const MainLanding: React.FC = () => (
  <div className="space-y-8">
    <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white shadow-xl">
      <div className="grid items-center gap-8 px-6 py-10 md:grid-cols-2 md:px-12 md:py-14">
        <div className="space-y-6">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-blue-50">
            Trusted care management
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Better care starts with better coordination.
            </h1>
            <p className="max-w-xl text-base text-blue-50 md:text-lg">
              Manage patient journeys, appointments, complaints, and insurance coverage in one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/login"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Login
            </a>
            <a
              href="/signup"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-lg backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-blue-100">Patients</p>
              <p className="mt-2 text-3xl font-bold">2.4k</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-blue-100">Appointments</p>
              <p className="mt-2 text-3xl font-bold">540</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 sm:col-span-2">
              <p className="text-sm text-blue-100">Care satisfaction</p>
              <p className="mt-2 text-3xl font-bold">96%</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="grid gap-6 md:grid-cols-3">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">Patient care</h2>
        <p className="mt-3 text-sm text-gray-600">
          Track profiles, appointments, and treatment updates from a single, organized view.
        </p>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">Fast access</h2>
        <p className="mt-3 text-sm text-gray-600">
          Patients can quickly review their history, complaints, and insurance information.
        </p>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">Admin overview</h2>
        <p className="mt-3 text-sm text-gray-600">
          Keep an eye on operations, patient details, and care progress with real-time visibility.
        </p>
      </div>
    </section>
  </div>
)

const App: React.FC = () => {
  const [role, setRole] = useState<Role | null>(() => getStoredRole())

  useEffect(() => {
    setStoredRole(role)
  }, [role])

  const handleLogout = () => {
    setRole(null)
    clearSession()
  }

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar role={role} />
        <div className="flex flex-1 flex-col">
          <Navbar role={role} onLogout={handleLogout} />
          <main className="overflow-y-auto p-6">
            <div className="mx-auto max-w-7xl">
              <Routes>
                <Route
                  path="/"
                  element={
                    role === 'admin' ? (
                      <Navigate to="/admin" replace />
                    ) : role === 'user' ? (
                      <Navigate to="/user/profile" replace />
                    ) : (
                      <Navigate to="/main" replace />
                    )
                  }
                />

                <Route path="/main" element={<MainLanding />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/patients" element={<AdminPatients />} />
                <Route path="/admin/patients/:id" element={<PatientDetail />} />
                <Route path="/admin/appointments" element={<Appointments role="admin" />} />
                <Route path="/admin/complaints" element={<Complaints role="admin" />} />
                <Route path="/admin/insurance" element={<Insurance role="admin" />} />

                <Route path="/user/profile" element={<UserProfile />} />
                <Route path="/user/appointments" element={<Appointments role="user" />} />
                <Route path="/user/complaints" element={<Complaints role="user" />} />
                <Route path="/user/insurance" element={<Insurance role="user" />} />

                <Route path="/patients" element={<Patients role={role} />} />
                <Route path="/appointments" element={<Appointments role={role} />} />
                <Route path="/complaints" element={<Complaints role={role} />} />
                <Route path="/login" element={<Login onLogin={setRole} />} />
                <Route path="/signup" element={<Signup onLogin={setRole} />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
