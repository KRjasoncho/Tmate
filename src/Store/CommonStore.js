import {makeAutoObservable} from "mobx";

class CommonStore {
  //state
  extentFlag=false

  constructor(){
    makeAutoObservable(this)
  }

  //action
  sideBarExtentHandler=()=>{
    this.extentFlag = !this.extentFlag
  }
}

export default CommonStore