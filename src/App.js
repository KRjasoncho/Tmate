
import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {
  const [hello, setHello] = useState(null);

  const btn =()=>{
    axios.get('http://localhost:8080/api/hello')
      .then(response=>setHello(response.data))
      .catch(error => console.log(error))
  }

  return (
    <div className="App">
<div onClick={btn}>백엔드 통신 확인 {hello}</div>
    </div>
  );
}

export default App;
