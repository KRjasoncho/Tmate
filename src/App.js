
import './App.css';
import Main from "./View/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import StudentMain from "./View/admin/StudentMain";
import LoginMain from "./View/login/LoginMain";
import SignUp from "./View/login/SignUp";
import SideBar from "./View/common/SideBar";

function App() {

  return (
    <>
      <BrowserRouter>
    <div><SideBar/></div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/studentMain' element={<StudentMain/>}/>
        <Route path='/loginMain' element={<LoginMain/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
