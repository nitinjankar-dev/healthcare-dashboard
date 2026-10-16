import React from 'react'
import { useParams } from 'react-router-dom'

const patientRecords: Record<number, {
  name: string
  age: number
  condition: string
  status: string
  history: string[]
}> = {
  1: {
    name: 'Aarav Sharma',
    age: 32,
    condition: 'Hypertension',
    status: 'Stable',
    history: ['Initial consultation', 'Blood pressure monitored', 'Medication review completed'],
  },
  2: {
    name: 'Priya Nair',
    age: 28,
    condition: 'Migraine',
    status: 'Monitoring',
    history: ['MRI requested', 'Medication adjustment', 'Follow-up scheduled'],
  },
  3: {
    name: 'Daniel Lee',
    age: 45,
    condition: 'Diabetes',
    status: 'Critical',
    history: ['Blood sugar elevated', 'Insulin plan reviewed', 'Emergency consult completed'],
  },
  4: {
    name: 'Meera Patel',
    age: 36,
    condition: 'Asthma',
    status: 'Stable',
    history: ['Inhaler review', 'Lung exam normal', 'Breathing training scheduled'],
  },
}

const PatientDetail: React.FC = () => {
  const { id } = useParams()
  const patient = patientRecords[Number(id)]

  if (!patient) {
    return <div className="rounded-2xl bg-white p-8 text-gray-700 shadow-md">Patient not found.</div>
  }

  return (
    <section className="space-y-6">
      <div className="rounded-2xl bg-white p-6 shadow-md">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Patient Summary</p>
        <h2 className="mt-2 text-3xl font-bold text-gray-800">{patient.name}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="text-sm text-gray-500">Age</p>
            <p className="mt-2 text-xl font-bold text-gray-900">{patient.age}</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <p className="text-sm text-gray-500">Condition</p>
            <p className="mt-2 text-xl font-bold text-gray-900">{patient.condition}</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="text-sm text-gray-500">Status</p>
            <p className="mt-2 text-xl font-bold text-gray-900">{patient.status}</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-800">Medical History</h3>
        <ul className="mt-4 space-y-3 text-gray-700">
          {patient.history.map((event) => (
            <li key={event} className="rounded-lg border border-gray-200 p-3">• {event}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default PatientDetail
