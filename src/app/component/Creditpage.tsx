"use client";
import React from 'react'
import pic1 from "./img/Credit Immo1cc.jpg"
import pic2 from './img/pretimo.png'
import pic3 from './img/pretim.png'
import Image from 'next/image'
import {motion} from "framer-motion"
function Creditpage() {
  return (
    <div className='min-h-screen text-[#4d4d4d] overflow-hidden'>
       <div className=' items-center justify-center mx-auto flex mt-10 md:mt-0 px-5'>

            <div className='block lg:flex gap-x-[50px]'>
            <motion.div initial={{x: -200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='items-center px-0 lg:px-5 md:px-[50px]  justify-center mx-auto flex'>
            <Image src={pic1} className='text-white w-full h-auto lg:h-[550px] shadow-xl rounded-[15px] md:w-auto' alt=''/>
            </motion.div>
            <motion.div initial={{x: 200, opacity:0}}
                              whileInView={{x:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='h-auto md:h-[750px] items-center justify-center px-0  lg:px-5 md:px-[50px] mx-auto flex'>
              <div className='px-0 md:px-5 lg:px-0 mt-4 md:mt-0'>
              <p className='text-[25px] px-2 md:px-0 md:text-start md:text-[32px] font-medium text-[#a22a2b] '>What is the Diaspora Real Estate Loan ?</p>
              <div className='text-start text-[18px] font-medium w-full lg:w-[650px] px-5 md:px-[50px] lg:px-3  mt-2 space-y-3'>
                <p>•	It is a credit offer intended for Congolese (DRC) by birth or citizenship living abroad and having or aiming for economic interests in the country in the real estate sector.</p>
                <p> </p>
                <p>•	Purpose of financing: Acquisition/Construction/Renovation</p>
                <p>•	Maturity of up to 5 years</p>
              </div>

              <div className='mt-5'>
              <p className='text-[25px] px-2 md:px-0 md:text-start md:text-[32px] font-medium text-[#a22a2b]'>Who is eligible ?</p>
              <div className='text-start text-[18px] font-medium w-full lg:w-[650px] px-5 md:px-[50px] lg:px-3  mt-2 space-y-3'>
                <p className=''>Any Diaspora Banking customer presenting</p>
                <p>•	A documented real estate project</p>
                <p>•	An EBCDC account active for at least 3 months</p>
                <p>•	One or more stable and regular sources of income</p>
                <p>•	A real and sufficient guarantee</p>
                <p>•	Proof of solvency: Credit report</p>
                <p>•	Purpose of financing: Acquisition/Construction/Renovation</p>

              </div>
              </div>
              </div>
             
            </motion.div>
            
          </div>
          
       </div>


       <div className='items-center justify-center mx-auto flex px-5 md:px-0 '>
       <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='px-0 lg:px-[50px] shadow-xl rounded-[15px] '>
                <p className='text-[25px] md:text-[32px] text-center font-medium  mt-10 text-[#a22a2b]'>Preparation of the application file</p>
                <div className='block lg:flex gap-x-[100px] mt-10 px-5'>
                  <div className='w-full lg:w-[500px] font-semibold text-[#4d4d4d]'>
                    <p className='text-center font-medium text-[20px] '>ACQUISITION</p>
                    <div className='px-[10px] lg:px-[70px] py-6 text-[18px] space-y-3 '>
                  <p>Find and negotiate the property to finance :</p>
                    <p>-	Sales agreement</p>
                    <p>-	Property title to be verified</p>
                    <p>-	 Investment plan</p>
                    </div>
                  </div>
                  <div className='font-medium text-[#4d4d4d]'>
                    
                    <p className='text-center font-semibold text-[20px] '>CONSTRUCTION /RENOVATION</p>
                    <div className='px-[10px] lg:px-[70px] py-6 text-[18px] space-y-3 '>
                    <p>-	Title deed to the property</p>
                    <p>-	Investment plan</p>
                    <p>-	Title to the guarantee if different</p>
                    <p>Power of attorney for possible co-owners</p>
                    </div>
                 

                  </div>

                  <div>

                  </div>
                </div>
                </motion.div>
              </div>


              <div className='mt-[100px] px-5 md:px-0'>
                <div className='items-center justify-center mx-auto block lg:flex gap-x-10 px-0 lg:px-[100px]'>
                  
                <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='items-center justify-center mx-auto flex lg:hidden '>
                      <Image src={pic2} className='w-full md:w-[500px] lg:hidden md:block h-auto rounded-[15px] shadow-xl' alt='' />
                    </motion.div>
                <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='text-start items-center w-[500px] justify-center mx-auto flex'>
                      <div className='items-center justify-center mx-auto lg:px-0 px-0'>
                      <p className='text-[32px] text-[#a22a2b]'>Guarantees</p>
                      <div className='space-y-7 font-medium text-[#4d4d4d]'>
                     <div>
                     <p className='text-[22px]'>- Real guarantees</p>
                      <p>•	The client submits the guarantees to the discretion of the bank</p>
                      <p>•	Good concerned by financing or others</p>
                      <p>•	No minor children on the titles to be registered</p>
                      <p>•	Power of attorney for co-owners</p>
                     </div>

                      <div>
                      <p className='text-[22px]'>- Personal guarantees</p>
                      <p>•	A local reference person (manager, family member, others)</p>
                      </div>
                      </div>
                      </div>
                      </motion.div>

                    <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className=' items-center justify-center mx-auto flex'>
                      <Image src={pic2} className='w-[500px] h-auto lg:block hidden  rounded-[15px] shadow-xl' alt='' />
                    </motion.div>
                </div>
              </div>

              <div className='mt-[100px] pb-[100px] px-5 md:px-0'>
                <div className='items-center justify-center mx-auto flex '>

                <div className='block lg:flex gap-x-[70px]'>
                <motion.div initial={{y: 200, opacity:0}}
        whileInView={{y:0, opacity:1}}
        transition={{duration:1.2}}
        viewport={{once:true}}>
                      <Image src={pic3} className='w-[500px] h-auto rounded-[15px] shadow-xl' alt='' />
                      </motion.div>

                      <motion.div initial={{y: 200, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1.2}}
                        viewport={{once:true}} className='text-start'>
                      <p className='text-[25px] md:text-[32px]  text-[#a22a2b]'>Why choose the Diaspora Real Estate Loan?</p>
                      <div className='space-y-7 font-medium text-[#4d4d4d]'>
                     <div>
                
                      <p>•	No need to travel</p>
                      <p>•	 Evaluations and verifications supported by the bank</p>
                      <p>•	 Remote support via the portal [Subscribe here]</p>
                      <p>•	The bank's contribution of up to 80% of the total cost of the project</p>
                      <p>•	Fast and efficient processing of files</p>
                      <p>Support from the bank for cases of withdrawal</p>
                     </div>

                      <div>
                      <p>- Personal guarantees</p>
                      <p>•	 A local reference person (manager, family member, others)</p>
                      </div>
                      </div>
                      </motion.div>
                </div>
                   

                  
                </div>
              </div>
       </div>
  )
}

export default Creditpage