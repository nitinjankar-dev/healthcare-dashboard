import React, { useState } from 'react'
import { createAppointment } from '../services/api'

const AppointmentForm: React.FC = () => {
  const [form, setForm] = useState({ patientId: '', date: '', notes: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createAppointment(form)
    alert('Appointment created successfully!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Appointment Form"
      className="space-y-5 rounded-2xl bg-white p-6 shadow-md"
    >
      <h3 className="text-xl font-bold text-gray-800">Appointment Form</h3>

      <div>
        <label className="mb-1 block font-medium text-gray-700">Patient ID</label>
        <input
          type="text"
          value={form.patientId}
          onChange={(e) => setForm({ ...form, patientId: e.target.value })}
          placeholder="Enter patient ID"
          required
        />
      </div>
      <div>
        <label className="mb-1 block font-medium text-gray-700">Date</label>
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="mb-1 block font-medium text-gray-700">Notes</label>
        <textarea
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          rows={4}
          placeholder="Add appointment notes"
          required
        />
      </div>
      <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Create Appointment
      </button>
    </form>
  )
}

export default AppointmentForm
