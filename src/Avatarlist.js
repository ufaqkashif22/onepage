import React from 'react'
import "tachyons"
const Avatarlist = (props) => {
  return (
    <div>
        <div className='avatarstyle  bg-light-purple pa3  grow dib tc shadow-4 link black dim db mw5 pa2 br2 ba b--black-10 shadow-1' >
            <img src= {`https://joesch.moe/api/v1/male/random${props.name}`} alt='ufaq' ></img>
                <h1 className= "">{props.name}</h1>
                <p>{props.work}</p>
        </div>
    </div>
  )
}

export default Avatarlist
