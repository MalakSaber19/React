export interface Student {
    id: number;
    name: string;
    age: number;
    dept:string;
    courses: Course[];
  }
  
  export interface Course {
    courseName: string;
    grade: string;
  }