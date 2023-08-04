import React, { Component } from 'react';
import './Sectin5.css';

export default class Section5 extends Component {
render() {
const data = {
image1: '../../../assets/Untitled_design__1_-removebg-preview 1.png',
image2: '../../../assets/Untitled_design__1_-removebg-preview 2.png',
};

return (
<section className='section5'>
<div className="containerr">
    <div className="img-container">
        <div className="img-left">
            <img src={data.image1} alt="" className="img1" />
            <img src={data.image2} alt="" className="img2" />
        </div>
        <div className="content">
            <h2 className='title-first'>
                Come join us for a lunch this weekend and enjoy
            </h2>
            <h3 className='title-sec'>
                FLAT 10% OFF
            </h3>
            <button className='button'>
                Book Table
            </button>
        </div>
        <div className="img-right">
            <img src={data.image1} alt="" className="img1" />
            <img src={data.image2} alt="" className="img2" />
        </div>
    </div>
</div>
</section>
);
}
}








