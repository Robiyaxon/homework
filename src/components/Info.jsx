import React from 'react'
import './Info.css'
import img from "../asserst/1.png"
import img1 from "../asserst/2.png"

const Info = () => {
  return (
    <div className='sad'>
              
        <img className='red' src={img} alt="" />
       
    
        <h2>Detailed information on coronavirus disease</h2>

        <div className='fed'>
<img className='red1' src={img1} alt="" />
<b>by xitoy</b>
<b className='red2'>Date 2019</b>

</div>
<h2>Corona</h2>
    </div>
  )
}

export default Info