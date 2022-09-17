import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/pic1.jpg'
import IMG3 from '../../assets/pic2.jpg'
import IMG4 from '../../assets/me3.jpg'
import IMG2 from '../../assets/pic4.jpg'
import IMG5 from '../../assets/R.jpg'
import IMG6 from '../../assets/pic6.jpg'
const Portfolio = () => {
    const data=[
        {
            id:1,
            image:IMG1,
            title:'PortFolio WebSite',
            github:'https://github.com',
            demo:'https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard'
        },
        {
            id:2,
            image:IMG2,
            title:'PortFolio WebSite',
            github:'https://github.com',
            demo:'https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard'
        },
        {
            id:3,
            image:IMG3,
            title:'PortFolio WebSite',
            github:'https://github.com',
            demo:'https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard'
        },
        {
            id:4,
            image:IMG4,
            title:'PortFolio WebSite',
            github:'https://github.com',
            demo:'https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard'
        },
        {
            id:5,
            image:IMG5,
            title:'PortFolio WebSite',
            github:'https://github.com',
            demo:'https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard'
        },
        {
            id:6,
            image:IMG6,
            title:'PortFolio WebSite',
            github:'https://github.com',
            demo:'https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard'
        }
    ]
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className='container portfolio__container'>
            
            {data.map(({id,image,github,title,demo})=>{
                return(
                <article className='portfolio__item' key={id}>
                <div className='portfolio__item-image'> 
                <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                <a href={github} className='btn' rel='noopener noreferrer' target='_blank'>Github</a>
                <a href={demo} rel='noopener noreferrer' target='_blank' className='btn'>Live Demo</a>
                </div>
            </article>
                )
            })}



            {/* <article className='portfolio__item'>
                <div className='portfolio__item-image'> 
                <img src={IMG1} alt='pic1'/>
                </div>
                <h3>This is a porfolio item title</h3>
                <div className='portfolio__item-cta'>
                <a href='https://github.com' className='btn' rel='noopener noreferrer' target='_blank'>Github</a>
                <a href='https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard' rel='noopener noreferrer' target='_blank' className='btn'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'> 
                <img src={IMG2} alt='pic1'/>
                </div>
                <h3>This is a porfolio item title</h3>
                <div className='portfolio__item-cta'>
                <a href='https://github.com' className='btn' rel='noopener noreferrer' target='_blank'>Github</a>
                <a href='https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard' rel='noopener noreferrer' target='_blank' className='btn'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'> 
                <img src={IMG3} alt='pic1'/>
                </div>
                <h3>This is a porfolio item title</h3>
                <div className='portfolio__item-cta'>
                <a href='https://github.com' className='btn' rel='noopener noreferrer' target='_blank'>Github</a>
                <a href='https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard' rel='noopener noreferrer' target='_blank' className='btn'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'> 
                <img src={IMG4} alt='pic1'/>
                </div>
                <h3>This is a porfolio item title</h3>
                <div className='portfolio__item-cta'>
                <a href='https://github.com' className='btn' rel='noopener noreferrer' target='_blank'>Github</a>
                <a href='https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard' rel='noopener noreferrer' target='_blank' className='btn'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'> 
                <img src={IMG5} alt='pic1'/>
                </div>
                <h3>This is a porfolio item title</h3>
                <div className='portfolio__item-cta'>
                <a href='https://github.com' className='btn' rel='noopener noreferrer' target='_blank'>Github</a>
                <a href='https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard' rel='noopener noreferrer' target='_blank' className='btn'>Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item'>
                <div className='portfolio__item-image'> 
                <img src={IMG6} alt='pic1'/>
                </div>
                <h3>This is a porfolio item title</h3>
                <div className='portfolio__item-cta'>
                <a href='https://github.com' className='btn' rel='noopener noreferrer' target='_blank'>Github</a>
                <a href='https://dribbble.com/shots/19308221-Pillar-Web-App-Smart-Home-Dashboard' rel='noopener noreferrer' target='_blank' className='btn'>Live Demo</a>
                </div>
            </article> */}
        </div>
    </section>
  )
}

export default Portfolio