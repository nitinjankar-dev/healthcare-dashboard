import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addComplaint } from '../store/complaintSlice'

const ComplaintForm: React.FC = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({ patientId: '', description: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      addComplaint({
        id: Date.now().toString(),
        patientId: form.patientId,
        description: form.description,
        status: 'open',
      }),
    )
    setForm({ patientId: '', description: '' })
    alert('Complaint submitted successfully!')
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Complaint Form"
      className="space-y-5 rounded-2xl bg-white p-6 shadow-md"
    >
      <h3 className="text-xl font-bold text-gray-800">Complaint Form</h3>

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
        <label className="mb-1 block font-medium text-gray-700">Complaint</label>
        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          rows={4}
          placeholder="Describe the issue or feedback"
          required
        />
      </div>
      <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Submit Complaint
      </button>
    </form>
  )
}

export default ComplaintForm
