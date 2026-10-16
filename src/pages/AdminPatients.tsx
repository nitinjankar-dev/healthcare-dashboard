import React from 'react'
import { Link } from 'react-router-dom'

const defaultPatients = [
  { id: 1, name: 'Aarav Sharma', age: 32, condition: 'Hypertension', status: 'Stable' },
  { id: 2, name: 'Priya Nair', age: 28, condition: 'Migraine', status: 'Monitoring' },
  { id: 3, name: 'Daniel Lee', age: 45, condition: 'Diabetes', status: 'Critical' },
  { id: 4, name: 'Meera Patel', age: 36, condition: 'Asthma', status: 'Stable' },
]

const getPatientList = () => {
  const storedUsers = JSON.parse(localStorage.getItem('healthcare-users') || '[]') as Array<{
    id: number
    name: string
    dob: string
    gender: string
    mobile: string
    email: string
  }>

  const mappedUsers = storedUsers.map((user, index) => ({
    id: user.id || index + 100,
    name: user.name,
    age: Math.max(18, new Date().getFullYear() - new Date(user.dob).getFullYear()),
    condition: user.gender === 'male' ? 'General Checkup' : user.gender === 'female' ? 'Routine Care' : 'Consultation',
    status: 'Stable',
  }))

  return [...defaultPatients, ...mappedUsers]
}

const AdminPatients: React.FC = () => {
  const patientData = getPatientList()

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Patients</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">Patient Records</h2>
        </div>
        <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">Add Patient</button>
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Age</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Condition</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {patientData.map((patient) => (
              <tr key={patient.id}>
                <td className="px-4 py-3 text-gray-800">{patient.name}</td>
                <td className="px-4 py-3 text-gray-700">{patient.age}</td>
                <td className="px-4 py-3 text-gray-700">{patient.condition}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-semibold text-blue-700">
                    {patient.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Link to={`/admin/patients/${patient.id}`} className="rounded bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-700">
                      View
                    </Link>
                    <button className="rounded bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">Edit</button>
                    <button className="rounded bg-rose-100 px-2 py-1 text-xs font-semibold text-rose-700">Remove</button>
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

export default AdminPatients
