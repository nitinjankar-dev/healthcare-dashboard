import React from 'react'
import { useNavigate } from 'react-router-dom'
import ComplaintForm from '../components/ComplaintForm'
import FeedbackList from '../components/FeedbackList'

type ComplaintsProps = {
  role: 'admin' | 'user' | null
}

const Complaints: React.FC<ComplaintsProps> = ({ role }) => {
  const navigate = useNavigate()

  if (role === 'admin') {
    return (
      <section className="space-y-6">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Support</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">Complaints & Feedback</h2>
          </div>
          <button
            type="button"
            onClick={() => navigate('/admin')}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            Back to Home
          </button>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-md">
          <h3 className="text-xl font-bold text-gray-800">All Complaints</h3>
          <ul className="mt-4 space-y-3">
            {[
              'Delay in medicine delivery',
              'Billing issue for consultation',
              'Room cleaning concern',
            ].map((item, index) => (
              <li key={index} className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Support</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">Complaints & Feedback</h2>
        </div>
        <button
          type="button"
          onClick={() => navigate('/user/profile')}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Back to Home
        </button>
      </div>
      <ComplaintForm />
      <div className="mt-6">
        <FeedbackList />
      </div>
    </section>
  )
}

export default Complaints
