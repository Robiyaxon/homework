import React from 'react'
import "./Navbar.css"
const Navbar = (props) => {
  return (
    <div>
        <div className='box'>
            <a className='Nvt' href=""> Sun-Fri (9am-5pm)</a>
            <a className='Nvt' href="">+88(019)24-184 461</a>
            <a className='Nvt' href=""> shovasatkhira@gmail.com</a>
            <h1>{props.a}</h1>
            <h1>{props.b}</h1>
            <img src={props.c} alt="" />
        </div>
    </div>
  )
}

export default Navbar