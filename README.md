# Healthcare Dashboard

A responsive healthcare management dashboard built with React, TypeScript, Vite, and Tailwind CSS. The app includes a guest landing page, admin dashboard, user profile experience, appointment and complaint workflows, and basic patient management features.

## Features

- Landing page for guests with banner/hero section and login/signup actions
- Clean login page with admin and user authentication flow
- Signup page for creating new patient accounts
- Role-based navigation for admin and users
- User profile page with editable personal information fields and health summary section
- Appointment management page
- Complaint submission and tracking page
- Insurance information page
- Admin patient list with patient records and action buttons
- Patient detail page
- Persistent role and user state using localStorage
- Demo credentials for quick testing

## Demo Credentials

Admin:
- Email: admin@clinic.com
- Password: admin123

User:
- Email: user@clinic.com
- Password: user123

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

## Project Structure

```bash
src/
  App.tsx
  components/
    Navbar.tsx
    Sidebar.tsx
  pages/
    Login.tsx
    Signup.tsx
    UserProfile.tsx
    Appointments.tsx
    Complaints.tsx
    Insurance.tsx
    AdminDashboard.tsx
    AdminPatients.tsx
    PatientDetail.tsx
  utils/
    storage.ts
```

## Installation

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Notes

This project is a frontend healthcare dashboard prototype with demo/local authentication and in-browser persistence. It is suitable for UI demonstration, product concept validation, and further backend integration.

## License

This project is for educational/demo purposes.

