import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react'
import Footer from './Footer/Footer';
function App() {
  const [show,setShow]=useState(true)
  return (
    <div className="App">
  
     {
       show?<h1>Hi my name is YoussefTanzekhti !</h1>:null
     }
     <br />
    <img src="super_saiyan_god_super_saiyan_vegeta_by_moxie2d-d8p5oi6.jpg" style={{height: "250px"}} />
<button onClick={()=>setShow(!show)} >Toggle</button> 
<Footer />
    </div>
   
  );
}

export default App;
