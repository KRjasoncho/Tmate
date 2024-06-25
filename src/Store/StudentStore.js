import {makeAutoObservable} from "mobx";
import axios from "axios";

class StudentStore {
  //state
  formInput = {
    name: '',
    school: '',
    age: ''
  }

  constructor() {
    makeAutoObservable(this)
  }

  //action

  inputHandler = (e) => {
    const {name, value} = e.target;
    this.formInput[name] = value;
  }
  createStudent=(e)=>{
    axios.post("http://localhost:8080/api/createStudent",{
      ...this.formInput
    })
      .then(function (res){
        console.log(res.toString()+"등록이 완료되었습니다.")
      })
      .catch(function (err){
        console.log(err)
      })
  }
}

export default StudentStore