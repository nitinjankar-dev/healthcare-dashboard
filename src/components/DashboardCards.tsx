import React from 'react'

const DashboardCards: React.FC = () => {
  const stats = [
    { title: 'Total Patients', value: 120 },
    { title: 'Appointments Today', value: 35 },
    { title: 'Open Complaints', value: 5 },
  ]

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map((s, i) => (
        <div key={i} className="rounded-lg bg-white p-6 text-center shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">{s.title}</h3>
          <p className="mt-3 text-2xl font-bold text-blue-600">{s.value}</p>
        </div>
      ))}
    </div>
  )
}

export default DashboardCards
