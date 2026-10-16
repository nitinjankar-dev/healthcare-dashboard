import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Complaint {
  id: string
  patientId: string
  description: string
  status: 'open' | 'resolved'
}

const initialState: Complaint[] = []

const complaintSlice = createSlice({
  name: 'complaints',
  initialState,
  reducers: {
    addComplaint: (state, action: PayloadAction<Complaint>) => {
      state.push(action.payload)
    },
    resolveComplaint: (state, action: PayloadAction<string>) => {
      const complaint = state.find((c) => c.id === action.payload)
      if (complaint) complaint.status = 'resolved'
    },
  },
})

export const { addComplaint, resolveComplaint } = complaintSlice.actions
export default complaintSlice.reducer
