import React from 'react';
import { Student } from './models/students.model';
import Students from './components/component/Students';

const studentsData: Array<Student> = [
  {
    id: 1,
    name: "Sarah",
    age: 20,
    dept:"dept2",
    courses: [
      { courseName: "Math", grade: "A" },
      { courseName: "Science", grade: "B" },
    ]
  },
  {
    id: 2,
    name: "Malak",
    age: 21,
    dept:"dept1",
    courses: [
      { courseName: "Math", grade: "F" },
      { courseName: "Science", grade: "D" },
    ]
  },
  {
    id: 2,
    name: "Fatma",
    age: 22,
    dept:"dept1",
    courses: [
      { courseName: "Math", grade: "C" },
      { courseName: "Science", grade: "D" },
    ]
  }

];

const App: React.FC = () => {
  return (<Students students={studentsData} />);
};

export default App;
