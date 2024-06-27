import React from 'react';
import {Link} from "react-router-dom";
import {Observer, useLocalObservable} from "mobx-react";
import LoginStore from "../../Store/LoginStore";

const LoginMain = () => {
  const loginStore = useLocalObservable(()=>new LoginStore)
  return (
    <div>
      <div onClick={loginStore.loginHandler}>로그인</div>
      <Observer>
        {()=>(
      <form onSubmit={loginStore.loginHandler}>
        <div>
          <label htmlFor='name'>아이디</label>
          <input type='text' id='id' name='id' value={loginStore.loginForm.id}
                 onChange={loginStore.loginInputHandler}
                 required/>
        </div>
        <div>
          <label htmlFor='password'>비밀번호</label>
          <input type='password' id='password' name='password' value={loginStore.loginForm.password}
                 onChange={loginStore.loginInputHandler}
                 required/>
        </div>
        <button>로그인</button>
      </form>
        )}
      </Observer>
      <Link to='/signUp'>회원가입 하기</Link>
    </div>
  );
};

export default LoginMain;