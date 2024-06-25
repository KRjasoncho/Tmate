import React from 'react';
import {Observer, useLocalObservable} from "mobx-react";
import StudentStore from "../../Store/StudentStore";

const StudentCreate = () => {
const studentStore = useLocalObservable(()=>new StudentStore())

  return (
    <div>
      <p onClick={studentStore.createStudent}>학생 추가</p>
      <Observer>
        {()=> (
          <form onSubmit={studentStore.createStudent}>
            <div>
              <label htmlFor='name'>이름</label>
              <input type='text' id="name" name='name' value={studentStore.formInput.name}
                     onChange={studentStore.inputHandler}/>
            </div>
            <div>
              <label htmlFor='school'>학교</label>
              <input type='text' id="school" name='school' value={studentStore.formInput.school}
                     onChange={studentStore.inputHandler}/>
            </div>
            <div>
              <label htmlFor='age'>나이</label>
              <input type='number' id="age" name='age' value={studentStore.formInput.age}
                     onChange={studentStore.inputHandler}/>
            </div>
            <button>학생 추가하기</button>
          </form>
        )}
      </Observer>
    </div>
  );
};

export default StudentCreate;