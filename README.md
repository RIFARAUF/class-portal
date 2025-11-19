# Student Directory Portal

A React app showcasing a student directory with reusable components, nested skill lists, and conditional rendering, built with Vite.

## Features
- Reusable `StudentCard` component that accepts props: `name`, `rollNumber`, `course`, `email`, `skills`, `isActive`
- Skills list rendered using `map()` inside `StudentCard`
- Two groups: Active Students and Alumni (each rendered via `map()`)
- Directory statistics: total students, active vs alumni, most common skill
- Styled badges for skills and status

## Components
- `StudentCard.jsx` — displays student details & skills; conditional Active/Inactive badge
- `App.jsx` — groups, stats, and layout
- `students.js` — sample data arrays for active and alumni students

## Links
- **GitHub Repository:** https://github.com/RIFARAUF/class-portal.git
- **Live Website:** https://<your-deployment-url>

## Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/RIFARAUF/class-portal.git
   cd student-directory
