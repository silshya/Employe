import logo from './logo.svg';
import './App.css';
import Main from './Project/Main';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import EditProduct from './Project/EditProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateProduct from './Project/CreateProduct';
const test=createContext()


function App() {
  const [employe, setemploye] = useState([])
  const [ismodalopen, setismodalopen] = useState(false)
  const [rows, setrows] = useState([])
  const [viewmodal, setviewmodal] = useState(false)
  const [edit, setedit] = useState([])
  const api='https://jsonplaceholder.typicode.com/todos'
  useEffect(() => {
    axios.get(api).then(res=>setemploye(res.data));
    
   },[] )
  return (
    <div className="App">
      <test.Provider value={{employe,setemploye,ismodalopen,setismodalopen,rows,setrows,viewmodal,setviewmodal,edit,setedit}}>
        <BrowserRouter>
        <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/edit" element={<EditProduct />} />
      <Route path="/create" element={<CreateProduct />} />
      </Routes>
      </BrowserRouter>
      </test.Provider>
    </div>
  );
}

export default App;
export {test}
