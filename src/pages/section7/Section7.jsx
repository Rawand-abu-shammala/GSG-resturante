import React, { Component } from 'react'
import './Section7.css'
import {section7} from '../../mock/Navbardata'

export default class Section7 extends Component {
render() {
return (
<section className='Branding'>
<div className='container grid'>
    {section7.map((value) =>(

        <div className='flex'>
        <div className='imag'>
            <img src={value.image} alt="" />
        </div>
        <div className='para'>
            <h2>{value.heading}</h2>
            <p>{value.desc}</p>
        </div>
        </div>
    ))}
</div>
</section>
)
}
}
