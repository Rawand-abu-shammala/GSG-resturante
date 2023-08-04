import React, { Component } from 'react'
import './Section6.css'

export default class Section6 extends Component {
render() {

    const data = {
            title: "Cooking ingredients",
            subtitle: "What goes in",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit.", 
            button: "Read more",
            image: "../../../assets/Rectangle 34.png",
            
        }

return (
<section className='about'>
<div className='container bout'>
            <div className="text">
                <h2>{data.title}</h2>
                <h3 className='subtitle'>{data.subtitle}</h3>
                <p className='paragraph two'>{data.desc}</p>
            <a href="/" className='button'>{data.button}</a>
        
            </div>
                <div className="image">
                    <img src={data.image} alt="images" />
                </div>
</div>
</section>
)
}
}
