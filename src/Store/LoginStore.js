import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";

class LoginStore {

  //state
  signUpForm = {
    id: '',
    password: '',
    nickName: ''
  }
  loginForm ={
    id:'',
    password:''
  }

  constructor() {
    makeAutoObservable(this)
  }

  //action
  inputHandler = (e) => {
    const {name, value} = e.target;
    this.signUpForm[name] = value;
  }
  loginInputHandler = (e) => {
    const {name, value} = e.target;
    this.loginForm[name] = value;
  }
  signUpHandler = () => {
    axios.post('api/user/create', {...this.signUpForm})
      .then(res =>
        runInAction(() =>
          window.location.replace("/loginMain")
        ))
      .catch(err =>
        runInAction(() => console.log(err)))
  }
  loginHandler = () => {
    axios.post('api/user/login', { ...this.loginForm })
      .then(res => {
        if (res !== null && res.data) {
          runInAction(() => {
            localStorage.setItem(`user`, JSON.stringify(res.data));
            localStorage.setItem("loginState", 'okey')
          });
        } else {
          window.alert('잘못된 아이디입니다.');
        }
      })
      .catch(err =>
        runInAction(() => {
          console.log(err);
        }))
  }
  logoutHanlder =()=>{
    localStorage.removeItem('user');
    localStorage.removeItem('loginState');
    window.location.replace('/AdminMain');
  }
}


export default LoginStore;