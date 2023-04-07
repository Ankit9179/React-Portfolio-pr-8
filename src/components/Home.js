import React from "react";
import '../components/Home.css'
import Button from 'react-bootstrap/Button';
import logo from '../components/logo.png'


const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span style={{color:'#6c63ff' }}>Ankit Rahi</span></h2>
            <p style={{color:'#666' ,letterSpacing:".5px" , marginTop:2 }}> Portfolio page. myself ankit and i am a <span style={{color:'#000000' , fontWeight:'bold'}}>Web Developer</span>. in this page you can see my projects and if you want  connect to me so  you can click on contect button and fill the small form . if you want to know me more so click on the about button .there you will be know all about me  </p>
            <div className="btn_div mt-4">
            <Button variant="danger" style={{marginRight:24}}>Projects</Button>
            <Button variant="danger" style={{backgroundColor:'#6c63ff' , border:'none', marginRight:24}}>Youtube</Button>
            </div>
          </div>
          <div className="right_div">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
