import React from 'react'
import { Link } from 'react-router-dom'

const quickActions = [
  { label: 'Book Appointment', to: '/user/appointments', color: 'bg-blue-600 hover:bg-blue-700' },
  { label: 'Submit Complaint', to: '/user/complaints', color: 'bg-amber-600 hover:bg-amber-700' },
  { label: 'Insurance Details', to: '/user/insurance', color: 'bg-emerald-600 hover:bg-emerald-700' },
]

const UserProfile: React.FC = () => {
  const currentUser = JSON.parse(localStorage.getItem('healthcare-current-user') || 'null') as
    | null
    | {
        name?: string
        dob?: string
        gender?: string
        mobile?: string
        email?: string
      }

  const userName = currentUser?.name || 'Sara Johnson'
  const userDob = currentUser?.dob || '1997-05-12'
  const userGender = currentUser?.gender || 'Female'
  const userMobile = currentUser?.mobile || '+1 555 102 7921'
  const userEmail = currentUser?.email || 'sara.johnson@example.com'

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Home</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-800">Welcome back, {userName}</h2>
      </div>

      <div className="flex flex-wrap gap-3">
        {quickActions.map((action) => (
          <Link
            key={action.label}
            to={action.to}
            className={`rounded-md px-4 py-2 text-sm font-medium text-white ${action.color}`}
          >
            {action.label}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Basic Information</h3>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-medium text-gray-700 md:col-span-2">
              Full Name
              <input
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-gray-500"
                defaultValue={userName}
                disabled
              />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Date of Birth
              <input
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-gray-500"
                defaultValue={userDob}
                disabled
              />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Gender
              <input
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-gray-500"
                defaultValue={userGender}
                disabled
              />
            </label>
            <label className="text-sm font-medium text-gray-700 md:col-span-2">
              Mobile Number
              <input
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-gray-500"
                defaultValue={userMobile}
                disabled
              />
            </label>
            <label className="text-sm font-medium text-gray-700 md:col-span-2">
              Email
              <input
                className="mt-2 w-full rounded-lg border border-gray-200 bg-gray-100 px-3 py-2 text-gray-500"
                defaultValue={userEmail}
                disabled
              />
            </label>
            <label className="text-sm font-medium text-gray-700 md:col-span-2">
              Address
              <input className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" placeholder="Enter address" />
            </label>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800">Health Summary</h3>
          <div className="mt-5 grid gap-4">
            <label className="text-sm font-medium text-gray-700">
              Medical Condition
              <input className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" placeholder="Enter medical condition" />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Blood Group
              <input className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" placeholder="Enter blood group" />
            </label>
            <label className="text-sm font-medium text-gray-700">
              Emergency Contact
              <input className="mt-2 w-full rounded-lg border border-gray-200 px-3 py-2" placeholder="Enter emergency contact" />
            </label>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserProfile
