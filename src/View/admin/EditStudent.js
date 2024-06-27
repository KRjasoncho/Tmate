import React from 'react';
import {Observer} from "mobx-react";

const EditStudent = ({studentStore}) => {
  return (
    <div>
      <p onClick={studentStore.editStudent}>학생 정보 변경</p>
      <Observer>
        {()=> (
          <form onSubmit={studentStore.editStudent}>
            <div>
              <label htmlFor='id'>학생 id</label>
              <input type='number' id='id' name='id' value={studentStore.editInput.id}
                     onChange={studentStore.editInputHandler}/>
            </div>
            <div>
              <label htmlFor='name'>이름</label>
              <input type='text' id="name" name='name' value={studentStore.editInput.name}
                     onChange={studentStore.editInputHandler}/>
            </div>
            <div>
              <label htmlFor='school'>학교</label>
              <input type='text' id="school" name='school' value={studentStore.editInput.school}
                     onChange={studentStore.editInputHandler}/>
            </div>
            <div>
              <label htmlFor='age'>나이</label>
              <input type='number' id="age" name='age' value={studentStore.editInput.age}
                     onChange={studentStore.editInputHandler}/>
            </div>
            <button>학생 정보 변경하기</button>
          </form>
        )}
      </Observer>
    </div>
  );
};

export default EditStudent;