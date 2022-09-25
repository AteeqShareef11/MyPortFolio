import React from 'react'
import './Services.css'
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Desighn</h3>
          </div>
         <ul className='service_list'>
          <li>
            <p>Need help with designing your website? I can create beautiful website designs based on your content, or redesign old websites to improve your conversions or achieve your business goals.</p>
          </li>
         </ul>

        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Web design</h3>
          </div>
          <ul className='service_list'>
          <li>
            <p>The first thing that brings someone to your app is a beautiful, original and modern look and feel.</p>
          </li>

         </ul>

        </article>

        {/* /////////////////////web development/////////////// */}
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
          <li>
            <p>Need a fully custom website for yourself or your business? I create beautiful and unique designs to meet your goals and target audience.</p>
          </li>

         </ul>

        </article>

        {/* /////////////////////////content////////////////////////////////// */}


      </div>
    </section>
  )
}

export default Services