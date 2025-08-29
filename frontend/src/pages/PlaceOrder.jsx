import React from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {


 const [method, setMethod] = useState('cod');

 const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
          <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>  
                    {/* left side */}


                            <div className='text-xl sm:text-2xl my-3'> 
                              <Title text1={"DELIVERY"} text2={"INFORMATION"} />

                                      <div className='flex gap-3'>
                                          <input  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='First Name' type="text" />
                                          <input  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Last Name' type="text" />

                                      </div>

                                      <input  className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='Email Address' type="email" />
                                      <input  className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='Street' type="text" />
                                      <div className='flex gap-3 mt-3'>
                                          <input  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='City' type="text" />
                                          <input  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Town' type="text" />

                                      </div>

                                      <div className='flex gap-3 mt-3'>
                                          <input  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Zipcode' type="number" />
                                          <input  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' placeholder='Country' type="text" />

                                      </div>

                                      <input  className='border border-gray-300 rounded py-1.5 px-3.5 w-full mt-3' placeholder='Phone Number' type="number" />
                              </div>







            </div>




          {/* right side */}                
          <div className='mt-8'>
                                    <div className='mt-8 min-w-80'>
                                      <CartTotal />

                                    </div>
                                    <div className='mt-12'>
                                        <Title text1={"PAYMENT"} text2={"METHOD"}/>

                            {/* payment methods */}
                      <div className='flex flex-col gap-3 lg:flex-row'>    
                            <div onClick={()=>setMethod('stripe')} className='flex gap-3 items-center border border-gray-200 p-2 px-3 cursor-pointer rounded-2xl'>
                                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400': ''}`}></p>
                                  <img className='h-5 mx-4' src={assets.stripe_logo} alt="" />
                            </div>
                            <div onClick={()=>setMethod('razorpay')} className='flex gap-3 items-center border border-gray-200 p-2 px-3 cursor-pointer rounded-2xl'>
                                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400': ''} `}></p>
                                  <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
                            </div>
                            <div onClick={()=>setMethod('momo')} className='flex gap-3 items-center border border-gray-200 p-2 px-3 cursor-pointer rounded-2xl'>
                                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'momo' ? 'bg-green-400' : ''}`}></p>
                                  <img className='h-5 mx-4' src={assets.mtn} alt="" />
                            </div>
                            <div onClick={()=>setMethod('cod')} className='flex gap-3 items-center border border-gray-200 p-2 px-3 cursor-pointer rounded-2xl'>
                                  <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400': ''} `}></p>
                                  <p className='text-grey-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
                                
                            </div>

                            </div>      

                            <div className='w-full text-end mt-8'>
                              <button onClick={()=>navigate('/orders')} className='bg-orange-600 text-white py-3 px-16 text-sm my-8 '>PLACE ORDER</button>

                         

                            </div>

           </div>




          </div>
         

    </div>
  )
}

export default PlaceOrder
