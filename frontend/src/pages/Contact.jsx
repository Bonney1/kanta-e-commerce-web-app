import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
          <div className='text-2xl text-center pt-10 border-t'>
              <Title text1={'CONTACT'} text2={'US'}/>
          </div>

          <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 justify-center'>
            <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>

              <p className='font-semibold text-xl text-orange-600'>Our Store</p>
              <p className='text-gray-500'>123 Kofi Street <br />Accra Boulevard</p>
              <p className='text-gray-500'> Tel: 055-844-0032 <br />Email: niibonney619@gmail.com</p>
              <p className='text-orange-600 font-semibold text-xl'>Careers at Kanta</p>
              <p className='text-gray-500'>Learn about our teams and job openings</p>
              <button className='border bg-orange-600 border-black px-8 py-4 text-sm hover:bg-white hover:text-black transition-all duration-500'>Explore Jobs</button>
            </div>

          </div>
          <NewsLetterBox />
    </div>
  )
}

export default Contact
