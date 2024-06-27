import React, {useEffect} from 'react';
import {Observer} from "mobx-react";


const AllStudent = ({studentStore}) => {
  useEffect(() => {
    studentStore.getStudentList()
  }, [studentStore.formInput]);
  return (
    <Observer>
      {()=> (
        <div>
          <p>학생 목록</p>
          <ul>
            {studentStore.studentList.map((student, index) => (
              <div key={index}>
              <li >{student.name} - {student.school} - {student.age} - {student.id}</li>
              <button onClick={()=>studentStore.deleteStudent(student.id)}>학생 삭제</button>
              </div>
            ))}
          </ul>
        </div>
      )}
    </Observer>
  );
};

export default AllStudent;