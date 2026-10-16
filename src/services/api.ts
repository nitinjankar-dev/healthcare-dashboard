import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

const mockPatients = [
  { id: 'PT-1001', name: 'John Smith', age: 42, condition: 'Hypertension' },
  { id: 'PT-1002', name: 'Emma Johnson', age: 31, condition: 'Migraine' },
  { id: 'PT-1003', name: 'Robert Chen', age: 56, condition: 'Diabetes' },
]

const mockAppointments = [
  { id: 'AP-2001', patientId: 'PT-1001', date: '2026-10-17', notes: 'Follow-up consultation' },
  { id: 'AP-2002', patientId: 'PT-1002', date: '2026-10-18', notes: 'Prescription review' },
]

export const getPatients = async () => {
  try {
    const response = await api.get('/patients')
    return Array.isArray(response.data) ? response.data : mockPatients
  } catch {
    return mockPatients
  }
}

export const getAppointments = async () => {
  try {
    const response = await api.get('/appointments')
    return Array.isArray(response.data) ? response.data : mockAppointments
  } catch {
    return mockAppointments
  }
}

export const createAppointment = async (data: any) => {
  try {
    const response = await api.post('/appointments', data)
    return response.data
  } catch {
    return { ...data, id: Date.now().toString(), status: 'queued' }
  }
}
