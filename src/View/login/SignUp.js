import React from 'react';
import {Observer, useLocalObservable} from "mobx-react";
import LoginStore from "../../Store/LoginStore";

const SignUp = () => {
  const loginStore = useLocalObservable(()=>new LoginStore);

  return (
    <div>
      <p>회원가입</p>
      <Observer>
        {()=>(
      <form>
        <div>
          <label htmlFor='name'>아이디</label>
          <input type='text' id='id' value={loginStore.signUpForm.id} name='id'
                  onChange={loginStore.inputHandler}/>
        </div>
        <div>
          <label htmlFor='password'>비밀번호</label>
          <input type='password' id='password' value={loginStore.signUpForm.password} name='password'
                  onChange={loginStore.inputHandler} />
        </div>
        <div>
          <label htmlFor='nickName'>닉네임</label>
          <input type='text' id={'nickName'} value={loginStore.signUpForm.nickName} name='nickName'
                  onChange={loginStore.inputHandler}/>
        </div>
      </form>
        )}
      </Observer>
    </div>
  );
};

export default SignUp;