
import './App.css';
import Main from "./View/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminMain from "./View/admin/AdminMain";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/adminMain' element={<AdminMain/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
