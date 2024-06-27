import React from 'react';
import {Link} from "react-router-dom";

const LoginMain = () => {
  return (
    <div>
      <div>로그인</div>
      <form>
        <div>
          <input type='text'/>
        </div>
        <div>
          <input type='password'/>
        </div>
      </form>
      <Link to='/signUp'>회원가입 하기</Link>
    </div>
  );
};

export default LoginMain;