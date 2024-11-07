import React from 'react';
import { Student } from '../../models/students.model';
import'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Students: React.FC<{ students: Array<Student> }> = ({ students }) => {
  return (
    <>

      <h1 className='text-center p-5'> Students Preview</h1>

      {students.map((student) => (

        <table  className="table table-striped p-2" key={student.id}>
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grades</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                {student.courses.map((course, id) => (
                  <div key={id}>
                    {course.courseName}: <b>{course.grade}</b>
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      ))};

    </>


  );
};

export default Students;
