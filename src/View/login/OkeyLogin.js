import React from 'react';
import {Link} from "react-router-dom";

const OkeyLogin = () => {
  return (
    <div>
      <p>
        {JSON.parse(localStorage.getItem("user")).nickName} 선생님 환영합니다.
      </p>
      <Link to='/adminMain'>
        학생 관리창으로 이동
      </Link>
    </div>
  );
};

export default OkeyLogin;