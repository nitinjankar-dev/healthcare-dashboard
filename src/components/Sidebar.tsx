import React from 'react'
import { Link } from 'react-router-dom'

type SidebarProps = {
  role: 'admin' | 'user' | null
}

const adminMenu = [
  { label: 'Dashboard', path: '/admin' },
  { label: 'Patients', path: '/admin/patients' },
  { label: 'Appointments', path: '/admin/appointments' },
  { label: 'Complaints', path: '/admin/complaints' },
  { label: 'Insurance', path: '/admin/insurance' },
]

const userMenu = [
  { label: 'Profile', path: '/user/profile' },
  { label: 'Appointments', path: '/user/appointments' },
  { label: 'Complaints', path: '/user/complaints' },
  { label: 'Insurance', path: '/user/insurance' },
]

const Sidebar: React.FC<SidebarProps> = ({ role }) => {
  const menuItems = role === 'admin' ? adminMenu : role === 'user' ? userMenu : []

  return (
    <aside className="hidden w-64 border-r border-gray-200 bg-white p-6 shadow-sm md:block">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Clinic</p>
        <h2 className="mt-2 text-xl font-bold text-gray-800">Healthcare</h2>
        <p className="mt-2 text-xs uppercase tracking-[0.12em] text-gray-500">
          {role === 'admin' ? 'Admin View' : role === 'user' ? 'User View' : 'Guest'}
        </p>
      </div>

      {menuItems.length > 0 && (
        <nav aria-label="Sidebar Navigation">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center rounded-lg px-3 py-2 text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                >
                  <span className="mr-3 h-2.5 w-2.5 rounded-full bg-blue-500" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </aside>
  )
}

export default Sidebar
