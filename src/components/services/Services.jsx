import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './service.css'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container service__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='servive__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='servive__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='servive__list'>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
             <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li> 
            <li>
              <BsCheck className='service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATER */}
      </div>
    </section>
  )
}

export default Services