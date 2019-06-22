import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon} from'antd';

function App() {
  return (
    <div className="App">
      <div style={{color:"white"}} className="appbar">
      <div style={{display:"flex",flexDirection:"row"}}>
       <Icon type="mail" style={{marginLeft:"20px"}}/>
       <div>travelwithme@mail.in</div> 
      </div>
       <div style={{}}> <Icon type="twitter" /> <Icon type="facebook" /> <Icon type="instagram" /></div>
      </div>
    </div>
  );
}

export default App;
