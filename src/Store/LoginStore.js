import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";

class LoginStore {

  //state
  signUpForm = {
    id: '',
    password: '',
    nickName: ''
  }

  constructor() {
    makeAutoObservable(this)
  }

  //action
  inputHandler = (e) => {
    const {name, value} = e.target;
    this.signUpForm[name] = value;
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
}


export default LoginStore;