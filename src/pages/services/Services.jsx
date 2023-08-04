import React, { Component } from 'react';
import { services } from '../../mock/Navbardata';
import './Services.css';

export default class Services extends Component {
  render() {
    return (
      <section className='services'>
        <div className='container2'>
          <div className='services-content'>
            <div className='section-title'>
              <h2 className='title serv'>Special</h2>
              <p className='subtitle'>What makes us special</p>
            </div>

            <div className='cards-container'>
              {services.map((service, index) => (
                <div className='card' key={index}>
                  <img src={service.image} className='' alt='' />
                  <h3>{service.title}</h3>
                  <p className='card-text subtitle'>{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

