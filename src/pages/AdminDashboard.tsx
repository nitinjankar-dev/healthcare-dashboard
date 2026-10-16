import React from 'react'
import { Link } from 'react-router-dom'

const summaryCards = [
  { title: 'Patients', value: '120', path: '/admin/patients' },
  { title: 'Appointments', value: '35', path: '/admin/appointments' },
  { title: 'Complaints', value: '5', path: '/admin/complaints' },
  { title: 'Insurance', value: '98%', path: '/admin/insurance' },
]

const AdminDashboard: React.FC = () => (
  <section className="space-y-6">
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Overview</p>
      <h2 className="mt-2 text-3xl font-bold text-gray-800">Admin Dashboard</h2>
    </div>

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {summaryCards.map((card) => (
        <Link
          key={card.title}
          to={card.path}
          className="rounded-2xl bg-white p-6 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
        >
          <p className="text-sm font-medium text-gray-500">{card.title}</p>
          <p className="mt-3 text-3xl font-bold text-blue-600">{card.value}</p>
        </Link>
      ))}
    </div>

    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-800">Recent Activity</h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>• 8 new patient registrations this week</li>
          <li>• 3 appointments rescheduled</li>
          <li>• 2 complaints resolved today</li>
        </ul>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-800">Clinical Status</h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          <li>• 18 active admissions</li>
          <li>• 6 critical monitoring cases</li>
          <li>• 24 staff on duty</li>
        </ul>
      </div>
    </div>
  </section>
)

export default AdminDashboard
