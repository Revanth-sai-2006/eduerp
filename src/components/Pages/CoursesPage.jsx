import React, { useState } from 'react';
import ConfirmationDialog from '../ConfirmationDialog';

const CoursesPage = () => {
  const [courses, setCourses] = useState([
    { code: 'MATH101', name: 'Calculus I', department: 'Mathematics', credits: 4, instructor: 'Dr. Robert Miller', capacity: 50, enrolled: 45, description: 'Introduction to differential and integral calculus', status: 'Active' },
    { code: 'PHYS201', name: 'Physics for Engineers', department: 'Science', credits: 3, instructor: 'Prof. Jennifer Lee', capacity: 40, enrolled: 38, description: 'Fundamental principles of physics with engineering applications', status: 'Active' },
    { code: 'COMP301', name: 'Data Structures', department: 'Computer Science', credits: 3, instructor: 'Dr. Samuel Wilson', capacity: 60, enrolled: 52, description: 'Study of fundamental data structures and algorithms', status: 'Active' }
  ]);

  const [showDialog, setShowDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const handleDelete = (courseCode) => {
    setItemToDelete(courseCode);
    setShowDialog(true);
  };

  const confirmDelete = () => {
    setCourses(courses.filter(course => course.code !== itemToDelete));
    setShowDialog(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setShowDialog(false);
    setItemToDelete(null);
  };

  return (
    <div id="courses-page" className="page-content active">
      <div className="page-header">
        <h1 className="page-title">Course Management</h1>
        <p className="page-subtitle">Manage course catalog, enrollment, and materials</p>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Course Catalog</h2>
          <button className="card-action" id="add-course-btn-2">Add New Course</button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Department</th>
              <th>Credits</th>
              <th>Instructor</th>
              <th>Enrolled</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="course-table-body">
            {courses.map(course => (
              <tr key={course.code}>
                <td>{course.code}</td>
                <td>{course.name}</td>
                <td>{course.department}</td>
                <td>{course.credits}</td>
                <td>{course.instructor}</td>
                <td>{course.enrolled}/{course.capacity}</td>
                <td><span className="badge badge-success">{course.status}</span></td>
                <td>
                  <button className="btn btn-outline view-course-btn" data-id={course.code}>View</button>
                  <button className="btn btn-warning edit-course-btn" data-id={course.code}>Edit</button>
                  <button 
                    className="btn btn-danger delete-course-btn" 
                    onClick={() => handleDelete(course.code)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmationDialog 
        show={showDialog}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        title="Confirm Deletion"
        message="Are you sure you want to delete this course? This action cannot be undone."
      />
    </div>
  );
};

export default CoursesPage;