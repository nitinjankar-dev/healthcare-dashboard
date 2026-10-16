import React from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../store'

const FeedbackList: React.FC = () => {
  const complaints = useSelector((state: RootState) => state.complaints)

  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <h3 className="mb-4 text-xl font-bold text-gray-800">Recent Feedback</h3>
      <ul className="space-y-4">
        {complaints.length === 0 ? (
          <li className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-4 text-gray-500">
            No complaints submitted yet.
          </li>
        ) : (
          complaints.map((c) => (
            <li key={c.id} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
              <div className="flex items-center justify-between gap-3">
                <strong className="text-gray-800">Patient: {c.patientId}</strong>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    c.status === 'resolved'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {c.status}
                </span>
              </div>
              <p className="mt-2 text-gray-600">{c.description}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default FeedbackList
