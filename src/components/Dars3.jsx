import React from 'react'
import Navbar from './Navbar'

const Dars3 = (props) => {
  return (
    <div>
       {props.a}
       {props.b}
       <img src={props.c} alt="" />
       <Navbar a={props.a} b={ props.b} c={props.c}/>
    </div>
  )
}

export default Dars3