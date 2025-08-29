import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className='text-2xl text-centerpt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <b className='text-orange-600'>Welcome to Kanta – where style meets simplicity</b>
         <p>At Kanta, we believe that shopping should be inspiring, effortless, and truly rewarding. Founded with a passion for delivering quality and convenience, Kanta is your one-stop destination for discovering beautifully curated products across fashion, lifestyle, and everyday essentials.</p>
        <b className='text-orange-600'>Our Story </b>
        <p>What started as a simple idea – to make great products accessible to everyone – has grown into a vibrant online marketplace trusted by thousands. Whether you’re updating your wardrobe, finding the perfect gift, or elevating your home, Kanta brings you a seamless shopping experience backed by quality and care.</p>
          <b className='text-orange-600'>Our Mission</b>
          <p>At Kanta, our mission is to redefine everyday elegance through thoughtfully curated collections that embody sophistication, craftsmanship, and timeless beauty.
We believe luxury is not just about price—it’s about experience, intention, and detail. Every product at Kanta is selected to elevate the lives of those who appreciate refined quality, seamless design, and purposeful living. From exclusive fashion pieces to artisanal home accents, we bring you treasures that feel as exquisite as they look.
We are committed to delivering not just goods, but moments of joy—wrapped in care, delivered with grace, and remembered long after the purchase.
Kanta is where effortless style meets elevated living. </p>
         
        </div>


      </div>

          <div className='text-xl py-4'>
            <Title text1={'WHY'} text2={'US'}/>

          </div>
          <div className='flex flex-col md:flex-row text-sm mb-20 border border-gray-300'>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-gray-300'>
              <b className='text-orange-600'>Quality Assurance</b>
              <p>At Kanta, quality is not an option—it is our promise.
Every product we offer undergoes a meticulous selection process to meet our uncompromising standards. We partner with artisans, designers, and trusted manufacturers who share our dedication to craftsmanship, precision, and timeless design.</p>      
            </div>
             <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-gray-300'>
              <b className='text-orange-600'>Effortless Convenience</b>
              <p>At Kanta, we believe luxury should never feel complicated. That’s why we’ve designed every step of your shopping experience to be intuitive, seamless, and refined. </p>
              
            </div>
             <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-gray-300'>
              <b className='text-orange-600'>Exceptional Customer Service</b>
              <p>At Kanta, exceptional service is at the heart of everything we do. We don’t just serve customers — we care for individuals.</p>
              
            </div>
          

          </div>

          <NewsletterBox />
    </div>
  )
}

export default About
