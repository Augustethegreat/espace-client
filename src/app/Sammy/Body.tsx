import { useState } from 'react'
import bgimg from "../Sammy/img/pexels-arek-socha-238681.jpg"
import buttimg from "../Sammy/img/pexels-pixabay-268832.jpg"
import devicePic from "../Sammy/img/mediaDevice.png"
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { MdBatteryCharging60 } from "react-icons/md";
import { FaCloudDownloadAlt, FaGasPump } from "react-icons/fa";
import { MdOutlineSensors } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { TbWindElectricity } from "react-icons/tb";
import {motion} from "framer-motion"
import Slideshow from './Carousel'
import Slides from './slide'
import Footers from './footer'

function Body() {

  const [text, count] = useTypewriter({
    words: [
        "8,333,333 Water towers",
        "200 Lake Gardas",
        "0.1 North seas",
        "10,000,000,000,000,000 Liters"
    ],
    loop: true,
    delaySpeed:2000,
})
  return (
    <div className=' h-auto mt-[-2px] '>
        <div className=' text-white  font-extrabold bg-black text-center justify-center items-center mx-auto'>
     
         <div className='w-full h-auto opacity-60 shadow-black  bg-black'>
         <img src={bgimg.src} alt="" className='bg-black w-full h-auto opacity-60 shadow-black' />   
         </div>
        
         <div className='mt-[-775px] pb-[250px] text-center opacity-90 font-extrabold'>
           <p className='pt-10 text-[90px] text-[#4cb5e5]'>We want to save</p>
            <p className='pt-10 text-[90px] text-[#fff]'>
            <span className='mr-3 '>{text}
      <Cursor cursorColor='white' />
      </span></p>
            <p className='pt-10 text-[90px] text-[#4cb5e5]'>of clean drinking water</p>
           </div>
       
         
        </div>
      
        <div className='bg-[#ececec] w-full h-[900px]'>
        <p className='text-[#414141] font-extrabold text-[60px] pt-5 text-center'>
        Self-Powered, Smart Turbine Flow Meter</p>
            <div className='flex gap-x-[50px] mt-4 items-center justify-center mx-0'>
            <div 
        className='space-y-7' >
                <motion.div 
        initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3 rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
                <div className='py-5 w-[80px] px-5 h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <FaGasPump className='w-[40px]  h-[40px]   text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[300px]  text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3 rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer '>
               <div className='py-5 w-[80px] px-5 h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] shadow-xl'>
               <MdBatteryCharging60 className='w-[40px]  h-[40px]   text-white'/>
               </div>
                  <div className=''>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[300px]  text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3 rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[80px] px-5 h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <FaCloudDownloadAlt className='w-[40px]  h-[40px]   text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[300px]  text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: -200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3 rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[80px] px-5 h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <RiDashboard3Line className='w-[40px]  h-[40px]   text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[300px]  text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
              </div>
              <div 
         className='space-y-7'> 
                <motion.div 
        initial={{x: 200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3 rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[80px] px-5 h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <TbDeviceLandlinePhone className='w-[40px]  h-[40px]   text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[300px]  text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: 200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3 rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[80px] px-5 h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <TbWindElectricity className='w-[40px]  h-[40px]   text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[300px]  text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: 200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3 rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[80px] px-5 h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <RiDashboard3Line className='w-[40px]  h-[40px]   text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[300px]  text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
                <motion.div 
        initial={{x: 200, opacity:0}}
        whileInView={{x:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className='flex gap-x-2 bg-white p-3 rounded-[15px] shadow-xl text-[#5a5a5a] hover:text-white hover:bg-[#3e889e] hover:cursor-pointer'>
               <div className='py-5 w-[80px] px-5 h-[80px] mt-5  bg-[#4cb5e5] rounded-[50px] '>
               <RiDashboard3Line className='w-[40px]  h-[40px]   text-white  '/>
               </div>
                  <div>
                    <p className='font-bold w-[300px] '>Wireless Self-Powered Solution</p>
                    <p className='w-[300px]  text-[14px] font-semibold'>Our System is independent from external power supplies as it harvests energy with its integrated hydro-power turbine and stores it in an internal battery.</p>
                  </div>
                </motion.div>
              </div>
            </div>
        </div>

        <div 
         className='flex items-center justify-center mx-0 gap-x-1 py-[100px] bg-[#003044] '>
          <motion.div 
  
      initial={{y: 200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:false}} className=' space-y-5'>
              <p className='font-extrabold text-[#20e2c4] text-[55px] leading-[50px] tracking-[2px] w-[650px] text-shadow-xl shadow-white '>Disruptive AI technology for real-time anomaly management of water networks</p>
              <p className='w-[500px] text-white font-medium'>HULO’s algorithms provide water utilities with know-how about their water network. Together, we detect, localize and quantify leaks in the very early stages. By tailored solutions the knowledge stays at the client’s side.</p>
                <p className='w-[310px] font-extrabold text-white'>Proven and research-backed AI technology.
                Trusted by several water utilities</p>
                <div className='w-[650px] h-[150px] rounded-[60px] bg-[#171f33] shadow-lg'>
                  <img src={buttimg.src} className='w-[650px] h-[150px] rounded-[60px]' alt=""  />
                <div className=' space-y-5'>
                <p className='text-center font-extrabold text-white text-[30px]  mt-[-140px]'>Interested?</p>
                <div className='items-center justify-center mx-0 px-[34%] '>
                  <button className='font-bold text-[17px] bg-[#20e2c4]  px-4 text-black py-2 border-[2px] rounded-[10px] shadow-lg border-white hover:bg-[#171f33] hover:text-white '
                  >Discover our solutions</button>
                </div>
                  </div>
                  </div>
                  </motion.div>
                  <motion.div 
               initial={{y: 200, opacity:0}}
               whileInView={{y:0, opacity:1}}
                  transition={{duration:1.2}}
                  viewport={{once:false}}>
            <img src={devicePic.src} className='w-[500px] h-auto' alt=""  />
            </motion.div>
        </div>


        <div className='bg-[#ececec] w-full h-[900px]'>
          <Slides/>
        </div>
        <div>
          <Footers/>
        </div>
    </div>
  )
}

export default Body