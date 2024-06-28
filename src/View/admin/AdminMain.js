import React, {useEffect} from 'react';
import StudentCreate from "./StudentCreate";
import AllStudent from "./AllStudent";
import {Observer, useLocalObservable} from "mobx-react";
import StudentStore from "../../Store/StudentStore";
import EditStudent from "./EditStudent";
import LoginStore from "../../Store/LoginStore";
import NotOkeyLogin from "../login/NotOkeyLogin";

const AdminMain = () => {
  const studentStore = useLocalObservable(() => new StudentStore())
  const loginStore = useLocalObservable(() => new LoginStore())
  return (
    <div>
      {localStorage.getItem("loginState") !== "okey" ? <NotOkeyLogin/> :
        <Observer>
          {() => (
            <>
              <StudentCreate studentStore={studentStore}/>
              <AllStudent studentStore={studentStore}/>
              <EditStudent studentStore={studentStore}/>
              <button onClick={loginStore.logoutHanlder}>
                로그아웃
              </button>
            </>
          )}
        </Observer>
      }
    </div>
  );
};

export default AdminMain;