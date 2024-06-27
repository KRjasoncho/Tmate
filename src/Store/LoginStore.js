import {makeAutoObservable} from "mobx";

class LoginStore{

  //state
  signUpForm ={
    id:'',
    password:'',
    nickName:''
  }

  constructor() {
    makeAutoObservable(this)
  }

  //action
  inputHandler =(e)=>{
    const {name, value} = e.target;
    this.signUpForm[name]= value;
  }
}

export default LoginStore;