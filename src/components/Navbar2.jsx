import React from 'react'
import "./Navbar2.css"
import img from "../asserst/Без названия.png"
const Navbar2 = () => {
  return (
    <div className='box2'>
        <img src={img} alt="" />
<a className='wht' href="">Menyu</a>
<a className='wht' href="">Xizmatlar</a>
<a className='wht' href="">Kasaliklar</a>
<a className='wht' href="">Turlari</a>
<a className='wht' href="">Karona</a>
<select name="" id="">
    <option value="">UZ</option>
    <option value="">Ru</option>
    <option value="">Eng</option>
</select>
<button>Sign up</button>
    </div>
  )
}

export default Navbar2