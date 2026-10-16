import React from 'react'
import { useNavigate } from 'react-router-dom'

type InsuranceProps = {
  role: 'admin' | 'user'
}

const Insurance: React.FC<InsuranceProps> = ({ role }) => {
  const navigate = useNavigate()

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Coverage</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-800">
            {role === 'admin' ? 'Insurance Overview' : 'My Insurance'}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => navigate('/user/profile')}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Back to Home
        </button>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-md">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4">
            <p className="text-sm text-gray-500">Provider</p>
            <p className="mt-2 text-xl font-bold text-gray-900">BlueCross</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="text-sm text-gray-500">Policy ID</p>
            <p className="mt-2 text-xl font-bold text-gray-900">BC-2258</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <p className="text-sm text-gray-500">Status</p>
            <p className="mt-2 text-xl font-bold text-gray-900">Active</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Insurance
