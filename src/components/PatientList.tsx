import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { getPatients } from '../services/api'

const PatientList: React.FC = () => {
  const { data: patients, loading } = useFetch(getPatients)

  if (loading) return <p className="rounded-xl bg-white p-6 shadow-md">Loading patients...</p>

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md">
      <table aria-label="Patient List" className="w-full border-collapse text-left">
        <thead className="bg-blue-50 text-sm uppercase tracking-wide text-blue-700">
          <tr>
            <th className="px-5 py-3">Name</th>
            <th className="px-5 py-3">Age</th>
            <th className="px-5 py-3">Condition</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-gray-700">
          {patients.map((p: any) => (
            <tr key={p.id} className="hover:bg-gray-50">
              <td className="px-5 py-3">{p.name}</td>
              <td className="px-5 py-3">{p.age}</td>
              <td className="px-5 py-3">{p.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PatientList
