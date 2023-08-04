import React, { Component } from 'react'
import './Blog.css'
import {blog} from '../../mock/Navbardata'

export default class Blog extends Component {
render() {
return (
<section className='blog'>
<div className='container2'>
  <div className='blog-content'>
    <div className='section-title'>
      <h2 className='title'>Blogs</h2>
      <p className='subtitle'>words from our food lovers</p>
    </div>

    <div className='cards-blog-container'>
      {blog.map((blog, index) => (
        <div className='card-blog' key={index}>
          <img src={blog.image} className='' alt='' />
          <div className="blog-text">
          <h3>{blog.title}</h3>
          <p className='card-text subtitle'>{blog.text}</p>
          <a href="/">{blog.button}</a>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</section>
)
}
}
