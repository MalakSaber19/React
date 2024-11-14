import { useState } from "react";

function Data() {
  let [students, setStudents] = useState<{ userName: string, Math: string, Science: string, userAge: number }[]>([]);
  
  let [inputData, setInputData] = useState<{ userName: string, Math: string, Science: string, userAge: number }>({userName: "", userAge: 0, Math: "", Science: ""});

  const changeInput = (e) => {
    setInputData((oldInputData) => {
      return { ...oldInputData, [e.target.name]: e.target.value };
    });
  }

  const submitData = (e) => {
    e.preventDefault(); 
    
  setStudents((prevStudents) => {
       return [...prevStudents, inputData];
     });    
     
    setInputData({ userName: "", userAge: 0, Math: "", Science: "" });
  }

  return (
    <>
      <div className='d-flex justify-content-around mt-5 '>
        <div className='w-25'>
          <form>
            <div className="form-floating mb-3 ">
              <input type="text" className="form-control" name="userName" id="userName" placeholder="User Name" value={inputData.userName} onChange={changeInput} />
              <label>Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" name="userAge" id="userAge" placeholder="Age" value={inputData.userAge} onChange={changeInput} />
              <label>Age</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" name="Math" id="Math" placeholder="Math" value={inputData.Math} onChange={changeInput} />
              <label>Math</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" name="Science" id="Science" placeholder="Science" value={inputData.Science} onChange={changeInput} />
              <label>Science</label>
            </div>
            <button className="btn btn-primary w-100" onClick={submitData}>Add Students</button>
          </form>
        </div>
        <div className='w-50'>
          <table className="table table-striped p-2 ">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Grades</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.userName}</td>
                  <td>{student.userAge}</td>
                  <td>Math: <b>{student.Math}</b><br />Science: <b>{student.Science}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Data;
