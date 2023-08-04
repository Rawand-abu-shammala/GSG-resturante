import React from 'react';
import './Menu.css';
import {leftMenuItems, rightMenuItems} from '../../mock/Navbardata'

class MenuSection extends React.Component {
render() {


return (
<section id="menu">
<div className="container">
    <div className="title">
    <h2>Straight From Kitchen</h2>
    <p className='subtitle'>Our Menu</p>
    </div>
    <div className="menu-items">
    <div className="menu-items-left">
        {leftMenuItems.map((menuItem, index) => (
        <div className="menu-item" key={index}>
            <img src={menuItem.image} alt={menuItem.alt} />
            <div>
            <h3 className="a">
            {menuItem.nameMale}
                <img src={menuItem.image2} alt={menuItem.alt}  className='k'/>
            </h3>
            <p>{menuItem.detalis}</p>
            </div>
            <div >
            <span className="primary-text">{menuItem.price}</span>
            </div>
        </div>
        ))}
    </div>


    
    <div className="menu-items-right">
        {rightMenuItems.map((menuItem, index) => (
        <div className="menu-item" key={index}>
            <img src={menuItem.image} alt={menuItem.alt} />
            <div>
            <h3 className="a">
                {menuItem.nameMale}
                <img src={menuItem.image2} alt={menuItem.alt} className='k'/>
            </h3>
            <p>{menuItem.detalis}</p>
            </div>
            <span className="primary-text">{menuItem.price}</span>

        </div>
        ))}
    </div>
    </div>
    
</div>
</section>
);
}
}

export default MenuSection;




