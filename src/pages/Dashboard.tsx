import React from 'react'
import DashboardCards from '../components/DashboardCards'

type DashboardProps = {
  role: 'admin' | 'user' | null
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  if (role === 'admin') {
    return (
      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Overview</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">Admin Dashboard</h2>
        </div>
        <DashboardCards />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Patient Summary</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Total Patients: 120</li>
              <li>• Active Admissions: 18</li>
              <li>• Critical Cases: 6</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-md">
            <h3 className="text-xl font-bold text-gray-800">Operational Status</h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>• Appointments Today: 35</li>
              <li>• Open Complaints: 5</li>
              <li>• Staff On Duty: 24</li>
            </ul>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">My Overview</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-800">Welcome Back</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800">My Appointments</h3>
          <p className="mt-3 text-3xl font-bold text-blue-600">2</p>
          <p className="mt-2 text-gray-600">Next visit: Oct 17</p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Complaint Status</h3>
          <p className="mt-3 text-3xl font-bold text-amber-600">1</p>
          <p className="mt-2 text-gray-600">Pending review</p>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
