import React from 'react'

const NewsLetterBox = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-600'>Subscribe now and get 20% off your first order!</p>
        <p className='text-gray-400 mt-3' >Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <form  onSubmit={handleSubmit} className='w-1/2 sm:w1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
            <button type='submit' className='bg-orange-600 border-black text-black text-xs px-10 py-4 active:bg-white hover:text-black duration-500'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox