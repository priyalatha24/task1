import '../App.css'
import React,{useState,useEffect} from 'react';
import Person from '../components/person/Person';
import Menu from '../components/menu/Menu';
import TimezoneApi from "../components/timezone/TimezoneApi"

function Main() {
  let[name,setName] = useState("priya");
  let[lat,setLat] = useState("11.67");
  let[long,setLong] = useState("76.87");
  let props ={first_name:"Priya",age:20,data:[{"skill":"java","rating":4},{"skill":"java","rating":4},{"skill":"java","rating":4},{"skill":"java","rating":4}]}


  const test =(()=>{
    return "Nothing"
  })
  let innerHtml =`<p>${test()}</p>`
  document.getElementById("top").innerHTML = innerHtml

useEffect(()=>{
  const timer = setInterval(()=>{
      setName("priya");
      setLat("9.087");
      setLong("67.67");
      },10000)
      return () =>clearInterval(timer);
     
      // let btnOnClick=()=>{
      //   console.log("Button click")
      });

//useeffect both func, var is used 
      useEffect(()=>{
       
      });

    return (
      <div className="Resume">
        <div className='Top' id="top">
        </div>
        <div className='Bottom'>
          <div className='Left'>
            <p>Name{name}</p>
            <Menu{...props}/>
            </div>
            <div className='Right'>
              <Person token={'hsjpriya'}age={33}/>
              </div>
            <TimezoneApi lat={lat} long ={long}/>
        </div>
      </div>
    );
  }
  
  export default Main;