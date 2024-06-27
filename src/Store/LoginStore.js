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
          console.log(res)
        ))
      .catch(err =>
        runInAction(() => console.log(err)))
  }
  loginHandler = ()=>{
    axios.post('api/user/login', {...this.loginForm })
      .then(res=>
      runInAction(()=>
      console.log(res)
      ))
      .catch(err=>
      runInAction(()=> console.log(err)))
  }
}


export default LoginStore;