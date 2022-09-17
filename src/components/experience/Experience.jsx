import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
       <div className="container experience__container">
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icons'/>
              <div>
             <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icons'/>
             <div>
             <h4>CSS</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icons'/>
             <div>
             <h4>Java Script</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icons'/>
              <div>
             <h4>React JS</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icons'/>
             <div>
             <h4>React BootStrap</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
          </div>

        </div>
       {/* End of Frontend */}

       <div className='experience__backend'>
          <h3>Backend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icons'/>
              <div>
             <h4>Node Js</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icons'/>
              <div>
             <h4>Mongo DB</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icons'/>
              <div>
             <h4>Php</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icons'/>
             <div>
             <h4>My Sql</h4>
             <small className='text-light'>Experienced</small>
             </div>
            </article>
            <article className='experience_details'>
             <BsPatchCheckFill className='experience_details_icons'/>
            <div>
             <h4>Express</h4>
             <small className='text-light'>Experienced</small>
             </div>

            </article>
          </div>

        </div>

       </div>
    </section>
  )
}

export default Experience