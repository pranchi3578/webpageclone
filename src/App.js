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
      <div className="menubar">
        <img src="data:image/png;base64,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"/>
      <div className="menu">
        <div className="menu1" >
          HOME
        </div>
        <div className="menu2">
          COMPANY
        </div>
        <div className="menu3">
          OUR BRANDS
        </div>
      </div>
      <div style={{display:"flex",alignItems:"center"}}>
      <Icon type="user" style={{fontSize:"30px",padding:"0px 20px"}}  />
      </div>
      </div>
    </div>
  );
}

export default App;
