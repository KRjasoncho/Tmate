import {makeAutoObservable} from "mobx";

class LoginStore{

  //state

  constructor() {
    makeAutoObservable(this)
  }

  //action
}

export default LoginStore;