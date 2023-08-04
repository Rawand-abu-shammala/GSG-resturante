import React, { Component } from 'react';
import Navbar from '../navbar/Navbar'
import Hero from '../hero/Hero'


export default class Home extends Component {
  render() {
    return (
      <div className='k'>
        <Navbar />
        <Hero 
        heroImg="../../assets/Rectangle 1.png"
        alt="heroImg"
        cName2="hero-text"
        title="Welcome To <br />
        Golden View Dine"
        text="Explore the authentic vegan dishes with your friends and family"
        url="\"
        buttonText="Read more"
        
        />
      </div>
    );
  }
}
