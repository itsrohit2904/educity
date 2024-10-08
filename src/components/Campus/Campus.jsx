import React from 'react'
import './Campus.css'
import gallary_2 from '../../assets/gallery-2.png'
import gallary_1 from '../../assets/gallery-1.png'
import gallary_3 from '../../assets/gallery-3.png'
import gallary_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallary">
            <img src={gallary_1}/>
            <img src={gallary_2}/>
            <img src={gallary_3}/>
            <img src={gallary_4}/>
        </div>
        <button className='btn dark-btn'>See More here<img src={white_arrow}/></button>
    </div>
  )
}

export default Campus