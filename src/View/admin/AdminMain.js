import React from 'react';
import StudentCreate from "./StudentCreate";
import AllStudent from "./AllStudent";
import {useLocalObservable} from "mobx-react";
import StudentStore from "../../Store/StudentStore";
import EditStudent from "./EditStudent";

const AdminMain = () => {
  const studentStore = useLocalObservable(()=>new StudentStore())

  return (
    <div>
      <StudentCreate studentStore={studentStore}/>
      <AllStudent studentStore={studentStore}/>
      <EditStudent studentStore={studentStore}/>
    </div>
  );
};

export default AdminMain;