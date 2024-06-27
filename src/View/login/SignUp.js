import React from 'react';
import {Observer} from "mobx-react";

const SignUp = () => {
  return (
    <div>
      <p>회원가입</p>
      <Observer>
        {()=>(
      <form>
        <div>
          <label htmlFor='name'>아이디</label>
          <input type='text'/>
        </div>
        <div>
          <label htmlFor='name'>비밀번호</label>
          <input type='text'/>
        </div>
        <div>
          <label htmlFor='name'>닉네임</label>
          <input type='text'/>
        </div>
      </form>
        )}
      </Observer>
    </div>
  );
};

export default SignUp;