import React from 'react';

function StudentList({ students, deleteStudent }) {
  return (
    <div className="list">
      {students.length === 0 && <p>No students added yet.</p>}
      {students.map((student, index) => (
        <div className="student" key={index}>
          <span>{student.name} - {student.grade}</span>
          <button onClick={() => deleteStudent(index)}>🗑️</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
