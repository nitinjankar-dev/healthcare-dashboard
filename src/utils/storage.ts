export type Role = 'admin' | 'user'

export type UserRecord = {
  id: number | string
  name: string
  dob: string
  gender: string
  mobile: string
  email: string
  password?: string
}

const STORAGE_KEYS = {
  role: 'healthcare-role',
  currentUser: 'healthcare-current-user',
  users: 'healthcare-users',
} as const

const safeParse = <T>(value: string | null, fallback: T): T => {
  if (!value) return fallback

  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export const getStoredRole = (): Role | null => {
  const role = localStorage.getItem(STORAGE_KEYS.role)
  return role === 'admin' || role === 'user' ? role : null
}

export const setStoredRole = (role: Role | null) => {
  if (role) {
    localStorage.setItem(STORAGE_KEYS.role, role)
    return
  }

  localStorage.removeItem(STORAGE_KEYS.role)
}

export const getCurrentUser = (): UserRecord | null => {
  const currentUser = safeParse<UserRecord | null>(localStorage.getItem(STORAGE_KEYS.currentUser), null)
  return currentUser
}

export const setCurrentUser = (user: UserRecord | null) => {
  if (user) {
    localStorage.setItem(STORAGE_KEYS.currentUser, JSON.stringify(user))
    return
  }

  localStorage.removeItem(STORAGE_KEYS.currentUser)
}

export const getStoredUsers = (): UserRecord[] => safeParse<UserRecord[]>(localStorage.getItem(STORAGE_KEYS.users), [])

export const setStoredUsers = (users: UserRecord[]) => {
  localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users))
}

export const clearSession = () => {
  setStoredRole(null)
  setCurrentUser(null)
}
