import React from 'react';
import {Link} from "react-router-dom";

const NotOkeyLogin = () => {
  return (
    <div>
      로그인이 되어있지 않습니다.
      <button onClick={()=>window.location.replace('/loginMain')}>로그인 하기</button>
    </div>
  );
};

export default NotOkeyLogin;