import React, { Component } from 'react';
import './Hero.css';

export default class Hero extends Component {
  render() {
    const {
      heroImg,
      alt,
      text,
      url,
      buttonText,
    } = this.props;

    return (
      <div className='heroImg'>
        <div className="hero-container">
          <img src={heroImg} alt={alt} className='image' />
          <div className="hero-text">
            <h1>
            Welcome To <br />
        Golden View Dine
            </h1>
            <p className='text' >{text}</p>
            <div className="cButton">
            <a href={url} className='button'>
              {buttonText}
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
