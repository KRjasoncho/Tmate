import React from 'react';
import classes from "../../Style/Main/Main.module.css"
import {Link} from "react-router-dom";

const Main = () => {
  return (
    <div className={classes.mainWrapper}>
      <p>간편한 회원가입으로 바로 Tmate 시작하기</p>
      <p>최고의 과외 학생 관리 시스템을 체험하세요.</p>
      <Link to='/loginMain'>Tmate 시작하기</Link>
    </div>
  );
};

export default Main;