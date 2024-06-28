import React from 'react';
import {Link} from "react-router-dom";

const OkeyLogin = () => {
  return (
    <div>
      <p>
      로그인에 성공했습니다.
      </p>
      <Link to='/adminMain'>
        학생 관리창으로 이동
      </Link>
    </div>
  );
};

export default OkeyLogin;