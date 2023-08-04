import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
render() {

const data = {
    title: "About Us",
    subtitle: "Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine",
    desc2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque.",
    button: "Read more",
    image: "../../../assets/Untitled design (6) 1 (1).png",
    
}

return (
<section className='about'>
<div className='container bout'>
    <div className="text">
        <h2>{data.title}</h2>
        <h3 className='subtitle'>{data.subtitle}</h3>
        <p className='paragraph'>{data.desc2}</p>
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
