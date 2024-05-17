import React, { useState } from 'react'
import "./Avatar.css"
import "tachyons"
import Avatarlist from './Avatarlist'
const Avatar = (props) => {
  const [firstHead,setHead]=useState("Welcome To Avatar World");

   const changeName=()=>{
    let val= firstHead;
    (val === "Welcome to Avatar World") ?
    setHead("Welcome To Our Homepage"):  setHead( "Welcome to Avatar World")
  };
  const avatarlistarray= [
    {
      id:1,
      name:"James",
      work:"Web Designer"
    },
    {
      id:2,
      name:"Watson",
      work:"Web Developer"
    },
    {
      id:3,
      name:"Peru",
      work:"Backend Developer"
    },
    {
      id:4,
      name:"Christine",
      work:"Full Stack Developer"
    },
  ]

  const avatarCard = avatarlistarray.map( (val,i) => {
        return <Avatarlist id={avatarlistarray[i].name}
                           name={avatarlistarray[i].name}
                           work={avatarlistarray[i].work}/>
        
  })
  return (
    <div className='main-page'>
        <h1 className='tc'>{firstHead}</h1>
          {avatarCard}
        <button onClick={changeName} className=' bg-light-purple'>Subscribe</button>
    </div>
  
  )
}

export default Avatar;
