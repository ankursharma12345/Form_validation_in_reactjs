import React, { useRef,Fragment, useState} from "react";
import "./App.css";
import Details from './components/Details';
import { Routes, Route } from "react-router-dom";
import User from "./User";
import { useNavigate } from "react-router-dom";

function App() {  
  const [formData,updateFormData]  = useState({});
  const navigate = useNavigate();
  const detailsRef = useRef(); 
  const handleSave=(e)=>{
    debugger
    const detailData =  detailsRef?.current?.detailsData;
      updateFormData(detailData);
      setTimeout(()=>{
        navigate("/User")
      },100)
  };
 
   
  return (
    <Fragment> 
      <Routes>
        <Route path='/User'  element={<User data={formData}/>}></Route>
        <Route path='/' element={<Details handleSave={handleSave} ref={detailsRef}/>}></Route> 
        </Routes>
      {/* <Details ref={inputRef}/> */}
      </Fragment>
  );
}

export default App;
