import React from 'react'

type PatientsProps = {
  role: 'admin' | 'user' | null
}

const patientData = [
  {
    name: 'John Smith',
    age: 42,
    condition: 'Hypertension',
    status: 'Stable',
    history: 'Monitoring blood pressure for 6 months; lifestyle recommendations follow-up scheduled.',
    visit: 'Reviewed on Oct 15',
  },
  {
    name: 'Emma Johnson',
    age: 31,
    condition: 'Migraine',
    status: 'Monitoring',
    history: 'Symptoms reduced after medication adjustment. Continue tracking triggers and sleep patterns.',
    visit: 'Reviewed on Oct 12',
  },
  {
    name: 'Robert Chen',
    age: 56,
    condition: 'Diabetes',
    status: 'Review',
    history: 'Blood sugar trends being tracked; dosage review pending with specialist consultation.',
    visit: 'Reviewed on Oct 10',
  },
]

const Patients: React.FC<PatientsProps> = ({ role }) => {
  if (role !== 'admin') {
    return (
      <section className="rounded-2xl bg-white p-8 shadow-md">
        <h2 className="text-3xl font-bold text-gray-800">Patients</h2>
        <p className="mt-3 text-gray-600">Patient records are only available to admin users.</p>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Records</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-800">Patients</h2>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-800">All Patient List</h3>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Add Patient
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full border-collapse text-left">
            <thead className="bg-blue-50 text-sm uppercase tracking-wide text-blue-700">
              <tr>
                <th className="px-5 py-3">Name</th>
                <th className="px-5 py-3">Age</th>
                <th className="px-5 py-3">Condition</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              {patientData.map((patient, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-5 py-3">{patient.name}</td>
                  <td className="px-5 py-3">{patient.age}</td>
                  <td className="px-5 py-3">{patient.condition}</td>
                  <td className="px-5 py-3">{patient.status}</td>
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
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {patientData.map((patient, index) => (
          <div key={index} className="rounded-2xl bg-white p-6 shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800">{patient.name}</h3>
              <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                {patient.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-500">{patient.visit}</p>
            <p className="mt-4 font-medium text-gray-700">Condition: {patient.condition}</p>
            <p className="mt-2 text-sm leading-6 text-gray-600">{patient.history}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Patients
