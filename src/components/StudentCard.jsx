// src/components/StudentCard.jsx
import React from "react";

export default function StudentCard({
  name,
  rollNumber,
  course,
  email,
  skills = [],
  isActive = false,
}) {
  return (
    <div className="student-card">
      <div className="student-card-header">
        <h3 className="student-name">{name}</h3>
        <span
          className={`status-badge ${isActive ? "active" : "inactive"}`}
          aria-label={isActive ? "Active student" : "Inactive student"}
        >
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <div className="student-info">
        <p><strong>Roll:</strong> {rollNumber}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
      </div>

      <div className="skills">
        <strong>Skills:</strong>
        <div className="skills-list">
          {skills && skills.length ? (
            skills.map((skill, idx) => (
              <span className="skill-badge" key={`${rollNumber}-skill-${idx}`}>
                {skill}
              </span>
            ))
          ) : (
            <span className="no-skills">No skills listed</span>
          )}
        </div>
      </div>
    </div>
  );
}
