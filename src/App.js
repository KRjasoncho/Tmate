
import './App.css';
import Main from "./View/main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminMain from "./View/admin/AdminMain";
import LoginMain from "./View/login/LoginMain";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/adminMain' element={<AdminMain/>}/>
        <Route path='/loginMain' element={<LoginMain/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
