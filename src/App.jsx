// src/App.jsx
import React from "react";
import StudentCard from "./components/StudentCard";
import { activeStudents, alumniStudents } from "./data/students";
import "./index.css";

function flattenSkills(...groups) {
  return groups.flatMap((g) => g.flatMap((s) => s.skills || []));
}

function mostCommonSkill(allSkills) {
  if (!allSkills.length) return "N/A";
  const freq = {};
  allSkills.forEach((skill) => {
    const key = skill.toLowerCase();
    freq[key] = (freq[key] || 0) + 1;
  });
  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
  return sorted[0] ? sorted[0][0] : "N/A";
}

export default function App() {
  const totalStudents = activeStudents.length + alumniStudents.length;
  const totalActive = activeStudents.length;
  const totalAlumni = alumniStudents.length;

  const allSkills = flattenSkills(activeStudents, alumniStudents);
  const commonSkill = mostCommonSkill(allSkills);

  return (
    <div className="app-container">
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p className="subtitle">Full Stack Development Batch</p>
      </header>

      <section className="stats">
        <h2>Directory Statistics</h2>
        <p><strong>Total students:</strong> {totalStudents}</p>
        <p><strong>Active:</strong> {totalActive} &nbsp; | &nbsp; <strong>Alumni:</strong> {totalAlumni}</p>
        <p><strong>Most common skill:</strong> {commonSkill ? commonSkill : "N/A"}</p>
      </section>

      <main className="lists">
        <section className="group">
          <h2>Active Students</h2>
          <div className="cards-grid">
            {activeStudents.map((student) => (
              <StudentCard
                key={student.rollNumber}
                {...student}
              />
            ))}
          </div>
        </section>

        <section className="group">
          <h2>Alumni</h2>
          <div className="cards-grid">
            {alumniStudents.map((student) => (
              <StudentCard
                key={student.rollNumber}
                {...student}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Institute: Example Institute of Technology — Full Stack Course</p>
        <p>Contact: directory@example.com</p>
        <p>© {new Date().getFullYear()} Student Portal</p>
      </footer>
    </div>
  );
}
