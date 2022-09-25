import React from 'react'
import './Testimonials.css'
import AVTR1 from "../../asset/avatar1.jpg"
import AVTR2 from "../../asset/avatar2.jpg"
import AVTR3 from "../../asset/avatar3.jpg"
import AVTR4 from "../../asset/avatar4.jpg"
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
{
  id:1,
  image:AVTR1,
  name:"Earnet Aethel",
  review:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"

},
{
  id:2,
  image:AVTR2,
  name:"Earnet Aethel",
  review:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"

},
{
  id:3,
  image:AVTR3,
  name:"Earnet Aethel",
  review:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"

},
{
  id:4,
  image:AVTR4,
  name:"Earnet Aethel",
  review:"here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum,"

}
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className='container testimonial_container'
        modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
     
      pagination={{ clickable: true }}
    
    
      >

{
  data.map((item)=>(
    <SwiperSlide key={item.id} className='testimonial'>
          <div className='client_img'>
            <img src={item.image} alt='client_img'/>
          </div>
          <h5 className='client_name'>{item.name}</h5>
            <small className='client_review'>{item.review}</small>
        </SwiperSlide>
  ))
}



        
      </Swiper>
   

    </section>
  )
}

export default Testimonials