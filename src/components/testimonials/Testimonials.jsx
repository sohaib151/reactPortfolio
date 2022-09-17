import React from 'react'
import './testimonials.css'
import AV1 from '../../assets/me3.jpg'
import AV2 from '../../assets/me.jpg'
import AV3 from '../../assets/me2.jpg'
import AV4 from '../../assets/me.jpg'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
const data=[
    {
        avater:AV1,
        name:'Sohaib khan',
        review:'loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, placeat voluptatum eaque distinctio vero sequi quisquam quo, ducimus asperiores quasi inventore. Reprehenderit, modi in excepturi consectetur doloribus impedit saepe commodi',

    },
    {
        avater:AV2,
        name:'khan',
        review:'loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, placeat voluptatum eaque distinctio vero sequi quisquam quo, ducimus asperiores quasi inventore. Reprehenderit, modi in excepturi consectetur doloribus impedit saepe commodi',

    },
    {
        avater:AV3,
        name:'rana khan',
        review:'loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, placeat voluptatum eaque distinctio vero sequi quisquam quo, ducimus asperiores quasi inventore. Reprehenderit, modi in excepturi consectetur doloribus impedit saepe commodi',

    },
    {
        avater:AV4,
        name:'Sohaib khan',
        review:'loremLorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, placeat voluptatum eaque distinctio vero sequi quisquam quo, ducimus asperiores quasi inventore. Reprehenderit, modi in excepturi consectetur doloribus impedit saepe commodi',

    },
]

  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
         modules={[ Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true }}
         
         >

        {
            data.map(({avater,name,review},index)=>{
                return(
                  
                    <SwiperSlide key={index} className='testimonials'>
                        <div className='client__avatar'>
                            <img src={avater} alt='avartar one'/>
                        </div>
                        <h5 className='client__name'> {name}</h5>
                        <small className='client__review'>{review}</small>
                    </SwiperSlide>
                )
            })
        }
        {/* <article className='testimonials'>
            <div className='client__avatar'>
                <img src={M1} alt='avartar one'/>
            </div>
            <h5 className='client__name'> Sohaib khan</h5>
            <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, placeat voluptatum eaque distinctio vero sequi quisquam quo, ducimus asperiores quasi inventore. Reprehenderit, modi in excepturi consectetur doloribus impedit saepe commodi.</small>
        </article>
        <article className='testimonials'>
            <div className='client__avatar'>
                <img src={M1} alt='avartar one'/>
            </div>
            <h5 className='client__name'> Sohaib khan</h5>
            <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, placeat voluptatum eaque distinctio vero sequi quisquam quo, ducimus asperiores quasi inventore. Reprehenderit, modi in excepturi consectetur doloribus impedit saepe commodi.</small>
        </article>
        <article className='testimonials'>
            <div className='client__avatar'>
                <img src={M1} alt='avartar one'/>
            </div>
            <h5 className='client__name'> Sohaib khan</h5>
            <small className='client__review'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, placeat voluptatum eaque distinctio vero sequi quisquam quo, ducimus asperiores quasi inventore. Reprehenderit, modi in excepturi consectetur doloribus impedit saepe commodi.</small>
        </article> */}
        
      </Swiper>
    </section>
  )
}

export default Testimonials