import React, { Component } from 'react';
import { Navbardata } from '../../mock/Navbardata';
import styles from './Navbar.css';



export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles.navbar}>
        <ul className='nav-menu'>
        <img src= '/assets/Logo.svg' alt='logo' />

          {Navbardata.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        <img src='/assets/akar-icons_search.svg' alt='logo' />


<button className='btn'>
  <img src='/assets/Vector 1 (1).svg' alt='logo' className='vector1' />
  <p>Book Now</p>

  <img src='/assets/Vector 3 (1).svg' alt='logo' className='vector3' />
</button>


          
        </ul>

       
      </nav>
    );
  }
}






