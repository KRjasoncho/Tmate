import {makeAutoObservable, runInAction} from "mobx";
import axios from "axios";

class StudentStore {
  //state
  formInput = {
    name: '',
    school: '',
    age: '',
  }
  editInput = {
    name: '',
    school: '',
    age: '',
  }
  editId = null
  studentList = []

  constructor() {
    makeAutoObservable(this)
  }

  //action

  editInputHandler = (e)=>{
    if(e.target.name === 'id') {
      const {value} = e.target
      this.editId = value;
    }else{
      const {name, value} = e.target;
      this.editInput[name] = value;
  }
  }
  inputHandler = (e) => {
      const {name, value} = e.target;
      this.formInput[name] = value;
  }
  createStudent = () => {
    axios.post("/api/student/createStudent", {
      ...this.formInput
    })
      .then( (res)=> {
        runInAction(()=>{
          console.log(res.toString() + "등록이 완료되었습니다.")
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }
  getStudentList = () => {
    axios.get("/api/student/allStudent")
      .then((res) =>
        runInAction(()=>{
          this.studentList = res.data
        })
      )
      .catch((err) =>
        console.log(err));
  };
  deleteStudent = (id)=>{
    axios.delete(`/api/student/${id}/delete`)
      .then((response)=> {
        console.log(response);
        this.getStudentList();
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  editStudent = ()=>{
    axios.put(`/api/student/${this.editId}/edit`,{
      ...this.editInput
    })
      .then((res)=>{
        runInAction(()=>{
          console.log(res)
        })
      })
      .catch((err)=>
        runInAction(()=>{
          console.log(err)
        }))
  }
}

export default StudentStore