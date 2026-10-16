import React from 'react'
import { useNavigate } from 'react-router-dom'
import AppointmentForm from '../components/AppointmentForm'

type AppointmentsProps = {
  role: 'admin' | 'user' | null
}

const Appointments: React.FC<AppointmentsProps> = ({ role }) => {
  const navigate = useNavigate()

  if (role === 'admin') {
    return (
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Schedule</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">Appointments</h2>
          </div>
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>

        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          <table className="w-full border-collapse text-left">
            <thead className="bg-blue-50 text-sm uppercase tracking-wide text-blue-700">
              <tr>
                <th className="px-5 py-3">Patient</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Doctor</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {[
                { patient: 'John Smith', date: '2026-10-17', doctor: 'Dr. Lee', status: 'Confirmed' },
                { patient: 'Emma Johnson', date: '2026-10-18', doctor: 'Dr. Patel', status: 'Pending' },
              ].map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-5 py-3">{item.patient}</td>
                  <td className="px-5 py-3">{item.date}</td>
                  <td className="px-5 py-3">{item.doctor}</td>
                  <td className="px-5 py-3">
                    <div className="flex gap-2">
                      <button className="rounded-md bg-blue-600 px-3 py-1.5 text-sm">Edit</button>
                      <button className="rounded-md bg-red-600 px-3 py-1.5 text-sm">Remove</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">My Schedule</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">Appointments</h2>
        </div>
        <button
          type="button"
          onClick={() => navigate('/user/profile')}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          Back to Home
        </button>
      </div>
      <AppointmentForm />
    </section>
  )
}

export default Appointments
