import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import {AiOutlineFolderAdd} from 'react-icons/ai'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>

        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='me' />
          </div>
        </div>

        <div className='about__content'>

          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icons' />
              <h5>Experience</h5>
              <small>3+ years</small>
            </article>
            <article className='about__card'>
              <AiOutlineUsergroupAdd className='about__icons' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <AiOutlineFolderAdd className='about__icons' />
              <h5>Projects</h5>
              <small>16+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, eum, fuga nisi at tempora earum perferendis rerum recusandae dolorum alias dolor voluptates nihil unde maiores corporis laudantium sit, ipsam ducimus.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk </a>
        </div>
      </div>

    </section>
  )
}

export default About